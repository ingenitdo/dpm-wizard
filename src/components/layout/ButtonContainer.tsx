/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";


export interface Props {
}

const ButtonContainer: React.FC<Props> = props => {

  return (
    <div css={theme => (
      [
        {
          display: "flex",
          justifyContent: "flex-start",
          margin: "1vw 1vw 1vw 0",

          "div:not(:last-child)": {
            marginRight: "1vw"
          },
        }
      ]
    )}>
      {props.children}
    </div>
  )

};

export { ButtonContainer };