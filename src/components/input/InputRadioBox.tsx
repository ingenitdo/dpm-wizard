/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useState } from "react";

export interface Props {
  label: string;
  value: boolean;
  onUpdate: ( value: boolean ) => void;
}

const InputRadioBox: React.FC<Props> = props => {

  return (

    <div
         css={theme => (
           [
             {
               display: "flex",
               alignItems: "center",
               margin: "0.5vw 0",
               ":hover": {
                 cursor: "pointer"
               }
             }
           ]
         )}
         onClick={() => {

           props.onUpdate(!props.value);
         }}
    >


      <div css={theme => (
          [
            {
              height: theme.INPUT.HEIGHT,
              width: theme.INPUT.WIDTH,
              borderRadius: theme.INPUT.BORDER_RADIUS,
              borderColor: theme.INPUT.BORDER_COLOR,
              borderWidth: theme.INPUT.BORDER_WIDTH,
              borderStyle: theme.INPUT.BORDER_STYLE,
              position: "relative",
              marginRight: "0.4vw"
            }
          ]
        )}
      >
        <div css={theme => ([{
          height: "1.1vw",
          width: "1.1vw",
          borderRadius: theme.INPUT.BORDER_RADIUS,
          backgroundColor: props.value ? theme.COLORS.EDIT.SECONDARY.DEFAULT : "none",
          position: "absolute",
          top: "0.05vw",
          left: "0.05vw"
        }])}/>


        <div css={theme => ([{
          height: "0.6vw",
          width: "0.6vw",
          borderRadius: theme.INPUT.BORDER_RADIUS,
          backgroundColor: props.value ? theme.COLORS.EDIT.PRIMARY.DEFAULT : "none",
          position: "absolute",
          top: "0.3vw",
          left: "0.3vw"
        }])}/>
      </div>

      <h1 css={theme => ([{
        color: theme.COLORS.TEXT,
        fontSize: "0.6vw",
        fontFamily: "Helvetica",
        fontWeight: 500
      }])}>
        {props.label}
      </h1>

    </div>
  )
};

export { InputRadioBox };
