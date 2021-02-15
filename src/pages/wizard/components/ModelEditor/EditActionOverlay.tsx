/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useState } from "react";
import { ModelUpdater } from "../useModelState";
import { useTheme } from "emotion-theming";
import { EditButton } from "./widgets/EditButton";
import { SizeButton } from "./widgets/SizeButton";
import { getAbsoluteValue } from "../../../../viewer/utils/LayoutCalc";
import { v4 as uuidv4 } from "uuid";
import { ConnectionSelect } from "./widgets/ConnectionSelect";
import { PositionSelect } from "./widgets/PositionSelect";
import { changePositon, decreaseItemSize, increaseItemSize } from "./ProcessingUtils";
import { Action } from "../../../../entities/Action";
import { ProcessedCase } from "../../../../entities/ProcessedCase";
import { ProcessedAction } from "../../../../entities/ProcessedAction";
import { ProcessedParticipant } from "../../../../entities/ProcessedParticipant";

interface Props {
  canvasX: number;
  canvasY: number;
  canvasWidth: number;
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
  processedAction: ProcessedAction;
  processedParticipants: ProcessedParticipant[];

  onUpdateModel: ( updater: ModelUpdater ) => void;
  onEditAction: ( processedACtion: ProcessedAction, processedCase: ProcessedCase ) => void;
}

const EditActionOverlay: React.FunctionComponent<Props> = props => {

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
                    props.onEditAction( props.processedAction, props.processedCase );
                  }}/>

      <SizeButton x={props.width / 2 + buttonSize * 2}
                  y={props.height}
                  size={buttonSize}
                  isFirst={props.processedAction.action.position.start === props.processedAction.action.position.end}
                  isLast={false}
                  onClickUp={() => {
                    props.onUpdateModel( ( draft ) => {
                      decreaseItemSize( draft, props.processedCase.id, props.processedAction)
                    } )
                  }}
                  onClickDown={() => {
                    props.onUpdateModel( ( draft ) => {
                      increaseItemSize( draft, props.processedCase.id, props.processedAction)
                    } )
                  }}/>

      <PositionSelect canvasX={props.canvasX}
                      canvasY={props.canvasY}
                      canvasWidth={props.canvasWidth}
                      x={props.width}
                      y={0}
                      rowHeights={props.processedCase.rowHeights}
                      connectionGapHeights={props.processedCase.connectionGapHeights}
                      startPosition={props.processedAction.action.position.start}
                      width={props.processedAction.width}
                      onUpdate={( newStart: number ) => {

                        props.onUpdateModel( ( draft ) => {
                          changePositon( draft, props.processedCase.id, props.processedAction,
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
                        processedItem={props.processedAction}
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

export { EditActionOverlay };