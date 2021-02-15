/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../typo/TypoHeadline";
import { useMeasure } from "react-use";
import { SVGHeader } from "../../viewer/graph/SVGHeader";
import { Model } from "../../entities/Model";

export interface Props {
  modelState: Model;
  showDetailedModel: boolean;
}

const PreviewProcess: React.FC<Props> = props => {

  const [ref, { x, y, width, height }] = useMeasure();

  const previewPurpose = {
    ...props.modelState.header,
    sourceLabel: props.modelState.header.purposeLabel,
    sourceIcon: props.modelState.header.purposeIcon
  }
  return (
    <div>
      <TypoHeadline size={"m"}>Vorschau</TypoHeadline>

      <div css={theme => ([{
        borderRadius: "10px",
        border: "2px solid " + theme.COLORS.INACTIVE,
        height: "100%",
        minHeight: "60vh",
        maxHeight: "60vh",
        width: "calc(100% - 4px)",
        overflow: "hidden",

        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        webkitFontSmoothing: "antialiased",
        mozOsxFontSmoothing: "grayscale",
        position: "relative"
      }])}
           ref={ref}
      >
        <div css={theme => ([{
          position: "absolute",
          top: width / 8,
          left: width / 4,
          width: "100%",
          height: "100%",
        }])}>
          <svg key={Math.random()}
               xmlns="http://www.w3.org/2000/svg"
               version={"1.2"}
               viewBox={"0 0 " + width + " " + height}
          >
            <SVGHeader header={props.modelState.header}
                       height={height}
                       canvasWidth={width}
                       factorizedCanvasWidth={width}
                       showDetailedModel={props.showDetailedModel}
                       yScrollOffset={0}
                       colors={props.modelState.colors}
                       dimensions={props.modelState.dimensions}
                       isLowMode={false}
                       isPreview={true}
            />

          </svg>
        </div>
        <div css={theme => ([{
          position: "absolute",
          top: width/3,
          left: width/4,
          width: "100%",
          height: "100%",
        }])}>
          <svg key={Math.random()}
               xmlns="http://www.w3.org/2000/svg"
               version={"1.2"}
               viewBox={"0 0 " + width + " " + height}
          >
            <SVGHeader header={previewPurpose}
                       height={height}
                       canvasWidth={width}
                       factorizedCanvasWidth={width}
                       showDetailedModel={props.showDetailedModel}
                       yScrollOffset={0}
                       colors={props.modelState.colors}
                       dimensions={props.modelState.dimensions}
                       isLowMode={false}
                       isPreview={true}
            />

          </svg>
        </div>
      </div>
    </div>
  )
};

export { PreviewProcess };