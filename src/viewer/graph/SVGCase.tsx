import * as React from "react";
import { getStringArrayByWidth } from "../utils/Processing";
import { CASE_HEADER_HEIGHT, CASE_HEADER_LABEL_SIZE, TEXT_SPACING } from "../Constants";
import { SVGText } from "./SVGText";
import { renderIconArrowDown, renderIconArrowUp, renderInfoButton } from "./SVGIcons";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import { ItemSymbol } from "../../entities/ItemSymbol";
import { SVGItemSymbol } from "./SVGItemSymbol";
import { CustomSymbol } from "../../entities/CustomSymbol";
import { Dimensions } from "../../entities/Dimensions";
import { ProcessedCase } from "../../entities/ProcessedCase";
import { FixedLabels } from "../../entities/FixedLabels";
import { Colors } from "../../entities/Colors";

interface Props {
  case: ProcessedCase;
  x: number;
  y: number;
  width: number;
  canvasWidth: number;
  height: number;
  openCases: string[];
  toggle: ( caseId: string ) => void;
  onShowInfoText: ( title: string[] | undefined, content: string | undefined ) => void;
  onItemSymbolClick: ( isDialog: boolean, title: string, text: string | undefined, x: number, y: number ) => void;
  fixedLabels: FixedLabels;
  language: FixedLabels;
  colors: Colors;
  dimensions: Dimensions;
  isLowMode: boolean;
  isPreview?: boolean;
  infoIconSize: number;
  predefinedAndCustomSymbols: CustomSymbol[];
}

const SVGCase: React.FunctionComponent<Props> = props => {

  const caseHeaderLabelRows =
    [props.case.label].map( ( label: string ) => {
      return getStringArrayByWidth( label, (props.canvasWidth / 100 * 25),
        getAbsoluteValue( props.canvasWidth, CASE_HEADER_LABEL_SIZE ) ).length;
    } ).reduce( ( sum, current ) => sum + current, 0 );

  const caseHeaderHeight = (caseHeaderLabelRows <= 1 ? 2 : caseHeaderLabelRows * TEXT_SPACING) * getAbsoluteValue( props.canvasWidth,
    CASE_HEADER_HEIGHT );

  const iconX = (!props.isPreview ? 0 : props.x) + props.canvasWidth * 0.005;
  const iconHeight = getAbsoluteValue( props.canvasWidth, CASE_HEADER_HEIGHT );
  const iconY = props.y + iconHeight / 2;
  return (
    <g key={props.case.id}>
      <rect
        id={props.case.id}
        x={!props.isPreview ? "0" : props.x}
        y={props.y}
        width={!props.isPreview ? "100%" : props.width}
        height={props.openCases.includes( props.case.id ) ? (props.height) : caseHeaderHeight}
        filter="url(#shadow)"
        fill={props.colors.caseBodyBackground}
        strokeWidth={1}
        stroke={props.colors.caseBorder}
      />
      <rect
        id={props.case.id + "1"}
        x={!props.isPreview ? "0" : props.x}
        y={props.y}
        width={!props.isPreview ? "100%" : props.width}
        height={caseHeaderHeight}
        fill={!!props.colors.caseHeaderBackgroundGradient ?
          props.colors.caseHeaderBackgroundGradient :
          props.colors.caseHeaderBackground}//"#006BA2"}
        onClick={() => props.toggle( props.case.id )}
        cursor={"pointer"}
      />
      {props.openCases.includes( props.case.id ) ?
        renderIconArrowUp( iconX, iconY, iconHeight, iconHeight, props.colors.caseHeaderIcon,
          () => props.toggle( props.case.id ) ) :
        renderIconArrowDown( iconX, iconY, iconHeight, iconHeight, props.colors.caseHeaderIcon,
          () => props.toggle( props.case.id ) )}

      <SVGText x={(!props.isPreview ? 0 : props.x) + props.canvasWidth / 100 * 3}
               y={props.isLowMode ? props.y + 10 : props.y}
               height={caseHeaderHeight}
               width={getAbsoluteValue( props.canvasWidth, 20 )}
               canvasWidth={props.canvasWidth}
               str={[props.case.label]}
               textSize={props.dimensions.caseLabelSize}
               color={props.colors.caseHeaderLabel}
               textAnchor={"start"}
               onClick={() => props.toggle( props.case.id )}
               colors={props.colors}
      />

      {props.case.info && (
        <g cursor={"pointer"}>
          {
            renderInfoButton( (!props.isPreview ? 0 : props.x) + (props.canvasWidth / 100 * 24),
              props.y + getAbsoluteValue( props.canvasWidth, CASE_HEADER_HEIGHT ) / 1.8,
              getAbsoluteValue( props.canvasWidth, CASE_HEADER_HEIGHT ) * 0.9,
              props.colors.caseHeaderIcon,
              props.colors.caseHeaderBackground,
              () => props.onShowInfoText( props.case.infoTitle ? [props.case.infoTitle] : undefined, props.case.info ),
              (props.fixedLabels.info || props.language.info!), props.isLowMode )
          }
        </g>
      )}

      {/*RENDER CUSTOM SYMBOL*/}
      {props.case.itemSymbols && props.case.itemSymbols.map(
        ( itemSymbol: ItemSymbol, index: number ) => {
          return (
            <SVGItemSymbol key={Math.random()}
                           itemX={(!props.isPreview ? 0 : props.x) + (props.canvasWidth / 100 * 24) - props.infoIconSize/2}
                           itemY={props.y + getAbsoluteValue( props.canvasWidth, CASE_HEADER_HEIGHT ) / 1.8 - props.infoIconSize/2}
                           itemWidth={getAbsoluteValue( props.canvasWidth, CASE_HEADER_HEIGHT ) * 0.9}
                           itemHeight={getAbsoluteValue( props.canvasWidth, CASE_HEADER_HEIGHT ) * 0.9}
                           size={props.infoIconSize}
                           color={props.colors.caseHeaderIcon}
                           iconColor={(props.colors.caseHeaderBackground)}//props.colors.caseHeaderIcon}
                           itemSymbols={props.case.itemSymbols}
                           itemSymbol={itemSymbol}
                           isCase={true}
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

    </g>
  );

};

export { SVGCase };
