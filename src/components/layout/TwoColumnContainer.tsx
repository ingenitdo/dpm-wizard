/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {
}

const TwoColumnContainer: React.FC<Props> = props => {

  return (
    <div css={theme => ([{
      display: "flex",
      flexWrap: "wrap",
      marginBottom: 1 + "vw",
      "> div": {
        flex: "1 0 45%",
        marginRight: "5%",
        minWidth: 500
      }
    }])}>
      {props.children}
    </div>
  )
};

export { TwoColumnContainer };
