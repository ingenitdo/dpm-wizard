import * as React from "react";
import { SVGText } from "./SVGText";
import { POLICY_LABEL_SIZE } from "../Constants";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { getStringArrayByWidth } from "../utils/Processing";
import { Colors } from "../../entities/Colors";
import { FixedLabels } from "../../entities/FixedLabels";

interface Props {
  text: string;
  x: number;
  y: number;
  width: number;
  onMouseLeave: () => void;
  canvasWidth: number;
  fixedLabels: FixedLabels;
  language: FixedLabels;
  colors: Colors;
}

const SVGItemSymbolOverlay: React.FunctionComponent<Props> = props => {

  const ref = useRef( null );
  useClickAway( ref, () => {
    props.onMouseLeave();
  } );

  const strArray = [props.text].map(
    item => getStringArrayByWidth( item, props.width, POLICY_LABEL_SIZE ) );

  const sumRowCount = strArray.map( item => item.length )
    .reduce( ( acc, current, index ) => acc + current + (index > 0 ? 1 : 0), 0 );

  return (

    <g
      filter={"url(#shadow)"}
      ref={ref}
    >
      <rect x={props.x}
            y={props.y}
            height={props.width * 0.1 * (sumRowCount+2)}
            width={props.width * 0.8}
            fill={props.colors.overlayBackground}
      />
        <SVGText canvasWidth={props.canvasWidth}
                 x={props.x + props.width * 0.1}
                 y={props.y + props.width * 0.1}
                 height={props.width * 0.1}
                 width={props.width}
                 str={[props.text]}
                 textSize={POLICY_LABEL_SIZE}
                 color={props.colors.overlayLabel}
                 textAnchor={"start"}
                 colors={props.colors}
        />
    </g>

  );

};

export { SVGItemSymbolOverlay };
