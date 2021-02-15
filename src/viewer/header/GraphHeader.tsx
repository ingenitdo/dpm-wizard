/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from "react";
import {
  HEADER_MARGIN_TOP,
  HEADER_OFFSET, PARTICIPANTS_LABEL_SIZE
} from "../Constants";
import { filter_blur } from "../style/style";
import { SVGHeader } from "../graph/SVGHeader";
import { SVGParticipantHeader } from "../graph/SVGParticipantHeader";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import { HeaderType } from "../../entities/HeaderType";
import { CustomSymbol } from "../../entities/CustomSymbol";
import { Dimensions } from "../../entities/Dimensions";
import { ProcessedParticipant } from "../../entities/ProcessedParticipant";
import { Colors } from "../../entities/Colors";

interface Props {
  showDetailedModel: boolean;

  factorizedCanvasWidth: number;
  canvasWidth: number;
  isInfoDialogBlurred: boolean;

  isIos: boolean;
  header: HeaderType;
  height: number;
  marginBottom: number;
  isLowMode: boolean;
  processedParticipants: ProcessedParticipant[];
  colors: Colors;
  dimensions: Dimensions;
  isEditorMode?: boolean;
  infoIconSize: number;
  predefinedAndCustomSymbols: CustomSymbol[];
  onItemSymbolClick: ( isDialog: boolean, title: string, text: string, x: number, y: number ) => void;

}

const GraphHeader: React.FunctionComponent<Props> = props => {

  return (
    <div css={theme => ([{
      width: props.canvasWidth,
      display: 'flex',
      justifyContent: 'center'
    }])}>
      <svg key={Math.random()}
           xmlns="http://www.w3.org/2000/svg"
           version={"1.2"}

           viewBox={"0 0 " + props.factorizedCanvasWidth + " " + getAbsoluteValue(props.factorizedCanvasWidth, HEADER_OFFSET)}

           css={theme => ([{
             width: props.factorizedCanvasWidth,
             height: getAbsoluteValue(props.factorizedCanvasWidth, HEADER_OFFSET),
             marginTop: getAbsoluteValue(props.factorizedCanvasWidth, HEADER_MARGIN_TOP),
           }, props.isInfoDialogBlurred && filter_blur])}
      >
        {/*SHADOW DEFS*/}
        <defs>
          <linearGradient id="CoronaGradient1">
            <stop offset="29%" stopColor={'#b4daf1'}/>
            <stop offset="126%" stopColor={'#b4daf1'}/>
          </linearGradient>
          <linearGradient id="CoronaGradient_middle">
            <stop offset="29%" stopColor={'#b4daf1'}/>
            <stop offset="126%" stopColor={'#b07894'}/>
          </linearGradient>
          <linearGradient id="CoronaGradient2">
            <stop offset="29%" stopColor={'#b07894'}/>
            <stop offset="126%" stopColor={'#AE4261'}/>
          </linearGradient>
          <linearGradient id="CoronaGradient3">
            <stop offset="29%" stopColor={'#b4daf1'}/>
            <stop offset="126%" stopColor={'#AE4261'}/>
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor={'#7D7D7D'}/>
          </filter>
          <filter id="shadow_sides">
            <feDropShadow dx="2" dy="0" stdDeviation="2" floodColor={'#7D7D7D'}/>
          </filter>
          <filter id="highlight">
            <feComponentTransfer in='SourceAlpha'>
              <feFuncA type="table" tableValues="1 0"/>
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="4"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feFlood floodColor="rgba(0,0,0,0.7)" result="color"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feComposite in2="SourceAlpha" operator="in"/>
            <feMerge>
              <feMergeNode in="SourceGraphic"/>
              <feMergeNode/>
            </feMerge>
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor={"white"}/>
          </filter>
          <linearGradient id="white_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="80%" stopColor="white" stopOpacity="100%"/>
            <stop offset="100%" stopColor="white" stopOpacity="0%"/>
          </linearGradient>
          <linearGradient id="blue_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="15%" stopColor={'#d4eaf7'} stopOpacity="100%"/>
            <stop offset="100%" stopColor={'#d4eaf7'} stopOpacity="0%"/>
          </linearGradient>
          <linearGradient id="white_gradient_2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="15%" stopColor={props.colors.participantBackground} stopOpacity="100%"/>
            <stop offset="100%" stopColor={props.colors.participantBackground} stopOpacity="0%"/>
          </linearGradient>
        </defs>
        <SVGHeader header={props.header}
                   height={props.height}
                   canvasWidth={props.factorizedCanvasWidth}
                   factorizedCanvasWidth={props.factorizedCanvasWidth}
                   showDetailedModel={props.showDetailedModel}
                   yScrollOffset={0}
                   colors={props.colors}
                   dimensions={props.dimensions}
                   isLowMode={props.isLowMode}
                   isEditorMode={props.isEditorMode}
        />

        {props.processedParticipants.map( ( p: ProcessedParticipant, index: number ) => {
          return (
            <SVGParticipantHeader key={Math.random()}
                                  participant={p.participant}
                                  x={p.x}
                                  y={p.y}
                                  width={p.width}
                                  fontSize={PARTICIPANTS_LABEL_SIZE}
                                  index={index}
                                  canvasWidth={props.factorizedCanvasWidth}
                                  yScrollOffset={0}
                                  colors={props.colors}
                                  isLowMode={props.isLowMode}
                                  isEditorMode={props.isEditorMode}
                                  infoIconSize={props.infoIconSize}
                                  predefinedAndCustomSymbols={props.predefinedAndCustomSymbols}
                                  onItemSymbolClick={props.onItemSymbolClick}
            />
          );
        } )}
      </svg>
    </div>
  );

};

export { GraphHeader };
