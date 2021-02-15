import * as React from "react";

import { renderIconClockAndDatabase, } from "./SVGIcons";
import { FixedLabels } from "../../entities/FixedLabels";

interface Props {
  erasurePolicy?: string;
  storagePolicy?: string;
  x: number;
  y: number;
  size: number;
  color: string;
  textColor: string;
  onClick: () => void;
  fixedLabels: FixedLabels;
  language: FixedLabels;
}

const SVGPolicyTrigger: React.FunctionComponent<Props> = props => {

  return (
    <g onClick={props.onClick}>
      {
        renderIconClockAndDatabase( props.x, props.y, props.size, props.textColor, props.color, () => {
          props.onClick()
        }, (props.fixedLabels.policy || props.language.policy!) )
      }
    </g>
  );
};

export { SVGPolicyTrigger };
