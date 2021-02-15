/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useState } from "react";
import { ModelUpdater } from "../useModelState";
import { useTheme } from "emotion-theming";
import { EditButton } from "./widgets/EditButton";
import { SizeButton } from "./widgets/SizeButton";
import { getAbsoluteValue } from "../../../../viewer/utils/LayoutCalc";
import { DATASOURCE_AND_DATAPURPOSE_WIDTH } from "../../../../viewer/Constants";
import { PositionSelect } from "./widgets/PositionSelect";
import { ConnectionSelect } from "./widgets/ConnectionSelect";
import { v4 as uuidv4 } from 'uuid';
import { Model } from "../../../../entities/Model";
import { changePositon, decreaseItemSize, increaseItemSize } from "./ProcessingUtils";
import { ProcessedCase } from "../../../../entities/ProcessedCase";
import { ProcessedDataSource } from "../../../../entities/ProcessedDataSource";

interface Props {
  canvasX: number;
  canvasY: number;
  canvasWidth: number;
  canvasPadding: number;
  baseYScrollOffset: number;

  x: number;
  y: number;
  width: number;

  height: number;
  isFirst: boolean;

  isLast: boolean;
  processedCase: ProcessedCase;
  processedDataSource: ProcessedDataSource;
  onUpdateModel: ( updater: ModelUpdater ) => void;

  onEditDataSource: ( processedDataSource: ProcessedDataSource, processedCase: ProcessedCase ) => void;

  headerPadding: number;
}

const EditDataSourceOverlay: React.FunctionComponent<Props> = props => {

  const [isHovering, setIsHovering] = useState<boolean>( false );

  const theme = useTheme<any>();

  const padding = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.OVERLAY_PADDING_SIZE );
  const buttonSize = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.EDIT_BUTTON_SIZE );

  const top = props.y - padding;
  const left = props.x - padding;
  const width = props.width + padding * 2;

  const height = props.height + padding * 2;


  return (
    <React.Fragment>
      <div css={theme => ([{
        position: "absolute",
        top: top,
        left: left,
        width: width,
        height: height,
        opacity: isHovering ? 1 : 0,
        transition: "opacity 0.5s ease-in-out"
      }])}
           onMouseEnter={() => {
             setIsHovering( true )
           }}
           onMouseOver={() => {
             setIsHovering( true )
           }}
           onMouseLeave={() => {
             setIsHovering( false )
           }}
      >

        <EditButton x={props.width - buttonSize * 1.2}
                    y={0}
                    size={buttonSize}
                    onClick={() => {
                      props.onEditDataSource( props.processedDataSource, props.processedCase );
                    }}/>

        <SizeButton
          x={props.width / 2 + buttonSize * 2}
          y={props.height}
          size={buttonSize}
          isFirst={props.processedDataSource.dataSource.position.start
          === props.processedDataSource.dataSource.position.end}
          isLast={false}
          onClickUp={() => {
            props.onUpdateModel( ( draft ) => {
              decreaseItemSize( draft, props.processedCase.id, props.processedDataSource)
            } )
          }}
          onClickDown={() => {
            props.onUpdateModel( ( draft ) => {
              increaseItemSize( draft, props.processedCase.id, props.processedDataSource)
            } )
          }}/>

        <PositionSelect canvasX={props.canvasX}
                        canvasY={props.canvasY}
                        canvasWidth={props.canvasWidth}
                        x={props.width}
                        y={0}
                        rowHeights={props.processedCase.rowHeights}
                        connectionGapHeights={props.processedCase.connectionGapHeights}
                        startPosition={props.processedDataSource.dataSource.position.start}
                        width={getAbsoluteValue( props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_WIDTH )}
                        onUpdate={( newStart: number ) => {
                          props.onUpdateModel( ( draft: Model ) => {
                            changePositon( draft, props.processedCase.id, props.processedDataSource,
                              newStart )
                          } )
                        }
                        }
        />

        <ConnectionSelect canvasWidth={props.canvasWidth}
                          canvasX={props.canvasX}
                          canvasY={props.canvasY}
                          canvasPadding={props.canvasPadding}
                          baseYScrollOffset={props.baseYScrollOffset}
                          rowHeights={props.processedCase.rowHeights}
                          connectionGapHeights={props.processedCase.connectionGapHeights}
                          processedCase={props.processedCase}
                          processedItem={props.processedDataSource}
                          headerPadding={props.headerPadding}
                          onUpdate={( sourceId, destinationId, positionStart, positionEnd ) => {
                            props.onUpdateModel( draft => {
                              const caseItem = draft.cases.find( c => c.id === props.processedCase.id );

                              if( sourceId !== destinationId ) {
                                caseItem.connections.push(
                                  {
                                    id: uuidv4(),
                                    typeId: "ct1",
                                    label: "",
                                    textEllipsis: true,
                                    source: sourceId,
                                    destination: destinationId,
                                    position: {
                                      start: positionStart,
                                      end: positionEnd
                                    }
                                  },
                                );
                              }
                            } )
                          }}
        />
      </div>


    </React.Fragment>
  )
};

export { EditDataSourceOverlay };