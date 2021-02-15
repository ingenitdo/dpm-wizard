/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {
}

const InputColorContainer: React.FC<Props> = props => {

  return (
    <div css={theme => ([{
      display: "flex",
      margin: "0.6vw 0",
      "& > *:not(:first-of-type)": {
        marginLeft: "1vw"
      }
    }])}>
      {props.children}
    </div>
  )

};

export { InputColorContainer };