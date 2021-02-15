/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoLabel } from "../typo/TypoLabel";
import { useState } from "react";

export interface Props {
  label?: string;
  labelRight?: boolean;
  value: boolean;
  onUpdate: ( value: boolean ) => void;
}

const InputCheckbox: React.FC<Props> = props => {

  const [value, setValue] = useState<boolean>( props.value );

  return (
    <div css={theme => ([{
      margin: "0.6vw 0",
    }, props.labelRight && {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row-reverse"
    }

    ])}>

      {props.label && (
        <div css={theme => ([ props.labelRight && {
          marginLeft: "0.4vw"
        }])}>
          <TypoLabel size={"xs"} margin={true}>{props.label}</TypoLabel>
        </div>
      )}

      <div css={( theme ) => ([{
        height: theme.INPUT.HEIGHT,
        width: "2vw",
        borderRadius: theme.INPUT.BORDER_RADIUS,
        borderColor: theme.INPUT.BORDER_COLOR,
        borderWidth: theme.INPUT.BORDER_WIDTH,
        borderStyle: theme.INPUT.BORDER_STYLE,
        padding: theme.INPUT.PADDING,
        position: "relative",
        display: "flex",
        cursor: "pointer"
      }])}
           onClick={() => {
             setValue( !value );
             props.onUpdate( !value );
           }}
      >
        <div css={theme => ([{
          position: "absolute",
          top: "0.05vw",
          left: "0.05vw",
          height: "1.1vw",
          width: "calc(100% - 0.1vw)",
          borderRadius: theme.INPUT.BORDER_RADIUS,
          backgroundColor: value ? theme.INPUT.BACKGROUND_COLOR_ACTIVE : theme.INPUT.BACKGROUND_COLOR_INACTIVE,
        }])}/>
        <div css={theme => ([{
          height: "1.1vw",
          width: "1.1vw",
          display: "flex",
          borderRadius: theme.INPUT.BORDER_RADIUS,
          backgroundColor: value ?
            theme.INPUT.THUMB.BACKGROUND_COLOR_ACTIVE :
            theme.INPUT.THUMB.BACKGROUND_COLOR_INACTIVE,
          position: "absolute",
          transition: "top 0.5s ease-in-out",
          top: "0.05vw",
          left: !value ? "0.05vw" : "calc( 100% - 1.15vw)"
        }])}/>
      </div>
    </div>
  )
};

export { InputCheckbox };
