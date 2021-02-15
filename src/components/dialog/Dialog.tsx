/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useEffect } from "react";

export type DialogSize = "normal" | "fullsize";

export interface Props {
  size?: DialogSize;
  hasSideBar?: boolean;
}

const Dialog: React.FC<Props> = props => {

  const size = props.size || "normal";

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  return (
    <div css={theme => (
      [
        {
          position: "fixed",
          zIndex: 3000,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(2px)",
          display: "flex"
        }
      ]
    )}>
      <div css={theme => (
        [
          {
            minWidth: size === "fullsize" ? "75%" : 0,
            minHeight: size === "fullsize" ? "80%" : 0,
            width: props.hasSideBar !== undefined ? "75%" : "90%",
            "@media (min-width: 800px)": {
              width: "75vw",
              padding: "auto"
            },
            "@media (min-width: 1100px)": {
              width: "60vw",
            },
            "@media (min-width: 1400px)": {
              width: "60vw",
            },
            margin: "auto",

            backgroundColor: "white",
            webkitBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
            mozBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
            boxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
            position: "relative",

            paddingLeft: props.hasSideBar !== undefined ? "15vw" : 0,
            paddingBottom: "64px"
          }
        ]
      )}>
        {props.children}
      </div>

    </div>
  )

};

export { Dialog };