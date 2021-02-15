import * as React from "react";
import { renderIconCheck, renderIconClose, renderIconForbidden, renderIconInvisible, renderIconLock } from "./SVGIcons";
import { Colors } from "../../entities/Colors";
import { Participant } from "../../entities/Participant";

interface Props {
  x: number;
  y: number;
  width: number;
  height: number;
  size: number;
  hasAction: boolean;
  onClick: () => void;
  colors: Colors;
  isDetailedIcons: boolean;
  participantIndex: number;
  participants: Participant[];
}

const SVGCaseActionIdentifier: React.FunctionComponent<Props> = props => {

  const participant = props.participants[props.participantIndex];

  if(!participant) {
    return null;
  }

  return (
    <>
      {!props.isDetailedIcons && (
        <g onClick={props.onClick} cursor={"pointer"}>
          <rect x={props.x} y={props.y} width={props.width} height={props.height}
                fill={participant.backgroundColor}/>
          {props.hasAction && (
            renderIconCheck( props.x + props.width / 2 - props.size / 2, props.y + props.height / 2 - props.size / 2,
              props.size, props.colors.caseActionIdentifierChecked, () => {
              }, props.participants[props.participantIndex].hasActionLabel)
          )}
          {!props.hasAction && (
            renderIconClose( props.x + props.width / 2 - props.size / 2, props.y + props.height / 2 - props.size / 2,
              props.size, props.colors.caseActionIdentifierUnchecked, () => {
              }, props.participants[props.participantIndex].hasNoActionLabel )
          )}
        </g>
      )}
      {props.isDetailedIcons && props.participantIndex === 0 && (
        <g onClick={props.onClick} cursor={"pointer"}>
          <rect x={props.x} y={props.y} width={props.width} height={props.height}
                fill={participant.backgroundColor}/>
          {props.hasAction && (
            renderIconLock( props.x + props.width / 2 - props.size / 2, props.y + props.height / 2 - props.size / 2,
              props.size, props.colors.caseActionIdentifierChecked, () => {
              }, props.participants[0].hasActionLabel)
          )}
          {!props.hasAction && (
            renderIconForbidden( props.x + props.width / 2 - props.size / 2, props.y + props.height / 2 - props.size / 2,
              props.size, props.colors.caseActionIdentifierUnchecked, () => {
              }, props.participants[0].hasNoActionLabel)
          )}
        </g>
      )}
      {props.isDetailedIcons && props.participantIndex !== 0 && (
        <g onClick={props.onClick} cursor={"pointer"}>
          <rect x={props.x} y={props.y} width={props.width} height={props.height}
                fill={participant.backgroundColor}/>
          {props.hasAction && (
            renderIconInvisible( props.x + props.width / 2 - props.size / 2, props.y + props.height / 2 - props.size / 2,
              props.size, props.colors.caseActionIdentifierChecked, () => {
              }, props.participants[props.participantIndex].hasActionLabel)
          )}
          {!props.hasAction && (
            renderIconForbidden( props.x + props.width / 2 - props.size / 2, props.y + props.height / 2 - props.size / 2,
              props.size, props.colors.caseActionIdentifierUnchecked, () => {
              }, props.participants[props.participantIndex].hasNoActionLabel)
          )}
        </g>
      )}
    </>
  );

};

export { SVGCaseActionIdentifier };
