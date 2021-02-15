/** @jsx jsx */
import { jsx } from '@emotion/core'

import * as React from "react";
import { useBrowser } from "../hooks/useBrowser";

interface Props {
  onClose: () => void;
}

const BrowserCompatibilityWarning: React.FunctionComponent<Props> = props => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [browserName, fullVersion, majorVersion] = useBrowser();


  return (

      <div css={theme => ([{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",

      }])}>
        <div css={theme => ({
          width: "100%",
          height: "90vh",
          overflowY: "scroll",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5vh",
          paddingBottom: "5vh"
        })}>

          <div css={theme => ({
            width: "90vw",
            "@media (min-width: 800px)": {
              width: "75vw",
              padding: "auto"
            },
            "@media (min-width: 1100px)": {
              width: "60vw",
            },
            "@media (min-width: 1400px)": {
              width: "40vw",
            },
            margin: "auto",

            backgroundColor: "white",
            webkitBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
            mozBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
            boxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",

          })}
          >

            <div css={theme => ({
              margin: "20px 20px 0 20px",
              fontWeight: "bold",
              position: 'relative'
            })}>
              <div css={theme => ({
                marginRight: "20px",
              })}>
                Browser-Kompatibilitäts-Warnung
              </div>
            </div>

            <div css={theme => ({
              flex: "1 0 calc(100% - 110px)",
              margin: "5px 20px 20px 20px"
            })}>
              Sie nutzen einen Browser, der ggf. nicht kompatibel ist: '{browserName}' (Version: {majorVersion})
            </div>
            <div css={theme => ({
              flex: "1 0 30px",
              display: "flex",
              justifyContent: "flex-end",
              width: "100%"
            })}>


              <button css={theme => ({
                width: 80,
                height: 30,
                margin: 10,
                webkitAppearance: "none",
                mozAppearance: "none",
                border: '1px black solid',
                cursor: "pointer"
              })}
                      onClick={props.onClose}
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      </div>
    )

};

export { BrowserCompatibilityWarning };