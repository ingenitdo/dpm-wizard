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

const InputColor: React.FC<Props> = props => {

  return (
    <div>
      {props.label && (
        <TypoLabel size={"xs"} margin={true}>{props.label}</TypoLabel>
      )}

      <input type="color" id="head" name="head"
             value={props.value}
             onChange={( event: ChangeEvent<HTMLInputElement> ) => {
               props.onUpdate( event.target.value );
             }}
             css={theme => ([{
               cursor:  "pointer",
               padding: 0,
               webkitAppearance: "none",
               border: "none",
               width: 80,
               height: theme.DIMENSIONS.INPUT_HEIGHT + "vw",
               borderRadius: theme.DIMENSIONS.INPUT_BORDER_RADIUS + "vw",
               "::-webkit-color-swatch-wrapper": {
                 padding: 0
               },
               "::-webkit-color-swatch": {
                 borderRadius: theme.DIMENSIONS.INPUT_BORDER_RADIUS + "vw",
                 borderColor: theme.COLORS.INPUT,
                 borderWidth: 2
               },
               ":focus": {
                 outline: "none"
               }
             }])}
      />
    </div>
  )
};

export { InputColor };