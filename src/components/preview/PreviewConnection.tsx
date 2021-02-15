/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useState } from "react";
import { TypoHeadline } from "../typo/TypoHeadline";
import { useMeasure } from "react-use";
import { Model } from "../../entities/Model";
import { SVGConnection } from "../../viewer/graph/SVGConnection";
import { EllipsisDialogData } from "../../viewer/graph/SVGText";
import { getAbsoluteValue } from "../../viewer/utils/LayoutCalc";
import { CONNECTION_ARROW_SIZE } from "../../viewer/Constants";
import { CONNECTION_STROKE_SIZE } from "../../pages/wizard/components/Constants";
import { ConnectionType } from '../../entities/ConnectionType';

export interface Props {
  modelState: Model;
  showDetailedModel: boolean;
  connectionType: ConnectionType;
}

const PreviewConnection: React.FC<Props> = props => {

    const [previewMode, setPreviewMode] = useState<string>( "default" );
    const [ref, { x, y, width, height }] = useMeasure();
    const previewConnection = {

      connection: {
        id: "previewConnection",
        label: "Label",
        textEllipsis: true,
        typeId: props.connectionType.id,
        source: "previewSource",
        destination: "previewDestination",
        position: {
          start: 0,
          end: 0
        }
      },
      connectionType: props.connectionType,
      x1: width / 4,
      x2: width / 2,
      y1: height / 3,
      y2: height / 3 + getAbsoluteValue( width, CONNECTION_STROKE_SIZE)/2,
      textX: width / 8,
      textY: 0,
      textWidth: width/2,
      textHeight: height/4,
      textAnchor: "",
      arrowTranslate: "translate(" + width / 2 + "," + (height / 3 - getAbsoluteValue( width, CONNECTION_ARROW_SIZE ) / 2
        - 5) + ")",
      arrowD: "M0 0 L0 42.506669921875 L42.506669921875 21.2533349609375 Z"

    };
    return (
      <div>
        <TypoHeadline size={"m"}>Vorschau</TypoHeadline>

        <div css={theme => ([{
          borderRadius: "10px",
          border: "2px solid " + theme.COLORS.INACTIVE,
          height: "100%",
          minHeight: "20vh",
          maxHeight: "20vh",
          width: "calc(100% - 4px)",
          fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
          webkitFontSmoothing: "antialiased",
          mozOsxFontSmoothing: "grayscale",
          position: "relative"
        }])}
             ref={ref}
        >

          <svg xmlns="http://www.w3.org/2000/svg"
               version={"1.2"}
               viewBox={"0 0 " + width + " " + height}
          >
            <SVGConnection processedConnection={previewConnection}
                           processedCase={null}
                           activeObjects={previewMode === "active" ?
                             ["previewConnection", "previewSource", "previewDestination"] :
                             []}
                           canvasWidth={width}
                           onEllipsisClick={( ellipsisDialogData: EllipsisDialogData ) => {
                             //                           setEllipsisDialogData( ellipsisDialogData );
                           }}
                           showDetailedModel={props.showDetailedModel}
                           isLowMode={false}
                           colors={props.modelState.colors}
                           isPreview={true}
            />
          </svg>
        </div>
      </div>
    )
  }
;

export { PreviewConnection };