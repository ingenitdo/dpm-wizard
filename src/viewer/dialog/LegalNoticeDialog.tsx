/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { FixedLabels } from "../../entities/FixedLabels";

interface Props {
  onClose: () => void;
  canvasHeight: number;
  canvasWidth: number;
  canvasX: number;
  canvasY: number;
  isDialogFullsize: boolean;
  language: FixedLabels;
}

const LegalNoticeDialog: React.FunctionComponent<Props> = props => {
  return (

    <div css={theme => ([{
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
    }])}>

      <div css={theme => ({
        width: "90vw",
        "@media (min-width: 800px)": {
          width: "85vw",
        },
        "@media (min-width: 1100px)": {
          width: "70vw",
        },
        "@media (min-width: 1400px)": {
          width: "60vw",
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


        <div css={theme => ([{
          '& > :first-child': {
            fontWeight: "bold",
            position: 'relative',
            fontSize: "1.2vw"
          },
          '&:nth-child(n)': {
            margin: "20px 20px 0 20px"
          },
          tr: {
            textAlign: 'left',
            padding: '10px'
          },
          th: {
            padding: '10px'
          },
          td: {
            padding: '10px'
          }
        }])} dangerouslySetInnerHTML={{ __html: props.language.legalNotice! }}/>





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

};

export { LegalNoticeDialog };