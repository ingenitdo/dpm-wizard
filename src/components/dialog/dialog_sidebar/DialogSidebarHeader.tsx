/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {

}

const DialogSidebarHeader: React.FC<Props> = props => {

  return (
    <div css={theme => (
      [
        {
          color: theme.COLORS.PRIMARY.DEFAULT,
          fontSize: "1.2vw",
          fontFamily: "Helvetica",
          fontWeight: 700,
          padding: "1vw 1vw 3vw 1vw",
          height: 1 + "vw"
        }
      ]
    )}>
      {props.children}
    </div>
  )

};

export { DialogSidebarHeader };