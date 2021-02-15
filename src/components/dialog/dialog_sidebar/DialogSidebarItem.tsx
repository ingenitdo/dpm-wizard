/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {
  onClick: () => void;
  isActive: boolean;
}

const DialogSidebarItem: React.FC<Props> = props => {

  return (
    <div css={theme => (
      [
        {
          color: props.isActive ? theme.COLORS.PRIMARY.DEFAULT : theme.COLORS.INACTIVE,
          fontSize: "1vw",
          fontFamily: "Helvetica",
          fontWeight: 500,
          padding: "1vw",

          borderTop: "1px solid " + theme.COLORS.INACTIVE,

          cursor: "pointer",

          transition: "all 0.5s ease-in-out",

          "&:hover": {
            color: theme.COLORS.PRIMARY.DEFAULT
          }
        }
      ]
    )}
         onClick={props.onClick}
    >
      {props.children}
    </div>
  )

};

export { DialogSidebarItem };