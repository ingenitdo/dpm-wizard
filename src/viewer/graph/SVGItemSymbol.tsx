import * as React from "react";
import { ItemSymbol } from "../../entities/ItemSymbol";
import { CustomSymbol } from "../../entities/CustomSymbol";
import { changeColor } from "../utils/LayoutCalc";

interface Props {
  itemX: number;
  itemY: number;
  itemWidth: number;
  itemHeight: number;
  size: number;
  color: string;
  iconColor: string;
  itemSymbols: ItemSymbol[];
  itemSymbol: ItemSymbol;
  onClick: ( isDialog: boolean, x: number, y: number ) => void;
  predefinedAndCustomSymbols: CustomSymbol[];
  isCase?: boolean;
}

const SVGItemSymbol: React.FunctionComponent<Props> = props => {

  const customSymbol = props.predefinedAndCustomSymbols.find( ( customSymbol: CustomSymbol ) => {
    return customSymbol.id === props.itemSymbol.customSymbolId;
  } );

  if(customSymbol) {
    const samePositionCustomSymbols = props.predefinedAndCustomSymbols.filter( ( c: CustomSymbol ) => {
      return c.position === customSymbol.position;
    } );

    const currentItemSymbolIndex = props.itemSymbols
      .filter( ( item ) => {
        return props.isCase
          ? props.predefinedAndCustomSymbols
          : samePositionCustomSymbols.map( c => c.id ).includes( item.customSymbolId )
      })
      .indexOf( props.itemSymbol );

    const x = !props.isCase
      ? customSymbol.position === 0 || customSymbol.position === 2
        ? props.itemX + props.itemWidth - props.size - props.size / 2 - (props.size * 1.25 * currentItemSymbolIndex)
        : props.itemX + props.size / 2 + (props.size * 1.25 * currentItemSymbolIndex)
      : props.itemX + props.itemWidth - props.size - props.size / 2 - (props.size * 1.25 * currentItemSymbolIndex);

    const y = !props.isCase
      ? customSymbol.position === 2 || customSymbol.position === 3
        ? props.itemY + props.itemHeight - props.size - props.size / 2
        : props.itemY + props.size / 2
      : props.itemY + props.size / 2;

    const dataUri = changeColor( customSymbol.icon.dataUri, props.iconColor );

    return (
      <g filter={"url(#shadow)"} cursor={"pointer"}>
        <svg x={x}
             y={y}
             height={props.size}
             width={props.size}
             fill={props.color}
             onClick={() => {
               props.onClick( customSymbol.isDialog, x + props.size, y + props.size )
             }}
        >
          <title>{customSymbol.title}</title>
          <circle cx={props.size / 2} cy={props.size / 2} r={props.size / 2}/>

          <image width="70%" height="70%" x={"15%"} y={"15%"} href={dataUri}/>
        </svg>
      </g>
    );
  } else {
    return null;
  }
};

export { SVGItemSymbol };
