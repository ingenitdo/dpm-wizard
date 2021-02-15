/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoLabel } from "../typo/TypoLabel";

export interface Props {
  label: string;
}

const InputRadioBoxContainer: React.FC<Props> = props => {

  return (
    <div css={theme => ([{
      margin: "0.6vw 0"
    }])}>

      {props.label && (
        <TypoLabel size={"xs"} margin={true}>{props.label}</TypoLabel>
      )}

      <div css={theme => ([{
      }])}>
        {props.children}
      </div>

    </div>
  )
};

export { InputRadioBoxContainer };
