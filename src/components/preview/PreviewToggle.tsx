/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {
  value: string;
  onUpdate: ( value: string ) => void;
}

const PreviewToggle: React.FC<Props> = props => {

  return (

    <div
      css={theme => (
        [
          {
            position: "relative",
            width: "5%",
            display: "flex",
            margin: "20px"
          }
        ]
      )}
    >

      <div css={theme => (
        [
          {
            borderRadius: "5px 0 0 5px",
            backgroundColor: (props.value === "default" ? theme.COLORS.EDIT.SECONDARY.DEFAULT : "#fff"),
            border: "1px " + theme.COLORS.PRIMARY.DEFAULT + " solid",
            color: (props.value === "default" ? "#fff" : theme.COLORS.EDIT.SECONDARY.DEFAULT),
            fontSize: "12px",
            fontFamily: "Helvetica",
            fontWeight: 700,
            padding: "4px 20px",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            height: "24px",
            display: "flex",
            alignItems: "center",

            "&:hover": {
              backgroundColor: theme.COLORS.EDIT.PRIMARY.HOVER
            }
          }
        ]
      )}
           onClick={() => {
             props.onUpdate( "default" )
           }}>
        Standard
      </div>
      <div css={theme => (
        [
          {
            borderRadius: "0 5px 5px 0",
            backgroundColor: (props.value === "active" ? theme.COLORS.EDIT.SECONDARY.DEFAULT : "#fff"),
            border: "1px " + theme.COLORS.PRIMARY.DEFAULT + " solid",
            color: (props.value === "active" ? "#fff" : theme.COLORS.EDIT.SECONDARY.DEFAULT),
            fontSize: "12px",
            fontFamily: "Helvetica",
            fontWeight: 700,
            padding: "4px 20px",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            height: "24px",
            display: "flex",
            alignItems: "center",

            "&:hover": {
              backgroundColor: theme.COLORS.EDIT.PRIMARY.HOVER
            }
          }
        ]
      )}
           onClick={() => {
             props.onUpdate( "active" )
           }}>
        Aktiv
      </div>

    </div>
  )
};

export { PreviewToggle };