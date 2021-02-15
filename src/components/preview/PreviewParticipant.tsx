/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../typo/TypoHeadline";
import { useMeasure } from "react-use";
import { Model } from "../../entities/Model";
import { SVGParticipantHeader } from "../../viewer/graph/SVGParticipantHeader";
import { Participant } from '../../entities/Participant';
import { LEGEND_LABEL_ICON_SIZE } from "../../viewer/Constants";

export interface Props {
  modelState: Model;
  showDetailedModel: boolean;
  participant: Participant;
}

const PreviewParticipant: React.FC<Props> = props => {

  const [ref, { x, y, width, height }] = useMeasure();

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
          top: width / 16,
          left: width / 4,
          width: "100%",
          height: "100%",
        }])}>


          <svg key={Math.random()}
               xmlns="http://www.w3.org/2000/svg"
               version={"1.2"}
               viewBox={"0 0 " + width + " " + height}
          >
            <SVGParticipantHeader participant={props.participant}
                                  x={props.participant.borderSize}
                                  y={0}
                                  width={height*0.75}
                                  fontSize={2}
                                  index={0}
                                  canvasWidth={width*3}
                                  yScrollOffset={0}
                                  colors={props.modelState.colors}
                                  isLowMode={false}
                                  isPreview={true}
                                  infoIconSize={width*1.25 / 100 * LEGEND_LABEL_ICON_SIZE}
                                  predefinedAndCustomSymbols={[...props.modelState.predefinedSymbols, ...props.modelState.customSymbols]}
                                  onItemSymbolClick={() => {}}
            />
          </svg>
        </div>
      </div>
    </div>
  )
};

export { PreviewParticipant };