import * as React from "react";
import { getStringArrayByWidth } from "../utils/Processing";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import { Colors } from "../../entities/Colors";

export type TextOverflow = 'ellipsis';
export type FontWeight = 'normal' | 'bolder'  | 'bold' | number;
export type EllipsisDialogData = {
  x: number;
  y: number;
  width: number;
  height: number;
  labels: string[];
}
interface Props {
  x: number;
  y: number;
  height: number;
  width: number;
  canvasWidth: number;
  str: string[];
  textSize: number;
  fontWeight?: FontWeight;
  color: string;
  textAnchor: string;
  textOverflow?: TextOverflow;
  textEllipsis?: boolean;
  onClick?: () => void;
  showDetailedModel?: boolean;
  onEllipsisClick?: (ellipsisDialogData: EllipsisDialogData) => void;
  colors: Colors;
}

const SVGText: React.FunctionComponent<Props> = props => {

  const textSize = getAbsoluteValue( props.canvasWidth, props.textSize );
  const strArray = props.str.map(
    item => getStringArrayByWidth( item, props.width, textSize ) );

  return (
    <>
      {!props.textEllipsis && (
        <text x={props.x} y={props.y} fontSize={getAbsoluteValue( props.canvasWidth, props.textSize )}
              fill={props.color}
              cursor={props.onClick ? "pointer" : "text"}
              fontWeight={!!props.fontWeight ? props.fontWeight : 'normal'}
        >
          <title>{props.str}</title>

          {strArray.map( ( labels: string[], index: number ) => {

            let rowCount = 0;
            strArray.forEach( ( item: string[] ) => {
              rowCount += item.length;
            } );
            return labels.map( ( label: string, j: number ) => {

              let rowsBefore = 0;
              for( let c = 0; c < index; c++ ) {
                rowsBefore += strArray[c].length;
              }
              const newy = props.y
                + (rowsBefore + j) * getAbsoluteValue( props.canvasWidth, props.textSize )
                + props.height/2
                - (rowCount * getAbsoluteValue( props.canvasWidth, props.textSize ))/2;

              return (
                <tspan key={Math.random()}
                       className="strong em"
                       x={props.textAnchor === "middle" ? props.x + props.width / 2 : props.x}
                       y={newy}
                       dominantBaseline={"hanging"}
                       textAnchor={props.textAnchor}
                       fontSize={getAbsoluteValue( props.canvasWidth, props.textSize )}
                       onClick={props.onClick}
                >
                  {label}
                </tspan>
              );
            } );

          } )}
        </text>
      )}

      {(props.textEllipsis) && (
        <g fill={props.colors.textEllipsisBackground}
           onClick={() => {props.onEllipsisClick && props.onEllipsisClick({x: props.x + props.width/2 + textSize*0.5, y:props.y + props.height - textSize * 0.9, width: props.width, height: props.height + 2* textSize, labels: props.str})}}
           cursor={'pointer'}>
          <circle cx={props.x + props.width/2 - textSize/2} cy={props.y + props.height - textSize} r={textSize / 2}/>
          <circle cx={props.x + props.width/2 + textSize/2} cy={props.y + props.height - textSize} r={textSize / 2}/>
          <rect x={props.x + props.width/2 - textSize/2} y={props.y + props.height - textSize*1.5} height={textSize} width={textSize}/>

          <text x={props.x + props.width/2}
                y={props.y + props.height - textSize * 0.9}
                textAnchor={"middle"}
                fontSize={getAbsoluteValue( props.canvasWidth, props.textSize )}
                fill={props.colors.textEllipsisLabel}>
            <title>{props.str}</title>
            ...
          </text>
        </g>
      )}
    </>
  );

};

export { SVGText };