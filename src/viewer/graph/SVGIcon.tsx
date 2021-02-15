import * as React from "react";
import { changeColor } from "../utils/LayoutCalc";

interface Props {
x: number;
y: number;
size: number;
color: string;
dataUri: string;
}

const SVGIcon: React.FunctionComponent<Props> = props => {

  const dataUri = changeColor( props.dataUri, props.color );

  return (
      <svg x={props.x}
           y={props.y}
           height={props.size}
           width={props.size}
      >
        <image width="70%" height="70%" x={"15%"} y={"15%"} href={dataUri}/>
      </svg>
  );

};

export { SVGIcon };
