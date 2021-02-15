import * as React from "react";
import { SVGText } from "./SVGText";
import { POLICY_LABEL_SIZE } from "../Constants";
import { renderClockButton, renderIconDBButton } from "./SVGIcons";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { FixedLabels } from "../../entities/FixedLabels";
import { Colors } from "../../entities/Colors";

interface Props {
  erasurePolicy?: string;
  storagePolicy?: string;
  x: number;
  y: number;
  width: number;
  onMouseLeave: () => void;
  canvasWidth: number;
  fixedLabels: FixedLabels;
  language: FixedLabels;
  colors: Colors;
}

const SVGPolicy: React.FunctionComponent<Props> = props => {

  const ref = useRef( null );
  useClickAway( ref, () => {
    props.onMouseLeave();
  } );

  return (

    <g
      filter={"url(#shadow)"}
      ref={ref}
    >
      <rect x={props.x} y={props.y} height={props.width / 2} width={props.width} fill={props.colors.overlayBackground}

      />
      {props.erasurePolicy &&
      renderClockButton( props.x + props.width * 0.1, props.y + props.width / 2 * 0.3, props.width * 0.1, props.colors.overlayLabel,
        props.colors.overlayBackground,
        ( e ) => {
        }, (props.fixedLabels.durationOfStorage || props.language.durationOfStorage!) )
      }
      {props.storagePolicy &&
      renderIconDBButton( props.x + props.width * 0.1, props.y + props.width / 2 * 0.6, props.width * 0.1, props.colors.overlayLabel,
        props.colors.overlayBackground,
        ( e ) => {
        }, (props.fixedLabels.locationOfStorage || props.language.locationOfStorage!) )
      }
      {props.erasurePolicy && (
        <SVGText canvasWidth={props.canvasWidth}
                 x={props.x + props.width * 0.25}
                 y={props.y + props.width / 2 * 0.3}
                 height={props.width * 0.1}
                 width={props.width * 0.8}
                 str={[props.erasurePolicy]}
                 textSize={POLICY_LABEL_SIZE}
                 color={props.colors.overlayLabel}
                 textAnchor={"start"}
                 colors={props.colors}
        />
      )}
      {props.storagePolicy && (
        <SVGText canvasWidth={props.canvasWidth}
                 x={props.x + props.width * 0.25}
                 y={props.y + props.width / 2 * 0.57}
                 height={props.width * 0.1}
                 width={props.width * 0.8}
                 str={[props.storagePolicy]}
                 textSize={POLICY_LABEL_SIZE}
                 color={props.colors.overlayLabel}
                 textAnchor={"start"}
                 colors={props.colors}
        />
      )}
    </g>

  );

};

export { SVGPolicy };
