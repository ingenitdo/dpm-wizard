import * as React from "react";
import { EllipsisDialogData, SVGText } from "./SVGText";
import {
  CONNECTION_STROKE_SIZE
} from "../Constants";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import { ProcessedConnection } from "../../entities/ProcessedConnection";
import { ProcessedCase } from "../../entities/ProcessedCase";
import { ProcessedDataSource } from "../../entities/ProcessedDataSource";
import { ProcessedDataPurpose } from "../../entities/ProcessedDataPurpose";
import { ProcessedAction } from "../../entities/ProcessedAction";
import { Colors } from "../../entities/Colors";

interface Props {
  processedConnection: ProcessedConnection;
  processedCase: ProcessedCase;
  activeObjects: string[];
  canvasWidth: number;
  onEllipsisClick: ( ellipsisDialogData: EllipsisDialogData ) => void;
  showDetailedModel: boolean;
  isLowMode: boolean;
  colors: Colors;
  isPreview?: boolean;
  isTutorialHighlight?: boolean;
}

const SVGConnection: React.FunctionComponent<Props> = props => {

  const conType = props.processedConnection.connectionType;
  const color = props.isTutorialHighlight ? props.colors.tutorialBackground : conType.color;
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
    : getAbsoluteValue( props.canvasWidth, CONNECTION_STROKE_SIZE ) / (5 * CONNECTION_STROKE_SIZE);

  return (
    <g className={"Connection"}>

      {props.showDetailedModel && (
        <>
          <line x1={props.processedConnection.x1}
                y1={props.processedConnection.y1}
                x2={props.processedConnection.x2}
                y2={props.processedConnection.y2}
                stroke={color}
                filter={props.isLowMode ? '' : "url(#shadow)"}
                strokeDasharray={dasharray}
                strokeWidth={!props.isPreview ? props.isLowMode ? '4px' : getAbsoluteValue( props.canvasWidth, CONNECTION_STROKE_SIZE ) : getAbsoluteValue( props.canvasWidth, CONNECTION_STROKE_SIZE )*2}
          />
          <path transform={props.processedConnection.arrowTranslate}
                d={props.processedConnection.arrowD}
                fill={color}
          />

          {props.processedConnection.connection.position.start !== props.processedConnection.connection.position.end
          && source.x !== destination.x && (
            <g>
              <line x1={source.x > destination.x ? props.processedConnection.startX + strokeVariance : props.processedConnection.startX}
                    y1={props.processedConnection.startY - strokeVariance}
                    x2={source.x > destination.x ? props.processedConnection.x1 - strokeVariance : props.processedConnection.x1 + strokeVariance}
                    y2={props.processedConnection.startY + strokeVariance}
                    stroke={color}
                    filter={props.isLowMode ? '' : "url(#shadow)"}
                    strokeDasharray={dasharray}
                    strokeWidth={props.isLowMode ?
                      '4px' :
                      getAbsoluteValue( props.canvasWidth, CONNECTION_STROKE_SIZE )}
              />
              { source.x > destination.x && (
                <line x1={props.processedConnection.x1 - strokeVariance}
                      y1={props.processedConnection.startY - strokeVariance}
                      x2={props.processedConnection.x1 + strokeVariance}
                      y2={props.processedConnection.y2}
                      stroke={color}
                      filter={props.isLowMode ? '' : "url(#shadow)"}
                      strokeDasharray={dasharray}
                      strokeWidth={props.isLowMode ?
                        '4px' :
                        getAbsoluteValue( props.canvasWidth, CONNECTION_STROKE_SIZE )}
                />
              )}
              { source.x < destination.x && (
                <line x1={props.processedConnection.x1 + strokeVariance}
                      y1={props.processedConnection.startY + strokeVariance}
                      x2={props.processedConnection.x1 - strokeVariance}
                      y2={source.y >= destination.y ? props.processedConnection.y1 : props.processedConnection.y2}
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
        </>
      )}
      {!props.showDetailedModel && (
        <path
          transform={props.processedConnection.arrowTranslate}
          d={props.processedConnection.arrowD}
          fill={color}
        />
      )}


      {props.processedConnection.connection.label.length > 0 && (
        <SVGText x={props.processedConnection.textX}
                 y={props.processedConnection.textY}
                 height={props.processedConnection.textHeight}
                 width={props.processedConnection.textWidth}
                 str={[props.processedConnection.connection.label]}
                 textSize={conType.labelSize}
                 textOverflow={'ellipsis'}
                 textEllipsis={props.processedConnection.connection.textEllipsis}
                 onEllipsisClick={props.onEllipsisClick}
                 colors={props.colors}
                 color={conType.color}
                 textAnchor={props.processedConnection.textAnchor}
                 canvasWidth={props.canvasWidth}
                 showDetailedModel={props.showDetailedModel}
        />
      )}


    </g>
  );

};

export { SVGConnection };