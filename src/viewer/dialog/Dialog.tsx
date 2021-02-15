/** @jsx jsx */
import { jsx } from '@emotion/core'

import * as React from "react";
import { filter_blur } from "../style/style";

interface Props {
  html: string | null;
  title: string | null;
  onClose: () => void;
  blur: boolean;
  canvasHeight: number;
  canvasWidth: number;
  canvasX: number;
  canvasY: number;
  isDialogFullsize: boolean;
}

const Dialog: React.FunctionComponent<Props> = props => {
  if( !!props.html ) {
    return (

      <div css={theme => ([{
        position: props.isDialogFullsize ? "fixed" : "absolute",
        top: props.isDialogFullsize ? 0 : props.canvasY,
        left: props.isDialogFullsize ? 0 : props.canvasX,
        width: props.isDialogFullsize ? '100%' : props.canvasWidth,
        height: props.isDialogFullsize ? '100%' : props.canvasHeight,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: props.isDialogFullsize ? 100000 : 'initial'

      }, props.blur && filter_blur])}>
        <div css={theme => ({
          width: "100%",
          height: "calc(100% - 20%)",
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5%",
          paddingBottom: "5%",
          msOverflowStyle: 'none',
          '::-webkit-scrollbar': {
            display: 'none'
          }
        })}>
          <div css={theme => ({
            width: "90%",
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
            minHeight: 100,
            backgroundColor: "white",
            webkitBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
            mozBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
            boxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",

          })}
          >

            <div css={theme => ({
              margin: "20px 20px 0 20px",
              fontWeight: "bold",
              position: 'relative',
              display: "flex",
              justifyContent: "space-between"
            })}>
              <div css={theme => ({
                marginRight: "20px",
              })}>
                <div dangerouslySetInnerHTML={{ __html: props.title ? props.title.toString() : "" }}/>
              </div>
              <div css={theme => ({
                cursor: 'pointer'
              })} onClick={props.onClose}>
                X
              </div>
            </div>

            <div css={theme => ({
              flex: "1 0 calc(100% - 110px)",
              margin: "5px 20px 0 20px"
            })}>
              <div dangerouslySetInnerHTML={{ __html: props.html }}/>
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
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null;

};

export { Dialog };