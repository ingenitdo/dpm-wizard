/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { Icon } from "../../../../../components/Icon";
import { dropShadow } from "../../../../../styles/effects";
import { getAbsoluteValue } from "../../../../../viewer/utils/LayoutCalc";
import { useTheme } from "emotion-theming";

interface Props {
  x: number;
  y: number;
  canvasWidth: number;

  isFirst: boolean;
  isLast: boolean;

  onClickUp: () => void;
  onClickDown: () => void;
}

const SortButton: React.FunctionComponent<Props> = props => {

  const theme = useTheme<any>();
  const padding = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.OVERLAY_PADDING_SIZE );
  const size = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.EDIT_BUTTON_SIZE );

  return (
    <div css={( theme ) => ([{
    }])}
    >
      <div css={( theme ) => ([{
        position: "absolute",
        top: props.y,
        left: props.x,
        width: size,
        minHeight: size/2,
        backgroundColor: props.isFirst ? theme.COLORS.EDIT.PRIMARY.INACTIVE : theme.COLORS.EDIT.PRIMARY.DEFAULT,
        borderRadius: size/2 + "px " + size/2 + "px 0 0 ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s ease-in-out",
        ":hover": {
          cursor: props.isFirst ? "normal" : "pointer"
        }
      }, dropShadow])}

           onClick={props.onClickUp}
      >
        <Icon name={"arrow-up"} color={props.isFirst ? theme.COLORS.EDIT.SECONDARY.INACTIVE : theme.COLORS.EDIT.SECONDARY.DEFAULT} size={"s"}/>
      </div>

      <div css={( theme ) => ([{
          position: "absolute",
          top: props.y + size/2,
          left: props.x,
          width: size,
          minHeight: size/2,
          backgroundColor: props.isLast ? theme.COLORS.EDIT.PRIMARY.INACTIVE : theme.COLORS.EDIT.PRIMARY.DEFAULT,
          borderRadius: "0 0 " + size/2 + "px " + size/2 + "px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "background-color 0.5s ease-in-out",
          ":hover": {
            cursor: props.isLast ? "normal" : "pointer"
          }
        }, dropShadow]
      )}
           onClick={props.onClickDown}

      >
        <Icon name={"arrow-down"} color={props.isLast ? theme.COLORS.EDIT.SECONDARY.INACTIVE : theme.COLORS.EDIT.SECONDARY.DEFAULT} size={"s"}/>
      </div>
    </div>

  )
};

export { SortButton };


