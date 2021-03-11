/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useState } from "react";
import { TypoHeadline } from "../typo/TypoHeadline";
import { useMeasure } from "react-use";
import { Model } from "../../entities/Model";
import { SVGAction } from "../../viewer/graph/SVGAction";
import { PreviewToggle } from "./PreviewToggle";
import { SVGDataSource } from "../../viewer/graph/SVGDataSource";
import { SVGDataPurpose } from "../../viewer/graph/SVGDataPurpose";
import { ProcessedAction } from "../../entities/ProcessedAction";
import { ProcessedDataSource } from "../../entities/ProcessedDataSource";
import { ProcessedDataPurpose } from "../../entities/ProcessedDataPurpose";
import { LEGEND_LABEL_ICON_SIZE } from "../../viewer/Constants";

export interface Props {
  modelState: Model;
  showDetailedModel: boolean;
  previewItem?: ProcessedAction | ProcessedDataSource | ProcessedDataPurpose;
  factorizedCanvasWidth?: number;
  isSettingsDialogPreview?: boolean;
}

const PreviewItem: React.FC<Props> = props => {

  const [previewMode, setPreviewMode] = useState<string>( "default" );
  const [ref, { x, y, width, height }] = useMeasure();
  const previewItem = {
    ...props.previewItem,
    x: width * 0.1,
    y: width * 0.05,
    width: props.isSettingsDialogPreview ? width * 0.5 : props.previewItem.width,
    height: props.isSettingsDialogPreview ? width * 0.15 : height*0.7,
  };

  return (
    <div>
      <TypoHeadline size={"s"}>Vorschau</TypoHeadline>

      <div css={theme => ([{
        borderRadius: "10px",
        border: "2px solid " + theme.COLORS.INACTIVE,
        minHeight: 400,
        maxHeight: "40vh",
        width: "calc(100% - 4px)",
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        webkitFontSmoothing: "antialiased",
        mozOsxFontSmoothing: "grayscale",
        position: "relative",
        margin: "0.6vw 0"
      }])}
           ref={ref}
      >
        <PreviewToggle value={previewMode} onUpdate={( value: string ) => {
          setPreviewMode( value )
        }}/>


        <svg key={Math.random()}
             xmlns="http://www.w3.org/2000/svg"
             version={"1.2"}
             viewBox={"0 0 " + width + " " + height}
        >
          {("action" in previewItem) && (
            <SVGAction key={"index"}
                       processedAction={previewItem}
                       boxTypes={props.modelState.boxTypes}
                       processedParticipants={[]}
                       activeObjects={previewMode === "active" ? [previewItem.action.id] : []}
                       onShowInfoText={( title: string[] | undefined, content: string | undefined ) => {
                       }}
                       onClick={() => {
                       }}
                       onItemSymbolClick={() => {
                       }}
                       canvasWidth={props.factorizedCanvasWidth ? props.factorizedCanvasWidth : width * 2.4}
                       infoIconSize={width / 100 * LEGEND_LABEL_ICON_SIZE}
                       showDetailedModel={props.showDetailedModel}
                       fixedLabels={props.modelState.fixedLabels}
                       language={props.modelState.fixedLabels}
                       isLowMode={false}
                       colors={props.modelState.colors}
                       isPreview={true}
                       predefinedAndCustomSymbols={[...props.modelState.predefinedSymbols,
                         ...props.modelState.customSymbols]}
            />
          )}

          {("dataSource" in previewItem) && (
            <SVGDataSource processedDataSource={previewItem}
                           boxTypes={props.modelState.boxTypes}
                           activeObjects={previewMode === "active" ? [previewItem.dataSource.id] : []}
                           onShowInfoText={() => {}}
                           onClick={() => {}}
                           canvasWidth={props.factorizedCanvasWidth}
                           infoIconSize={24}
                           fixedLabels={props.modelState.fixedLabels}
                           language={props.modelState.fixedLabels}
                           isLowMode={false}
                           colors={props.modelState.colors}
                           predefinedAndCustomSymbols={[...props.modelState.predefinedSymbols,
                             ...props.modelState.customSymbols]}
                           onItemSymbolClick={() => {}}
            />
          )}

          {("dataPurpose" in previewItem) && (
            <SVGDataPurpose processedDataPurpose={previewItem}
                            boxTypes={props.modelState.boxTypes}
                            activeObjects={previewMode === "active" ? [previewItem.dataPurpose.id] : []}
                            onShowInfoText={() => {}}
                            onClick={() => {}}
                            canvasWidth={props.factorizedCanvasWidth}
                            infoIconSize={24}
                            fixedLabels={props.modelState.fixedLabels}
                            language={props.modelState.fixedLabels}
                            isLowMode={false}
                            colors={props.modelState.colors}
                            predefinedAndCustomSymbols={[...props.modelState.predefinedSymbols,
                              ...props.modelState.customSymbols]}
                            onItemSymbolClick={() => {}}
            />
          )}
        </svg>
      </div>
    </div>
  )
};

export { PreviewItem };