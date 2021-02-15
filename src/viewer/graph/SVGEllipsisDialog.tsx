import * as React from "react";
import { EllipsisDialogData, SVGText } from "./SVGText";
import {
  CONNECTION_LABEL_SIZE
} from "../Constants";

import { useClickAway } from "react-use";
import { useRef } from "react";
import { Colors } from "../../entities/Colors";

interface Props {
  ellipsisDialogData: EllipsisDialogData;
  canvasWidth: number;
  onMouseLeave: () => void;
  participantsWidth: number;
  isLowMode: boolean;
  colors: Colors;
}

const SVGEllipsisDialog: React.FunctionComponent<Props> = props => {

  const ref = useRef(null);
  useClickAway(ref, () => {
    props.onMouseLeave();
  });

  return (
    <g onMouseLeave={props.onMouseLeave}
       filter={props.isLowMode ? '' : "url(#shadow)"}
       ref={ref}
    >
      <rect x={props.ellipsisDialogData.x}
            y={props.ellipsisDialogData.y}
            height={props.ellipsisDialogData.height}
            width={props.participantsWidth}
            fill={props.colors.textEllipsisBackground}
      />
      <SVGText x={props.ellipsisDialogData.x}
               y={props.isLowMode ? props.ellipsisDialogData.y + 10 : props.ellipsisDialogData.y}
               height={props.ellipsisDialogData.height}
               width={props.participantsWidth}
               str={props.ellipsisDialogData.labels}
               textSize={CONNECTION_LABEL_SIZE}
               color={props.colors.textEllipsisLabel}
               textAnchor={"middle"}
               canvasWidth={props.canvasWidth}
               colors={props.colors}
      />
    </g>

  );

};

export { SVGEllipsisDialog };
