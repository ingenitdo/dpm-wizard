import * as React from "react";
import { getStringArrayByWidth } from "../utils/Processing";
import {
  HEADER_HEIGHT, HEADER_MARGIN_BOTTOM
} from "../Constants";
import { SVGText } from "./SVGText";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import { SVGIcon } from "./SVGIcon";
import { CustomSymbol } from "../../entities/CustomSymbol";
import { ItemSymbol } from "../../entities/ItemSymbol";
import { SVGItemSymbol } from "./SVGItemSymbol";
import { Participant } from "../../entities/Participant";
import { Colors } from "../../entities/Colors";

interface Props {
  participant: Participant;
  x: number;
  y: number;
  width: number;
  fontSize: number;
  index: number;
  canvasWidth: number;
  yScrollOffset: number;
  colors: Colors;
  isLowMode: boolean;
  isEditorMode?: boolean;
  isPreview?: boolean;
  infoIconSize: number;
  predefinedAndCustomSymbols: CustomSymbol[];
  onItemSymbolClick: ( isDialog: boolean, title: string, text: string, x: number, y: number ) => void;
}

const SVGParticipantHeader: React.FunctionComponent<Props> = props => {

  const iconSize = props.width * 0.3;
  const iconY = getAbsoluteValue( props.canvasWidth, HEADER_HEIGHT ) * 0.25 + props.yScrollOffset;
  const iconX = props.x + props.width * 0.05;

  const textX = props.x + props.width * 0.4;
  const textY = getAbsoluteValue( props.canvasWidth, HEADER_HEIGHT ) * 0.4;
  const textWidth = props.width/2;

  const height = !props.isPreview ? getAbsoluteValue( props.canvasWidth, HEADER_HEIGHT ) : props.width;

  const textRows =
    props.participant.label.map( ( label: string ) => {
      return getStringArrayByWidth( label, textWidth,
        getAbsoluteValue( props.canvasWidth, props.participant.labelSize ) ).length;
    } ).reduce( ( sum, current ) => sum + current, 0 );

  const textHeight = textRows * getAbsoluteValue( props.canvasWidth, props.participant.labelSize );

  return (
    <g className={"Participant"} key={props.participant.id}
    >
      <rect x={props.x}
            y={props.yScrollOffset + props.participant.borderSize / 2}
            width={props.width}
            height={height + getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_BOTTOM ) - props.participant.borderSize
            * 2 >= 0 ? height + getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_BOTTOM ) - props.participant.borderSize
              * 2 : 0}
            fill={props.participant.backgroundColor}
            strokeWidth={props.participant.borderSize}
            stroke={props.participant.borderColor}
            filter={props.isLowMode ? '' : 'url(#shadow)'}
      />

      {/*BACKGROUND BLUR*/}
      {!props.isPreview && (
        <g>
          <defs>
            <linearGradient id={"participant_border_gradient_"+ props.participant.id} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="70%" stopColor={props.participant.borderColor} stopOpacity="100%"/>
              <stop offset="100%" stopColor={props.participant.borderColor} stopOpacity="0%"/>
            </linearGradient>
            <linearGradient id={"participant_background_gradient_"+ props.participant.id} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={props.participant.backgroundColor} stopOpacity="100%"/>
              <stop offset="100%" stopColor={props.participant.backgroundColor} stopOpacity="0%"/>
            </linearGradient>
          </defs>

          <rect x={props.x - props.participant.borderSize / 2}
                y={props.yScrollOffset + height + getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_BOTTOM )
                - props.participant.borderSize * 4}
                width={props.width + props.participant.borderSize}
                height={props.participant.borderSize*5}
                fill={"url(#participant_border_gradient_" + props.participant.id + ")"}
          />
          <rect x={props.x + props.participant.borderSize / 2}
                y={props.yScrollOffset + height + getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_BOTTOM ) - props.participant.borderSize*5}
                width={props.width - props.participant.borderSize >= 0 ? props.width - props.participant.borderSize : 0}
                height={props.participant.borderSize*6}
                fill={props.participant.backgroundColor}
          />
          <rect x={props.x + props.participant.borderSize / 2}
                y={props.yScrollOffset + height + getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_BOTTOM )}
                width={props.width - props.participant.borderSize >= 0 ? props.width - props.participant.borderSize : 0}
                height={getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_BOTTOM )}
                fill={"url(#participant_background_gradient_" + props.participant.id + ")"}
          />
        </g>
      )}


      <SVGText x={textX}
               y={textY + props.yScrollOffset}
               height={textHeight}
               width={textWidth}
               str={props.participant.label}
               textSize={props.participant.labelSize}
               fontWeight={'bold'}
               color={props.participant.labelColor}
               textAnchor={"start"}
               canvasWidth={props.canvasWidth}
               colors={props.colors}
      />

      {props.participant.icon && (
        <SVGIcon x={iconX} y={iconY} size={iconSize} color={props.participant.iconColor} dataUri={props.participant.icon.dataUri}/>
      )}

      {/*RENDER CUSTOM SYMBOL*/}
      {props.participant.itemSymbols && props.participant.itemSymbols.map(
        ( itemSymbol: ItemSymbol ) => {
          return (
            <SVGItemSymbol key={Math.random()}
                           itemX={props.x}
                           itemY={props.yScrollOffset + props.participant.borderSize / 2}
                           itemWidth={props.width}
                           itemHeight={height + getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_BOTTOM ) - props.participant.borderSize
                           * 2}
                           size={props.infoIconSize}
                           color={props.participant.iconColor}
                           iconColor={props.participant.backgroundColor}
                           itemSymbols={props.participant.itemSymbols}
                           itemSymbol={itemSymbol}
                           onClick={(isDialog: boolean) => {
                             props.onItemSymbolClick(
                               isDialog,
                               itemSymbol.title,
                               itemSymbol.text,
                               props.x + getAbsoluteValue(props.canvasWidth, 1),
                               props.yScrollOffset + props.participant.borderSize / 2 + getAbsoluteValue(props.canvasWidth, HEADER_HEIGHT) + getAbsoluteValue(props.canvasWidth, HEADER_MARGIN_BOTTOM)
                             );
                           }}

                           predefinedAndCustomSymbols={props.predefinedAndCustomSymbols}
            />
          )

        } )}
    </g>
  );

};

export { SVGParticipantHeader };