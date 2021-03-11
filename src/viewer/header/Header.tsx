/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from "react";
import {
  CONTROLS_HEIGHT,
  HEADER_HEIGHT, HEADER_MARGIN_BOTTOM,
  HEADER_MARGIN_TOP,
  LEGEND_LABEL_SIZE, SUBTITLE_HEIGHT, SUBTITLE_MARGIN_BOTTOM, TITLE_HEIGHT, TITLE_MARGIN_BOTTOM
} from "../Constants";

import { Title } from "./Title";
import { Controls } from "./Controls";
import { GraphHeader } from "./GraphHeader";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import { SubTitle } from "./SubTitle";
import { MasterData } from "../../entities/MasterData";
import { HeaderType } from "../../entities/HeaderType";
import { CustomSymbol } from "../../entities/CustomSymbol";
import { Dimensions } from "../../entities/Dimensions";
import { ProcessedParticipant } from "../../entities/ProcessedParticipant";
import { FixedLabels } from "../../entities/FixedLabels";
import { Colors } from "../../entities/Colors";

interface Props {
  showDetailedModel: boolean;
  fixedLabels: FixedLabels;
  language: FixedLabels;
  toggleMode: () => void;
  toggleLegend: () => void;
  marginTop: number;
  labelSize: number;
  iconSize: number;
  isMobile: boolean;
  zoomFactor: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  colors: Colors;
  dimensions: Dimensions;
  yScrollOffset: number;
  canvasWidth: number;
  scrollbarWidth: number;
  onFullscreen: () => void;
  isFullscreen: boolean;
  header: HeaderType;
  height: number;
  isLowMode: boolean;
  factorizedCanvasWidth: number;
  isInfoDialogBlurred: boolean;
  processedParticipants: ProcessedParticipant[];
  isIos: boolean;
  title: string;
  subtitle: string;
  masterData: MasterData;
  isEditorMode?: boolean;
  infoIconSize: number;
  predefinedAndCustomSymbols: CustomSymbol[];
  onItemSymbolClick: ( isDialog: boolean, title: string, text: string, x: number, y: number ) => void;

  showTitle: boolean;
  showSubtitle: boolean;
  showModeToggle: boolean;
  showLegend: boolean;
  showFullscreen: boolean;
  showZoom: boolean;
}

const Header: React.FunctionComponent<Props> = props => {

  const titleHeight = (!!props.title ? getAbsoluteValue( props.canvasWidth, TITLE_HEIGHT ) : 0);
  const subtitleHeight = (!!props.title ? getAbsoluteValue( props.canvasWidth, SUBTITLE_HEIGHT ) : 0);
  const titleMarginBottom = (!!props.title ? getAbsoluteValue( props.canvasWidth, TITLE_MARGIN_BOTTOM ) : 0);
  const subtitleMarginBottom = (!!props.title ? getAbsoluteValue( props.canvasWidth, SUBTITLE_MARGIN_BOTTOM ) : 0);
  const controlsHeight = getAbsoluteValue( props.canvasWidth, CONTROLS_HEIGHT );
  const graphHeaderHeight = getAbsoluteValue( props.factorizedCanvasWidth, HEADER_HEIGHT );
  const graphHeaderMarginBottom = getAbsoluteValue( props.factorizedCanvasWidth, HEADER_MARGIN_BOTTOM );

  const headerHeight =
    (props.showTitle ? titleHeight : 0)
    + (props.showSubtitle ? titleMarginBottom : 0)
    + (props.yScrollOffset > 0 ? subtitleMarginBottom : 0)
    + ((props.showModeToggle
    || props.showLegend
    || props.showFullscreen
    || props.showZoom) ? controlsHeight : 0)
      + graphHeaderHeight;

  return (
    <div css={theme => ([{
      position: 'absolute',
      width: props.canvasWidth - props.scrollbarWidth,
      top: props.yScrollOffset !== 0 ? 0 : 'initial',
      backgroundColor: !props.isEditorMode ? props.colors.canvasBackground : "transparent",
      display: 'flex',
      flexDirection: 'column',
      height: headerHeight,
      zIndex: 1
    }])}>

      {!props.isEditorMode && props.masterData.controlOptions.showTitle && (
        <Title title={props.title}
               height={titleHeight}
               marginBottom={titleMarginBottom}
               isInfoDialogBlurred={props.isInfoDialogBlurred}
        />
      )}
      {!props.isEditorMode && props.masterData.controlOptions.showSubTitle && (
        <SubTitle subtitle={props.subtitle}
//                  height={props.yScrollOffset > 0 ? 0 : subtitleHeight}
                  height={subtitleHeight}
                  marginBottom={subtitleMarginBottom}
                  isInfoDialogBlurred={props.isInfoDialogBlurred}
        />
      )}

      {!props.isEditorMode && (
        <Controls height={controlsHeight}
                  colors={props.colors}
                  zoomFactor={props.zoomFactor}
                  onZoomIn={props.onZoomIn}
                  onZoomOut={props.onZoomOut}
                  labelSize={getAbsoluteValue( props.canvasWidth, LEGEND_LABEL_SIZE )}
                  showDetailedModel={props.showDetailedModel}
                  toggleMode={props.toggleMode}
                  toggleLegend={props.toggleLegend}
                  controlsHeight={getAbsoluteValue( props.canvasWidth, CONTROLS_HEIGHT )}
                  fixedLabels={props.fixedLabels}
                  language={props.language}
                  isFullscreen={props.isFullscreen}
                  onFullscreen={props.onFullscreen}
                  isInfoDialogBlurred={props.isInfoDialogBlurred}

                  showModeToggle={props.showModeToggle}
                  showLegend={props.showLegend}
                  showFullscreen={props.showFullscreen}
                  showZoom={props.showZoom}
        />
      )}

      <GraphHeader showDetailedModel={props.showDetailedModel}
                   factorizedCanvasWidth={props.factorizedCanvasWidth}
                   canvasWidth={props.canvasWidth - props.scrollbarWidth}
                   isInfoDialogBlurred={props.isInfoDialogBlurred}
                   isIos={props.isIos}
                   header={props.header}
                   height={graphHeaderHeight}
                   marginBottom={graphHeaderMarginBottom}
                   isLowMode={props.isLowMode}
                   processedParticipants={props.processedParticipants}
                   colors={props.colors}
                   dimensions={props.dimensions}
                   isEditorMode={props.isEditorMode}
                   infoIconSize={props.infoIconSize}
                   predefinedAndCustomSymbols={props.predefinedAndCustomSymbols}
                   onItemSymbolClick={props.onItemSymbolClick}
      />


    </div>
  );

};

export { Header };
