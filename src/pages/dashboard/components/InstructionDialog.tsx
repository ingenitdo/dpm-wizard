/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useState } from "react";
import { Dialog } from "../../../components/dialog/Dialog";
import { DialogHeader } from "../../../components/dialog/DialogHeader";
import { DialogBody } from "../../../components/dialog/DialogBody";
import { DialogButtonBar } from "../../../components/dialog/DialogButtonBar";
import { Button } from "../../../components/Button";
import { Model } from "../../../entities/Model";
import instructionModel from "../templates/Demo_Model.json";

export interface Props {
  onClose: () => void;
  onInstructionFile: ( model: Model ) => void;
}

const InstructionDialog: React.FC<Props> = props => {

  const [selected, setSelected] = useState<number>(1);

  const handleAbortion = () => {
    props.onClose();
  };

  const handleOpen = () => {
    //@ts-ignore
    props.onInstructionFile( instructionModel );
  };


  return (
    <React.Fragment>
      <Dialog>
        <DialogHeader>Anleitungen</DialogHeader>
        <DialogBody>
        <div css={theme => ([{
          position: "relative",
          width: "100%",
          minHeight: "30vh",
          maxHeight: "30vh",
          display: "flex",
          justifyContent: "space-between"
        }])}>
          <div css={theme => ([{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "45%",
            height: "20vh",
            padding: "2%",
            border: selected === 1 ? "3px #006BA2 solid" : "3px transparent solid",
            color: "#666",
            fontSize: "1.2vw",
            fontFamily: "Helvetica",
            fontWeight: 700,
            margin: "20px",
            cursor: "pointer"
          },
          ])} onClick={() => {
            //@ts-ignore
            setSelected(1);
          }}>
            Nutzerhandbuch
            <img css={theme => ([{width: "80%", height: "80%", objectFit: "contain"}])} src={"img/instructions.png"}/>
          </div>
          <div css={theme => ([{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "45%",
            height: "20vh",
            padding: "2%",
            border: selected === 2 ? "3px #006BA2 solid" : "3px transparent solid",
            color: "#666",
            fontSize: "1.2vw",
            fontFamily: "Helvetica",
            fontWeight: 700,
            margin: "20px",
            cursor: "pointer"
          }])} onClick={() => {
            //@ts-ignore
            setSelected(2);
          }}>
            Demo-Modell
           <img css={theme => ([{width: "80%", height: "80%", objectFit: "contain"}])} src={"img/instructionModel.png"}/>
          </div>
        </div>
        </DialogBody>
        <DialogButtonBar>
          <Button onClick={() => {
            handleAbortion()
          }}>Abbrechen</Button>
          <Button isActive={!!selected} isDisabled={!selected} onClick={() => {
            if(selected === 2) {
              handleOpen()
            } else if(selected === 1) {
              window.location.href = 'DPM-Nutzerhandbuch.pdf';
            }
          }} type={"primary"}>Öffnen</Button>
        </DialogButtonBar>
      </Dialog>    </React.Fragment>
  )
};

export { InstructionDialog };