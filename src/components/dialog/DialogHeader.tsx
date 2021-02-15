/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {

}

const DialogHeader: React.FC<Props> = props => {

  return (
      <div css={theme => (
        [
          {
            color: theme.COLORS.PRIMARY.DEFAULT,
            fontSize: "1.2vw",
            fontFamily: "Helvetica",
            fontWeight: 700,
            margin: "20px"
          }
        ]
      )}>
        {props.children}
      </div>
  )

};

export { DialogHeader };