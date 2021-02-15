/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "emotion-theming";
import { getAbsoluteValue } from "../../../../viewer/utils/LayoutCalc";

import { CONNECTION_STROKE_SIZE } from "../Constants";
import { Model } from "../../../../entities/Model";
import { ProcessedCase } from "../../../../entities/ProcessedCase";
import { ProcessedConnection } from "../../../../entities/ProcessedConnection";
import { ProcessedDataSource } from "../../../../entities/ProcessedDataSource";
import { ProcessedAction } from "../../../../entities/ProcessedAction";
import { ProcessedDataPurpose } from "../../../../entities/ProcessedDataPurpose";

interface Props {
  modelState: Model;
  canvasWidth: number;
  factorizedWidth: number;
  canvasPadding: number;

  x1: number;
  x2: number;
  y1: number;
  y2: number;

  processedCase: ProcessedCase;
  processedConnection: ProcessedConnection;
  connectionOverlayOffset: number;
  caseHeightAbove: number;

  showDetailedModel: boolean;
  isLowMode: boolean;
  openCases: string[];
  onEditConnection: ( processedConnection: ProcessedConnection, processedCase: ProcessedCase ) => void;
}

const EditConnectionOverlay: React.FunctionComponent<Props> = props => {

  const theme = useTheme<any>();

  const [isHovering, setIsHovering] = useState<boolean>( false );

  const conType = props.processedConnection.connectionType;
  const [color, setColor] = useState<string>( "transparent" );
  const dasharray = !!conType.strokeDasharray ? conType.strokeDasharray : "1, 0";

  const getItemById = ( id: string ) => {
    if( props.processedCase ) {
      return [
        props.processedCase.dataSources.find( ( dS: ProcessedDataSource ) => {
          return dS.dataSource.id === id;
        } ),
        props.processedCase.dataPurposes.find( ( dP: ProcessedDataPurpose ) => {
          return dP.dataPurpose.id === id;
        } ),
        props.processedCase.actions.find( ( a: ProcessedAction ) => {
          return a.action.id === id;
        } )
      ].filter( ( item: any ) => item !== undefined )[0];
    }
  };

  const source = getItemById( props.processedConnection.connection.source );
  const destination = getItemById( props.processedConnection.connection.destination );

  const strokeVariance = props.isLowMode
    ? 0
    : getAbsoluteValue( props.factorizedWidth, CONNECTION_STROKE_SIZE ) / (5 * CONNECTION_STROKE_SIZE);

  useEffect( () => {
    isHovering ? setColor( theme.COLORS.EDIT.PRIMARY.DEFAULT ) : setColor( "transparent" );
  }, [isHovering] );

  const arrowTranslate = props.processedConnection.arrowTranslate.split( ',' )[0] + "," + (parseInt(
    props.processedConnection.arrowTranslate.split( ',' )[1].split( ")" )[0] ) - props.connectionOverlayOffset
    - props.caseHeightAbove) + ")";
  return (
    <React.Fragment>
      <g className={"Connection"}
         css={theme => ([{
           cursor: "pointer"
         }])}
         onMouseEnter={() => {
           setIsHovering( true )
         }}
         onMouseLeave={() => {
           setIsHovering( false )
         }}
         onClick={() => {
           props.onEditConnection( props.processedConnection, props.processedCase );
         }}
      >


        {props.showDetailedModel && source && destination && (
          <React.Fragment>
            <line x1={props.processedConnection.x1}
                  y1={props.processedConnection.y1 - props.connectionOverlayOffset
                  - props.caseHeightAbove}
                  x2={props.processedConnection.x2}
                  y2={props.processedConnection.y2 - props.connectionOverlayOffset
                  - props.caseHeightAbove}
                  stroke={color}
                  filter={props.isLowMode ? '' : "url(#shadow)"}
                  strokeDasharray={dasharray}
                  strokeWidth={props.isLowMode ? '4px' : getAbsoluteValue( props.canvasWidth, CONNECTION_STROKE_SIZE )}

            />
            <path transform={arrowTranslate}
                  d={props.processedConnection.arrowD}
                  fill={color}
            />

            {props.processedConnection.connection.position.start !== props.processedConnection.connection.position.end
            && source.x !== destination.x && (
              <g>
                <line x1={props.processedConnection.startX}
                      y1={props.processedConnection.startY! - props.connectionOverlayOffset
                      - props.caseHeightAbove - strokeVariance}
                      x2={props.processedConnection.x1 + strokeVariance}
                      y2={props.processedConnection.startY! - props.connectionOverlayOffset
                      - props.caseHeightAbove + strokeVariance}
                      stroke={color}
                      filter={props.isLowMode ? '' : "url(#shadow)"}
                      strokeDasharray={dasharray}
                      strokeWidth={props.isLowMode ?
                        '4px' :
                        getAbsoluteValue( props.canvasWidth, CONNECTION_STROKE_SIZE )}
                />
                {source.x > destination.x && (
                  <line x1={props.processedConnection.x1 - strokeVariance}
                        y1={props.processedConnection.startY! - props.connectionOverlayOffset
                        - props.caseHeightAbove + strokeVariance}
                        x2={props.processedConnection.x1 + strokeVariance}
                        y2={props.processedConnection.y2 - props.connectionOverlayOffset
                        - props.caseHeightAbove - strokeVariance * 2}
                        stroke={color}
                        filter={props.isLowMode ? '' : "url(#shadow)"}
                        strokeDasharray={dasharray}
                        strokeWidth={props.isLowMode ?
                          '4px' :
                          getAbsoluteValue( props.canvasWidth, CONNECTION_STROKE_SIZE )}
                  />
                )}
                {source.x < destination.x && (
                  <line x1={props.processedConnection.x1 + strokeVariance}
                        y1={props.processedConnection.startY! - props.connectionOverlayOffset
                        - props.caseHeightAbove + strokeVariance}
                        x2={props.processedConnection.x1 - strokeVariance}
                        y2={(source.y >= destination.y ? props.processedConnection.y1 : props.processedConnection.y2)
                        - props.connectionOverlayOffset - props.caseHeightAbove}
                        stroke={color}
                        filter={props.isLowMode ? '' : "url(#shadow)"}
                        strokeDasharray={dasharray}
                        strokeWidth={props.isLowMode ?
                          '4px' :
                          getAbsoluteValue( props.canvasWidth, CONNECTION_STROKE_SIZE )}
                  />
                )}

              </g>
            )}
          </React.Fragment>
        )}
        {!props.showDetailedModel && (
          <path
            transform={props.processedConnection.arrowTranslate}
            d={props.processedConnection.arrowD}
            fill={color}
          />
        )}


      </g>
    </React.Fragment>

  );
};

export { EditConnectionOverlay };