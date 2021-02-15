/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useState } from "react";
import { useTheme } from "emotion-theming";
import { EditButton } from "./widgets/EditButton";
import { getAbsoluteValue } from "../../../../viewer/utils/LayoutCalc";
import {
  HEADER_HEIGHT,
  HEADER_MARGIN_BOTTOM,
  HEADER_MARGIN_TOP,
  HEADER_WIDTH
} from "../../../../viewer/Constants";
import { ProcessedParticipant } from "../../../../entities/ProcessedParticipant";

interface Props {
  processedParticipant: ProcessedParticipant;
  //  canvasX: number;
  //  canvasY: number;
  canvasWidth: number;
  canvasPadding: number;
  baseYScrollOffset: number;

  //
  //  x: number;
  //  y: number;
  //  width: number;
  //
  //  height: number;
  //  isFirst: boolean;
  //
  //  isLast: boolean;
  //  onUpdateModel: ( updater: ModelUpdater ) => void;
  //  headerPadding: number;
  index: number;
  onEditParticipant: ( index: number) => void;

}

const ParticipantOverlay: React.FunctionComponent<Props> = props => {

  const [isHovering, setIsHovering] = useState<boolean>( false );

  const theme = useTheme<any>();

  const buttonSize = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.EDIT_BUTTON_SIZE );
  const headerMarginTop = getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_TOP );
  const headerMarginBottom = getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_BOTTOM );

  const participantWidth = props.processedParticipant.width;
  const participantHeight = getAbsoluteValue( props.canvasWidth, HEADER_HEIGHT ) + headerMarginTop + headerMarginBottom;
  const participantY = props.processedParticipant.y + props.canvasPadding;

  const participantX = props.processedParticipant.x + props.canvasPadding;


  return (
    <React.Fragment>
      <div css={theme => ([{
        position: "absolute",
        top: participantY,
        left: participantX,
        width: participantWidth,
        height: participantHeight,
        zIndex: 100,
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
        <EditButton x={participantWidth - buttonSize}
                    y={0}
                    size={buttonSize}
                    onClick={() => {
                      props.onEditParticipant(props.index);
                    }}/>
      </div>
    </React.Fragment>
  )
};

export { ParticipantOverlay };