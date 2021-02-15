/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { ChangeEvent, useState } from "react";
import { TypoLabel } from "../typo/TypoLabel";


export interface Props {
  label?: string;
  value: string;
  options: { value: string, label: string }[];
  width?: string;
  onUpdate: ( value: string ) => void;
}

const InputSelect: React.FC<Props> = props => {

  const [selectedValue, setSelectedValue] = useState<string>( props.value );

  return (
    <div css={theme => ([{}])}>

      {props.label && (
        <TypoLabel size={"xs"} margin={true}>{props.label}</TypoLabel>
      )}

      <select css={theme => ([{
        mozAppearance: "none",
        webkitAppearance: "none",
        appearance: "none",
        outline: "none",
        height: theme.INPUT.HEIGHT,
        borderRadius: theme.INPUT.BORDER_RADIUS,
        borderColor: theme.INPUT.BORDER_COLOR,
        borderWidth: theme.INPUT.BORDER_WIDTH,
        borderStyle: theme.INPUT.BORDER_STYLE,
        color: theme.INPUT.TEXT_COLOR,
        padding: theme.INPUT.PADDING,

        width: props.width,
        fontFamily: "Arial, Helvetica, sans-serif",
        "&:hover": {
          cursor: "pointer"
        },
        "option": {
          height: 100
        },
      }])}
              value={selectedValue}
              onChange={( event: ChangeEvent<HTMLSelectElement> ) => {
                setSelectedValue(event.target.value);
                props.onUpdate(event.target.value)
              }}
      >
        {props.options.map( option => {
          return (
            <option key={option.value}
                    css={theme => ([{
              outline: "none",
              height: 100,
              borderColor: theme.INPUT.BORDER_COLOR,
              borderWidth: theme.INPUT.BORDER_WIDTH,
              borderRadius: theme.INPUT.BORDER_RADIUS,
              borderStyle: theme.INPUT.BORDER_STYLE,
              "&:hover": {
                backgroundColor: theme.COLORS.EDIT.SECONDARY.DEFAULT
              }
            }])}
                    value={option.value}
            >
              {option.label}
            </option>
          )
        } )}
      </select>
    </div>
  )
};

export { InputSelect };