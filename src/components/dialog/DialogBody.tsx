/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {
  maxHeight?: number;
}

const DialogBody: React.FC<Props> = props => {

  return (
      <div css={theme => (
        [
          {
            margin: "1vw",
            width: "calc(100% - 2vw)",
            height: "calc(100% - 2vw)",
            maxHeight: !!props.maxHeight ? props.maxHeight + "vh" : "calc(80vh - 44px)",
            overflowY: !!props.maxHeight ? "scroll" : "auto",
          }
        ]
      )}>
        {props.children}
      </div>
  )
};

export { DialogBody };