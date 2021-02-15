/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {

}

const DialogSidebar: React.FC<Props> = props => {

  return (
      <div css={theme => (
        [
          {
            position: "absolute",
            left: 0,
            width: "15vw",
            borderRight: "1px solid " + theme.COLORS.INACTIVE,
            height: "100%"
          }
        ]
      )}>
        {props.children}
      </div>
  )

};

export { DialogSidebar };