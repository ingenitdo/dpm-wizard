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
import { ProcessedDataPurpose } from "../../entities/ProcessedDataPurpose";
import { FixedLabels } from "../../entities/FixedLabels";
import { Colors } from "../../entities/Colors";

interface Props {
  processedDataPurpose: ProcessedDataPurpose;
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

const SVGDataPurpose: React.FunctionComponent<Props> = props => {

  const boxType = props.boxTypes.find( item => item.id === props.processedDataPurpose.dataPurpose.typeId );
  if( !boxType ) {
    throw new Error( "Cannot find box type: " + props.processedDataPurpose.dataPurpose.typeId );
  }

  // selection state
  const selected = props.activeObjects.indexOf( props.processedDataPurpose.dataPurpose.id ) === 0;
  const related = props.activeObjects.includes( props.processedDataPurpose.dataPurpose.id );

  // box styling
  const boxFill = related ? boxType.color : boxType.colorInactive;
  const boxFilter = selected ? "url(#highlight)" : "url(#shadow)";
  const textColor = related ? boxType.textColor : boxType.textColorInactive;

  // short info color
  const shortInfoFill = (related ? boxType.shortInfoActiveBackground : boxType.shortInfoBackground) || "pink";
  const shortInfoTextColor = related ? boxType.textColor : boxType.textColorInactive;

  return (
    <g cursor={"pointer"}
    >

      {/* Box */}
      <rect name={"source"}
            x={props.processedDataPurpose.x}
            y={props.processedDataPurpose.y}
            width={props.processedDataPurpose.width}
            height={props.processedDataPurpose.height}
            fill={boxFill}
            filter={props.isLowMode ? '' : boxFilter}
            onClick={props.onClick}
      />

      {/* Box Text */}
      <SVGText x={props.processedDataPurpose.x + getAbsoluteValue( props.canvasWidth,
        DATASOURCE_AND_DATAPURPOSE_PADDING_LEFT )}
               y={props.isLowMode ? props.processedDataPurpose.y + 10 : props.processedDataPurpose.y}
               height={props.processedDataPurpose.height}
               width={props.processedDataPurpose.width - getAbsoluteValue( props.canvasWidth,
                 DATASOURCE_AND_DATAPURPOSE_PADDING_LEFT )
               - getAbsoluteValue( props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_RIGHT )}
               str={props.processedDataPurpose.dataPurpose.label}
               textSize={boxType.labelSize}
               fontWeight={'bolder'}
               color={textColor}
               textAnchor={"middle"}
               onClick={props.onClick}
               canvasWidth={props.canvasWidth}
               colors={props.colors}
      />

      {/*RENDER CUSTOM SYMBOL*/}
      {props.processedDataPurpose.dataPurpose.itemSymbols && props.processedDataPurpose.dataPurpose.itemSymbols.map(
        ( itemSymbol: ItemSymbol ) => {

          return (
            <SVGItemSymbol key={Math.random()}
                           itemX={props.processedDataPurpose.x}
                           itemY={props.processedDataPurpose.y}
                           itemWidth={props.processedDataPurpose.width}
                           itemHeight={props.processedDataPurpose.height}
                           size={props.infoIconSize}
                           color={(related ? boxType.infoIconActiveBackground : boxType.infoIconBackground)
                           || "pink"}
                           iconColor={related ? boxType.color : boxType.colorInactive}
                           itemSymbols={props.processedDataPurpose.dataPurpose.itemSymbols}
                           itemSymbol={itemSymbol}
                           onClick={( isDialog: boolean, x: number, y: number ) => {
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
      {!!props.processedDataPurpose.dataPurpose.shortInfo && (
        <SVGShortInfo shortInfo={props.processedDataPurpose.dataPurpose.shortInfo}
                      x={props.processedDataPurpose.x + props.processedDataPurpose.width - props.canvasWidth * 0.065}
                      y={props.processedDataPurpose.y + props.processedDataPurpose.height - props.canvasWidth * 0.015}
                      width={props.processedDataPurpose.width * 0.35}
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

export { SVGDataPurpose };