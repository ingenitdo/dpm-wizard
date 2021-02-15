/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../typo/TypoHeadline";
import { useMeasure } from "react-use";
import { Model } from "../../entities/Model";
import { SVGCase } from "../../viewer/graph/SVGCase";

export interface Props {
  modelState: Model;
  showDetailedModel: boolean;
}

const PreviewCase: React.FC<Props> = props => {

  const [ref, { x, y, width, height }] = useMeasure();

  const previewCase = {
    id: "previewCase",
    label: "Ein Beispiel",
    dataSources: [{
      dataSource: {
        id: "preveiw-1",
        label: [""],
        position: {
          start: 0,
          end: 0
        }
      },
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }],
    dataPurposes: [{
      dataPurpose: {
        id: "preveiw-2",
        label: [""],
        position: {
          start: 0,
          end: 0
        }
      },
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }],
    actions: [{
      action: {
        id: "preveiw-3",
        label: [""],
        position: {
          start: 0,
          end: 0
        }
      },
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }],
    connections: [{
      connection: {
        id: "",
        label: "",
        textEllipsis: true,
        source: "",
        destination: "",
        position: {
          start: 0,
          end: 0
        }
      },
      connectionType: {
        id: "1",
        color: "",
        textColor: "",
        labelSize: 1.0
      },
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0,
      textX: 0,
      textY: 0,
      textWidth: 0,
      textHeight: 0,
      textAnchor: "",
      arrowTranslate: "",
      arrowD: "",
    }],
    shortInfo: [""], //visible bubble
    infoTitle: "", //Rich-Text
    info: "Info", //Rich-Text
    permissions: "", //Rich-Text

    rowHeights: [{ pos: 0, value: 100 }],
    connectionGapHeights: [{ pos: 0, value: 100 }],
    isOpen: true,
    x: width / 16,
    y: width / 16,
    width: width / 1.2,
    height: width / 8

  };
  return (
    <div>
      <TypoHeadline size={"m"}>Vorschau</TypoHeadline>

      <div css={theme => ([{
        borderRadius: "10px",
        border: "2px solid " + theme.COLORS.INACTIVE,
        height: "100%",
        minHeight: "40vh",
        maxHeight: "40vh",
        width: "calc(100% - 4px)",
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        webkitFontSmoothing: "antialiased",
        mozOsxFontSmoothing: "grayscale",
        position: "relative",
        overflow: "hidden"
      }])}
           ref={ref}
      >


        <svg key={Math.random()}
             xmlns="http://www.w3.org/2000/svg"
             version={"1.2"}
             viewBox={"0 0 " + width + " " + height}
        >
          <SVGCase key={Math.random()}
                   case={previewCase}
                   x={previewCase.x}
                   y={previewCase.y}
                   width={previewCase.width}
                   canvasWidth={width}
                   height={previewCase.height}
                   openCases={["previewCase"]}
                   toggle={( id: string ) => {
                   }}
                   onShowInfoText={( title: string[] | undefined, content: string | undefined ) => {

                   }}
                   onItemSymbolClick={() => {
                   }}
                   infoIconSize={24}
                   fixedLabels={props.modelState.fixedLabels}
                   language={props.modelState.fixedLabels}
                   colors={props.modelState.colors}
                   dimensions={props.modelState.dimensions}
                   isLowMode={false}
                   isPreview={true}
                   predefinedAndCustomSymbols={[...props.modelState.predefinedSymbols, ...props.modelState.customSymbols]}
          />
        </svg>
      </div>
    </div>
  )
};

export { PreviewCase };