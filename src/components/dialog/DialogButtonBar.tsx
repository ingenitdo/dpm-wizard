/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {
  hasDelete?: boolean;
  hasSideBar?: boolean;
}

const DialogButtonBar: React.FC<Props> = props => {

  return (
    <div css={theme => (
      [
        {
          display: "flex",
          justifyContent: "flex-end",
          margin: "1vw",



          "div:not(:last-child)": {
            marginRight: "1vw"
          },

          "div:first-of-type": {
            marginRight: props.hasDelete && "auto"
          },

          position: "absolute",
          bottom: 0,
          right: 0,
          minHeight: "44px",
          width: props.hasSideBar ? "calc(100% - 15vw - 2vw)": "calc(100% - 2vw)"
        }
      ]
    )}>
      {props.children}
    </div>
  )

};

export { DialogButtonBar };