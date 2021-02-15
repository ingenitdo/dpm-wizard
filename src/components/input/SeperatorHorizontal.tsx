/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {

}

const SeperatorHorizontal: React.FC<Props> = props => {

  return (
    <div css={theme => ([{
      margin: "1vw 0",
      width: "calc(100% - 2vw)",
      height: "2px",
      backgroundColor: theme.COLORS.SEPERATOR
    }])}/>
  )
};

export { SeperatorHorizontal };