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
import templateModel_0 from "../templates/Registrierungsprozess.json";
import templateModel_1 from "../templates/Was_wir_nicht_erfassen.json";

export interface Props {
  onClose: () => void;
  onTemplateFile: ( model: Model ) => void;
}

const ModelTemplateDialog: React.FC<Props> = props => {

  //@ts-ignore
  const [selectedFile, setSelectedFile] = useState<Model | undefined>(templateModel_0);

  const handleAbortion = () => {
    props.onClose();
  };

  const handleOpen = () => {
    props.onTemplateFile( selectedFile );
  };


  return (
    <React.Fragment>
      <Dialog>
        <DialogHeader>Beispiel-Prozess öffnen</DialogHeader>
        <DialogBody>
        <div css={theme => ([{
          width: "100%",
          minHeight: "10vh",
          display: "flex",
          justifyContent: "space-between"
        }])}>
          <div css={theme => ([{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "45%",
            height: "100%",
            padding: "2%",
            border: selectedFile === templateModel_0 ? "3px #006BA2 solid" : "3px transparent solid",
            color: "#666",
            fontSize: "1.2vw",
            fontFamily: "Helvetica",
            fontWeight: 700,
            margin: "20px",
            cursor: "pointer"
          }])} onClick={() => {
            //@ts-ignore
            setSelectedFile(templateModel_0)}}>
            Registierungsprozess
           <img css={theme => ([{width: "80%", height: "80%", objectFit: "contain"}])} src={"img/templateModel_0.png"}/>
          </div>
          <div css={theme => ([{            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "45%",
            height: "100%",
            padding: "2%",
            border: selectedFile === templateModel_1 ? "3px #006BA2 solid" : "3px transparent solid",
            color: "#666",
            fontSize: "1.2vw",
            fontFamily: "Helvetica",
            fontWeight: 700,
            margin: "20px",
            cursor: "pointer"
          },
            ])} onClick={() => {
            //@ts-ignore
            setSelectedFile(templateModel_1)}}>
            Was wir nicht erfassen
            <img css={theme => ([{width: "80%", height: "80%", objectFit: "contain"}])} src={"img/templateModel_1.png"}/>
          </div>
        </div>
        </DialogBody>
        <DialogButtonBar>
          <Button onClick={() => {
            handleAbortion()
          }}>Abbrechen</Button>
          <Button isActive={!!selectedFile} isDisabled={!selectedFile} onClick={() => {
            handleOpen()
          }} type={"primary"}>Öffnen</Button>
        </DialogButtonBar>
      </Dialog>    </React.Fragment>
  )
};

export { ModelTemplateDialog };