/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

interface Props {
  html: string | null;
  title: string | null;
  onClose: () => void;
  canvasHeight: number;
  canvasWidth: number;
  canvasX: number;
  canvasY: number;
  isDialogFullsize: boolean;
}

const GlossarDialog: React.FunctionComponent<Props> = props => {
  if( !!props.html ) {
    return (

      <div css={theme => ({
        position: props.isDialogFullsize ? "fixed" : "absolute",
        top: props.isDialogFullsize ? 0 : props.canvasY,
        left: props.isDialogFullsize ? 0 : props.canvasX,
        width: props.isDialogFullsize ? '100%' : props.canvasWidth,
        height: props.isDialogFullsize ? '100%' : props.canvasHeight,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: props.isDialogFullsize ? 100000 : 'initial',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      })}>

        <div css={theme => ({
          width: "80vw",
          "@media (min-width: 800px)": {
            width: "65vw",
          },
          "@media (min-width: 1100px)": {
            width: "50vw",
          },
          "@media (min-width: 1400px)": {
            width: "30vw",
          },
          height: "auto",
          maxHeight: "90%",
          overflow: "auto",
          backgroundColor: "white",
          webkitBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
          mozBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
          boxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
          display: "flex",
          flexDirection: "column"
        })}
        >

          <div css={theme => ({
            margin: "20px 20px 0 20px",
            fontWeight: "bold",
            position: 'relative'
          })}>
            <div css={theme => ({
              position: "absolute",
              left: 'calc(100% - 10px)',
              cursor: 'pointer'
            })} onClick={props.onClose}>
              X
            </div>
            <div css={theme => ({
              marginRight: "20px",
            })}>
              {!!props.title.replace(/\s/g, '').length ? "Glossar: " + props.title : ""}
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
    )
  }
  return null;

};

export { GlossarDialog };
