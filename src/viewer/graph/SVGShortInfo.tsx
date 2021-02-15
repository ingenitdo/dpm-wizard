import * as React from "react";
import { SVGText } from "./SVGText";
import { Colors } from "../../entities/Colors";

interface Props {
  shortInfo: string[];
  x: number;
  y: number;
  width: number;
  fill: string;
  textColor: string;
  canvasWidth: number;
  colors: Colors;
  textSize: number;
}

const SVGShortInfo: React.FunctionComponent<Props> = props => {


  const scaleWidth = props.width / 1400;
  const scaleHeight = props.width / 1400;
  const shortInfoHeight = 1200 * scaleHeight;
  return (

    <g>
      <svg x={props.x}
           y={props.y}
           fill={props.fill}
           filter="url(#shadow)"
      >
        <g transform={'scale( ' + scaleWidth + ' ' + scaleHeight + ')'}>
          <path
                d="M 848.00,88.00
           C 638.00,-8.00 434.00,156.00 464.00,268.00
             328.00,282.00 266.00,608.00 462.00,674.00
             428.00,766.00 646.00,972.00 868.00,840.00
             946.00,922.00 1212.00,938.00 1276.00,778.00
             1494.00,820.00 1700.00,644.00 1536.00,448.00
             1598.29,386.24 1581.43,151.95 1290.00,148.00
             1238.00,-2.00 958.00,-54.00 848.00,88.00 Z" />
        </g>

      </svg>
      <SVGText x={props.x + props.width*0.4}
               y={props.y - shortInfoHeight/10}
               height={shortInfoHeight}
               width={props.width*0.6}
               str={props.shortInfo}
               textSize={props.textSize}
               color={props.textColor}
               textAnchor={"middle"}
               canvasWidth={props.canvasWidth}
               colors={props.colors}
      />
    </g>
  );
};

export { SVGShortInfo };