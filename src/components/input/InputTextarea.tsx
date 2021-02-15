/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { ChangeEvent } from "react";
import { TypoLabel } from "../typo/TypoLabel";

export interface Props {
  label?: string;
  value: string;
  onUpdate: ( value: string ) => void;
}

const TextareaInput: React.FC<Props> = props => {

  return (
    <div css={theme => ([{
      margin: "0.6vw 0"
    }])}>
      {props.label && (
        <TypoLabel size={"xs"} margin={true}>{props.label}</TypoLabel>
      )}
      <textarea cols={30}
                rows={4}
                value={props.value}
                onChange={( event: ChangeEvent<HTMLTextAreaElement> ) => {
                  props.onUpdate( event.target.value );
                }}
                css={theme => ([{
                  width: "calc(100% - 24px)",
                  outline: "none",
                  appearance: "none",
                  minHeight: theme.INPUT.HEIGHT,
                  borderRadius: theme.INPUT.BORDER_RADIUS,
                  borderColor: theme.INPUT.BORDER_COLOR,
                  borderWidth: theme.INPUT.BORDER_WIDTH,
                  borderStyle: theme.INPUT.BORDER_STYLE,
                  color: theme.INPUT.TEXT_COLOR,
                  padding: 10,
                  fontSize: "0.6vw",
                  fontFamily: "Arial, Helvetica, sans-serif"
                }])}
      />
    </div>
  )
};

export { TextareaInput };
