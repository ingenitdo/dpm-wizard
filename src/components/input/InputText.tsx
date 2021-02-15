/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { ChangeEvent, useState } from "react";
import { TypoLabel } from "../typo/TypoLabel";
import { Icon } from "../Icon";
import { useTheme } from "emotion-theming";

export interface Props {
  label?: string;
  value: string;
  addButton?: boolean;
  width?: string;
  onUpdate: ( value: string ) => void;
}

const TextInput: React.FC<Props> = props => {

  const [value, setValue] = useState<string>( props.value );
  const theme = useTheme<any>();

  const borderRadius = props.addButton ?
    theme.INPUT.BORDER_RADIUS + " 0 0 " + theme.INPUT.BORDER_RADIUS :
    theme.INPUT.BORDER_RADIUS;
  const [isHovering, setIsHovering] = useState<boolean>( false );

  return (
    <div css={theme => ([{
      margin: "0.6vw 0"
    }])}>

      {props.label && (
        <TypoLabel size={"xs"} margin={true}>{props.label}</TypoLabel>
      )}
      <div css={theme => ([{
        display: "flex"
      }])}>
        <input type="text"
               value={value}
               onChange={( event: ChangeEvent<HTMLInputElement> ) => {
                 setValue( event.target.value );
                 if( !props.addButton ) {
                   props.onUpdate( event.target.value );
                 }
               }}
               css={( theme ) => ([{
                 height: theme.INPUT.HEIGHT,
                 borderRadius: borderRadius,
                 borderColor: theme.INPUT.BORDER_COLOR,
                 borderWidth: theme.INPUT.BORDER_WIDTH,
                 borderStyle: theme.INPUT.BORDER_STYLE,
                 color: theme.INPUT.TEXT_COLOR,
                 padding: theme.INPUT.PADDING,
                 outline: "none",
                 appearance: "none",
                 width: props.width,
                 fontSize: "0.6vw",
                 fontFamily: "Arial, Helvetica, sans-serif"
               }])}
        />

        {props.addButton && (
          <div css={( theme ) => ([{
            height: theme.INPUT.HEIGHT,
            borderRadius: "0 " + theme.INPUT.BORDER_RADIUS + " " + theme.INPUT.BORDER_RADIUS + " 0",
            borderColor: theme.INPUT.BORDER_COLOR,
            borderWidth: theme.INPUT.BORDER_WIDTH,
            borderStyle: theme.INPUT.BORDER_STYLE,
            borderLeft: "none",
            color: theme.INPUT.TEXT_COLOR,
            padding: theme.INPUT.PADDING,
            outline: "none",
            appearance: "none",
            width: "1vw",
            display: "flex",
            alignItems: "center",
            cursor: value ? "pointer" : "disabled",
            transition: "all 0.5s ease-in-out",
            "&:hover": {
              backgroundColor: value ? theme.COLORS.SECONDARY : "none"
            }
          }])}
               onClick={() => {
                 if( value ) {
                   props.onUpdate( value );
                 }
                 setValue( "" );
               }}
               onMouseEnter={() => {
                 setIsHovering( true );
               }}
               onMouseLeave={() => {
                 setIsHovering( false );
               }}
          >
            <Icon name={"plus"} color={value ? isHovering ? theme.COLORS.EDIT.PRIMARY.DEFAULT : theme.COLORS.EDIT.SECONDARY.DEFAULT : theme.COLORS.EDIT.PRIMARY.INACTIVE} size={"s"}/>
          </div>
        )}
      </div>
    </div>
  )
};

export { TextInput };
