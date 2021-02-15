/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useState } from "react";
import { ModelUpdater } from "../useModelState";
import { useTheme } from "emotion-theming";
import { EditButton } from "./widgets/EditButton";
import { SizeButton } from "./widgets/SizeButton";
import { PositionSelect } from "./widgets/PositionSelect";
import { getAbsoluteValue } from "../../../../viewer/utils/LayoutCalc";
import { DATASOURCE_AND_DATAPURPOSE_WIDTH } from "../../../../viewer/Constants";
import { v4 as uuidv4 } from "uuid";
import { ConnectionSelect } from "./widgets/ConnectionSelect";
import { changePositon, decreaseItemSize, increaseItemSize } from "./ProcessingUtils";
import { ProcessedCase } from "../../../../entities/ProcessedCase";
import { ProcessedDataPurpose } from "../../../../entities/ProcessedDataPurpose";

interface Props {
  canvasX: number;
  canvasY: number;
  canvasPadding: number;
  baseYScrollOffset: number;
  headerPadding: number;

  x: number;
  y: number;

  width: number;
  height: number;

  isFirst: boolean;
  isLast: boolean;

  processedCase: ProcessedCase;
  processedDataPurpose: ProcessedDataPurpose;
  onUpdateModel: ( updater: ModelUpdater ) => void;
  onEditDataPurpose: ( processedDataPurpose: ProcessedDataPurpose, processedCase: ProcessedCase ) => void;

  canvasWidth: number;
}

const EditDataPurposeOverlay: React.FunctionComponent<Props> = props => {

  const [isHovering, setIsHovering] = useState<boolean>( false );

  const theme = useTheme<any>();

  const padding = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.OVERLAY_PADDING_SIZE );
  const buttonSize = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.EDIT_BUTTON_SIZE );

  const top = props.y - padding;
  const left = props.x - padding;
  const width = props.width + padding * 2;
  const height = props.height + padding * 2;


  return (
    <div css={theme => ([{
      position: "absolute",
      top: top,
      left: left,
      width: width,
      height: height,
      opacity: isHovering ? 1 : 0,
      transition: "opacity 0.5s ease-in-out",
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
                    props.onEditDataPurpose( props.processedDataPurpose, props.processedCase );
                  }}/>

      <SizeButton x={props.width / 2 + buttonSize * 2}
                  y={props.height}
                  size={buttonSize}
                  isFirst={props.processedDataPurpose.dataPurpose.position.start
                  === props.processedDataPurpose.dataPurpose.position.end}
                  isLast={false}
                  onClickUp={() => {
                    props.onUpdateModel( ( draft ) => {
                      decreaseItemSize( draft, props.processedCase.id, props.processedDataPurpose)
                    } )
                  }}
                  onClickDown={() => {
                    props.onUpdateModel( ( draft ) => {
                      increaseItemSize( draft, props.processedCase.id, props.processedDataPurpose)
                    } )
                  }}/>

      <PositionSelect canvasX={props.canvasX}
                      canvasY={props.canvasY}
                      canvasWidth={props.canvasWidth}
                      x={props.width}
                      y={0}
                      rowHeights={props.processedCase.rowHeights}
                      connectionGapHeights={props.processedCase.connectionGapHeights}
                      startPosition={props.processedDataPurpose.dataPurpose.position.start}
                      width={getAbsoluteValue( props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_WIDTH )}
                      onUpdate={( newStart: number ) => {

                        props.onUpdateModel( ( draft ) => {
                          changePositon( draft, props.processedCase.id, props.processedDataPurpose,
                            newStart )
                        } )
                      }}
      />

      <ConnectionSelect canvasWidth={props.canvasWidth}
                        canvasX={props.canvasX}
                        canvasY={props.canvasY}
                        canvasPadding={props.canvasPadding}
                        baseYScrollOffset={props.baseYScrollOffset}
                        rowHeights={props.processedCase.rowHeights}
                        connectionGapHeights={props.processedCase.connectionGapHeights}
                        processedCase={props.processedCase}
                        processedItem={props.processedDataPurpose}
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
  )
};

export { EditDataPurposeOverlay };