/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { Icon } from "../../../../../components/Icon";
import { dropShadow } from "../../../../../styles/effects";
import { useTheme } from "emotion-theming";

interface Props {
  x: number;
  y: number;

  size: number;

  isFirst: boolean;
  isLast: boolean;

  onClickUp: () => void;
  onClickDown: () => void;
}

const SizeButton: React.FunctionComponent<Props> = props => {

  const theme = useTheme<any>();

  return (
    <div css={( theme ) => ([{}])}
    >
      <div css={( theme ) => ([{
        position: "absolute",
        top: props.y,
        left: props.x,
        width: props.size,
        minHeight: props.size / 2,
        backgroundColor: props.isFirst ? theme.COLORS.EDIT.PRIMARY.INACTIVE : theme.COLORS.EDIT.PRIMARY.DEFAULT,
        borderRadius: props.size + "px " + props.size + "px 0 0 ",
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
        <Icon name={"minus"}
              color={props.isFirst ? theme.COLORS.EDIT.SECONDARY.INACTIVE : theme.COLORS.EDIT.SECONDARY.DEFAULT}
              size={props.size * 0.4}
        />
      </div>

      <div css={( theme ) => ([{
          position: "absolute",
          top: props.y + props.size / 2,
          left: props.x,
          width: props.size,
          minHeight: props.size / 2,
          backgroundColor: props.isLast ? theme.COLORS.EDIT.PRIMARY.INACTIVE : theme.COLORS.EDIT.PRIMARY.DEFAULT,
          borderRadius: "0 0 " + props.size + "px " + props.size + "px",
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
        <Icon name={"plus"}
              color={props.isLast ? theme.COLORS.EDIT.SECONDARY.INACTIVE : theme.COLORS.EDIT.SECONDARY.DEFAULT}
              size={props.size * 0.4}
        />
      </div>
    </div>
  )
};

export { SizeButton };


