import * as React from "react";
import { SVGText } from "./SVGText";
import {
  DATASOURCE_AND_DATAPURPOSE_PADDING_LEFT,
  DATASOURCE_AND_DATAPURPOSE_PADDING_RIGHT
} from "../Constants";
import { SVGShortInfo } from "./SVGShortInfo";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import { ItemSymbol } from "../../entities/ItemSymbol";
import { SVGItemSymbol } from "./SVGItemSymbol";
import { CustomSymbol } from "../../entities/CustomSymbol";
import { BoxType } from "../../entities/BoxType";
import { ProcessedDataSource } from "../../entities/ProcessedDataSource";
import { FixedLabels } from "../../entities/FixedLabels";
import { Colors } from "../../entities/Colors";

interface Props {
  processedDataSource: ProcessedDataSource;
  boxTypes: BoxType[];
  activeObjects: string[];
  onShowInfoText: ( title: string[] | undefined, content: string | undefined ) => void;
  onClick: () => void;
  canvasWidth: number;
  infoIconSize: number;
  fixedLabels: FixedLabels;
  language: FixedLabels;
  isLowMode: boolean;
  colors: Colors;
  predefinedAndCustomSymbols: CustomSymbol[];
  onItemSymbolClick: ( isDialog: boolean, title: string, text: string, x: number, y: number ) => void;

}

const SVGDataSource: React.FunctionComponent<Props> = props => {

  const boxType = props.boxTypes.find( item => item.id === props.processedDataSource.dataSource.typeId );
  if( !boxType ) {
    throw new Error( "Cannot find box type: " + props.processedDataSource.dataSource.typeId );
  }

  // selection state
  const selected = props.activeObjects.indexOf( props.processedDataSource.dataSource.id ) === 0;
  const related = props.activeObjects.includes( props.processedDataSource.dataSource.id );

  // box styling
  const boxFill = related ? boxType.color : boxType.colorInactive;
  const boxFilter = selected ? "url(#highlight)" : "url(#shadow)";
  const boxTextColor = related ? boxType.textColor : boxType.textColorInactive;

  // short info color
  const shortInfoFill = (related ? boxType.shortInfoActiveBackground : boxType.shortInfoBackground) ||"pink";
  const shortInfoTextColor = related ? boxType.textColor : boxType.textColorInactive;

  return (
    <g
      cursor={"pointer"}
    >

      {/* Box */}
      <rect name={"source"}
            x={props.processedDataSource.x}
            y={props.processedDataSource.y}
            width={props.processedDataSource.width}
            height={props.processedDataSource.height}
            fill={boxFill}
            filter={props.isLowMode ? '' : boxFilter}
            onClick={props.onClick}
      />

      {/* Box Text */}
      <SVGText x={props.processedDataSource.x + getAbsoluteValue(props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_LEFT)}
               y={props.isLowMode ? props.processedDataSource.y + 10 : props.processedDataSource.y}
               height={props.processedDataSource.height}
               width={props.processedDataSource.width - getAbsoluteValue(props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_LEFT)
               - getAbsoluteValue(props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_RIGHT)}
               str={props.processedDataSource.dataSource.label}
               textSize={boxType.labelSize}
               fontWeight={'bolder'}
               color={boxTextColor}
               textAnchor={"middle"}
               onClick={props.onClick}
               canvasWidth={props.canvasWidth}
               colors={props.colors}
      />

      {/*RENDER CUSTOM SYMBOL*/}
      {props.processedDataSource.dataSource.itemSymbols && props.processedDataSource.dataSource.itemSymbols.map(
        ( itemSymbol: ItemSymbol ) => {

          return (
            <SVGItemSymbol key={Math.random()}
                           itemX={props.processedDataSource.x}
                           itemY={props.processedDataSource.y}
                           itemWidth={props.processedDataSource.width}
                           itemHeight={props.processedDataSource.height}
                           size={props.infoIconSize}
                           color={(related ? boxType.infoIconActiveBackground : boxType.infoIconBackground)
                           || "pink"}
                           iconColor={related ? boxType.color : boxType.colorInactive}
                           itemSymbols={props.processedDataSource.dataSource.itemSymbols}
                           itemSymbol={itemSymbol}
                           onClick={(isDialog: boolean, x: number, y: number) => {
                             props.onItemSymbolClick(
                               isDialog,
                               itemSymbol.title,
                               itemSymbol.text,
                               x,
                               y
                             );
                           }}
                           predefinedAndCustomSymbols={props.predefinedAndCustomSymbols}
            />
          )

        } )}

      {/* Short Info */}
      {!!props.processedDataSource.dataSource.shortInfo && (
        <SVGShortInfo shortInfo={props.processedDataSource.dataSource.shortInfo}
                      x={props.processedDataSource.x + props.processedDataSource.width - props.canvasWidth * 0.065}
                      y={props.processedDataSource.y + props.processedDataSource.height  - props.canvasWidth * 0.015}
                      width={props.processedDataSource.width * 0.35}
                      fill={shortInfoFill}
                      textColor={shortInfoTextColor}
                      canvasWidth={props.canvasWidth}
                      colors={props.colors}
                      textSize={boxType.shortInfoLabelSize}
        />
      )}

    </g>
  );

};

export { SVGDataSource };