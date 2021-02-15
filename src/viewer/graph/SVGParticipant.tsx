import * as React from "react";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import { HEADER_HEIGHT } from "../Constants";
import { Participant } from "../../entities/Participant";
import { Colors } from "../../entities/Colors";

interface Props {
  participant: Participant;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
  index: number;
  canvasWidth: number;
  colors: Colors;
  isLowMode: boolean;
}

const SVGParticipant: React.FunctionComponent<Props> = props => {
  const y = getAbsoluteValue( props.canvasWidth, HEADER_HEIGHT) - 14 * props.participant.borderSize;
  const height = props.height - y - props.participant.borderSize/2;

  return (
    <g className={"Participant"} key={props.participant.id}
       filter={props.isLowMode ? '' : 'url(#shadow)'}>
      <rect x={props.x}
            y={y - props.participant.borderSize/2}
            width={props.width < 0 ? 0 : props.width}
            height={height < 0 ? 0 : height}
            fill={props.participant.backgroundColor}
            strokeWidth={props.participant.borderSize}
            stroke={props.participant.borderColor}
      />
    </g>
  );

};

export { SVGParticipant };