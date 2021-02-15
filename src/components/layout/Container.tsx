/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {
}

const Container: React.FC<Props> = props => {

  return (
    <div css={theme => ([{
      display: "flex",
      "> div:first-of-type": {
        flex: "1 0 40%",
        marginRight: "5%"
      },
      "> div:last-of-type": {
        flex: "1 0 55%"
      }
    }])}>
      {props.children}
    </div>
  )
};

export { Container };
