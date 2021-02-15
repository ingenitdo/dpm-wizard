/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { dropShadow } from "../styles/effects";
import { useTheme } from "emotion-theming";

export type ButtonType = "default" | "primary" | "danger";

export interface Props {
  type?: ButtonType;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = props => {

  const theme = useTheme<any>();

  const type = props.type || "default";
  const isActive = props.isActive !== undefined ? props.isActive : true;
  const backgroundColor = !props.isDisabled
    ? type === "primary"
      ? (isActive ? theme.COLORS.TERTIARY.DEFAULT : theme.COLORS.TERTIARY.INACTIVE)
      : type === 'danger' ? theme.COLORS.DANGER : "none"
    : theme.COLORS.EDIT.PRIMARY.INACTIVE;

  const border = !props.isDisabled
    ? type === "default"
      ? "1px " + theme.COLORS.PRIMARY.DEFAULT + " solid"
      : type === 'danger' ? "1px " + theme.COLORS.DANGER + " solid" : "none"
    : "1px solid " + theme.COLORS.EDIT.PRIMARY.INACTIVE;

  const color = !props.isDisabled ?
    type === 'danger'
      ? "#ffffff"
      : theme.COLORS.PRIMARY.DEFAULT
    : "#ffffff";

  return (
    <div css={theme => (
      [
        {
          borderRadius: "5px",
          border: border,
          backgroundColor: backgroundColor,
          color: color,
          fontSize: "1vw",
          fontFamily: "Helvetica",
          fontWeight: 700,
          padding: "10px 40px",
          cursor: isActive ? "pointer" : "not-allowed",
          transition: "all 0.2s ease-in-out",
          height: "1.4vw",
          display: "flex",
          alignItems: "center",

          "&:hover": {
            backgroundColor: !props.isDisabled
              ? type === "primary"
                ? theme.COLORS.TERTIARY.HOVER
                : type === "default"
                  ? theme.COLORS.BACKGROUND.HOVER
                  : "none"
              : theme.COLORS.EDIT.PRIMARY.INACTIVE,
          }
        },
        dropShadow
      ]
    )}
         onClick={!props.isDisabled ? props.onClick : undefined}>
      {props.children}
    </div>
  )

};

export { Button };