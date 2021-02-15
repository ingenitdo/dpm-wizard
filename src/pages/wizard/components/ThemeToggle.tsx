/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useState } from "react";
import { dropShadow } from "../../../styles/effects";

export interface Props {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const ThemeToggle: React.FC<Props> = props => {

  const [isHovering, setIsHovering] = useState<boolean>( false );

  return (

    <div id={"theme-control"}
         css={theme => (
           [
             {
               position: "fixed",
               top: "calc(" + theme.DIMENSIONS.HEADER.WIZARD_HEIGHT + " + 18%)",
               right: "2%",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               cursor: "pointer"
             }
           ]
         )}
         onClick={props.onClick}
         onMouseEnter={() => setIsHovering( true )}
         onMouseLeave={() => setIsHovering( false )}
    >

      <div
        css={theme => (
          [
            {
              height: theme.THEME_TOGGLE.HEIGHT,
              width: theme.THEME_TOGGLE.WIDTH,
              borderRadius: theme.THEME_TOGGLE.BORDER_RADIUS,
              backgroundColor: theme.THEME_TOGGLE.BACKGROUND_COLOR,
              display: "flex",
              justifyContent: "center",
              transition: "background-color 0.5s ease-in-out"
            }
          ]
        )}
      >
        <div css={theme => (
          [
            {
              position: "absolute",
              top: props.isActive ? "0" : theme.THEME_TOGGLE.THUMB_TOP,
              height: theme.THEME_TOGGLE.THUMB_SIZE,
              width: theme.THEME_TOGGLE.THUMB_SIZE,
              borderRadius: theme.THEME_TOGGLE.THUMB_BORDER_RADIUS,
              backgroundColor: theme.THEME_TOGGLE.THUMB_BACKGROUND_COLOR,
              transtionStyle: "ease-in-out",
              transitionDuration: "0.5s",
              transitionProperty: "top, background-color"
            },
            dropShadow
          ]
        )}/>

      </div>
      <div css={theme => (
        [
          {
            marginTop: theme.THEME_TOGGLE.FONTSIZE,
            fontFamily: "Helvetica",
            fontSize: theme.THEME_TOGGLE.FONTSIZE,
            color: isHovering ? theme.COLORS.PRIMARY.DEFAULT : theme.COLORS.INACTIVE,
            transition: "color 0.5s ease-in-out"
          }
        ]
      )}>
        {props.label}
      </div>
    </div>
  );

};

export { ThemeToggle };
