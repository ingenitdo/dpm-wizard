/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { ChangeEvent } from "react";
import { TypoLabel } from "../typo/TypoLabel";

export interface Props {
  label?: string;
  value: number;
  onUpdate: ( value: number ) => void;
}

const InputNumber: React.FC<Props> = props => {


  return (
    <div css={theme => ([{
    }])}>

      {props.label && (
        <TypoLabel size={"xs"} margin={true}>{props.label}</TypoLabel>
      )}

      <input type="number"
             value={props.value}
             onChange={( event: ChangeEvent<HTMLInputElement> ) => {
               props.onUpdate( parseInt(event.target.value) );
             }}
             css={(theme) => ([{
               height: theme.INPUT.HEIGHT,
               borderRadius: theme.INPUT.BORDER_RADIUS,
               borderColor: theme.INPUT.BORDER_COLOR,
               borderWidth: theme.INPUT.BORDER_WIDTH,
               borderStyle: theme.INPUT.BORDER_STYLE,
               color: theme.INPUT.TEXT_COLOR,
               padding: theme.INPUT.PADDING,
               outline: "none",
               appearance: "none",
               fontSize: "0.6vw",
               fontFamily: "Arial, Helvetica, sans-serif",
               width: 80
             }])}
      />
    </div>
  )
};

export { InputNumber };