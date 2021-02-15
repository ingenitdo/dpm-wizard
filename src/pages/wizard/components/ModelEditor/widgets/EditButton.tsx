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

  onClick: () => void;
}

const EditButton: React.FunctionComponent<Props> = props => {

  const theme = useTheme<any>();

  return (
    <div css={( theme ) => ([{
      position: "absolute",
      top: props.y,
      left: props.x,
      width: props.size,
      minHeight: props.size,
      backgroundColor: theme.COLORS.EDIT.PRIMARY.DEFAULT,
      borderRadius: "25px",
      transition: "background-color 0.5s ease-in-out",

      ":hover": {
        cursor: "pointer"
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, dropShadow])}

         onClick={props.onClick}
    >
      <Icon name={"pencil"}
            color={theme.COLORS.EDIT.SECONDARY.DEFAULT}
            size={props.size * 0.6}
      />
    </div>

  )
};

export { EditButton };


