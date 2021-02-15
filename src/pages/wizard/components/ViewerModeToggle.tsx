/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export interface Props {
  showDetailedModel: boolean;
  onChange: (value: boolean) => void;
}

const ViewerModeToggle: React.FC<Props> = props => {

  return (

    <div
         css={theme => (
           [
             {
               position: "relative",
               width: "500px",
               height: "44px",
               display: "flex",
               marginBottom: "20px"
             }
           ]
         )}
    >
      {/*<div css={theme => (*/}
      {/*  [*/}
      {/*    {*/}
      {/*      borderRadius: "5px 0 0 5px",*/}
      {/*      backgroundColor: (!props.showDetailedModel ? theme.COLORS.EDIT.PRIMARY.DEFAULT : theme.COLORS.EDIT.PRIMARY.INACTIVE),*/}
      {/*      color: theme.COLORS.EDIT.SECONDARY.DEFAULT,*/}
      {/*      fontSize: "18px",*/}
      {/*      fontFamily: "Helvetica",*/}
      {/*      fontWeight: 700,*/}
      {/*      padding: "10px 40px",*/}
      {/*      cursor: "pointer",*/}
      {/*      transition: "all 0.2s ease-in-out",*/}
      {/*      height: "24px",*/}
      {/*      display: "flex",*/}
      {/*      alignItems: "center",*/}

      {/*      "&:hover": {*/}
      {/*        backgroundColor: theme.COLORS.EDIT.PRIMARY.HOVER*/}
      {/*      }*/}
      {/*    }*/}
      {/*  ]*/}
      {/*)}*/}
      {/*     onClick={() => {props.onChange(false)}}>*/}
      {/*  Einfache Ansicht*/}
      {/*</div>*/}
      {/*<div css={theme => (*/}
      {/*  [*/}
      {/*    {*/}
      {/*      borderRadius: "0 5px 5px 0",*/}
      {/*      backgroundColor: (props.showDetailedModel ? theme.COLORS.EDIT.PRIMARY.DEFAULT : theme.COLORS.EDIT.PRIMARY.INACTIVE),*/}
      {/*      color: theme.COLORS.EDIT.SECONDARY.DEFAULT,*/}
      {/*      fontSize: "18px",*/}
      {/*      fontFamily: "Helvetica",*/}
      {/*      fontWeight: 700,*/}
      {/*      padding: "10px 40px",*/}
      {/*      cursor: "pointer",*/}
      {/*      transition: "all 0.2s ease-in-out",*/}
      {/*      height: "24px",*/}
      {/*      display: "flex",*/}
      {/*      alignItems: "center",*/}

      {/*      "&:hover": {*/}
      {/*        backgroundColor: theme.COLORS.EDIT.PRIMARY.HOVER*/}
      {/*      }*/}
      {/*    }*/}
      {/*  ]*/}
      {/*)}*/}
      {/*     onClick={() => {props.onChange(true)}}>*/}
      {/*  Ausführliche Ansicht*/}
      {/*</div>*/}

    </div>
  )
};

export { ViewerModeToggle };
