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
import { DragAndDrop } from "../../../components/input/DragAndDrop";
import { MODEL_VERSION } from "../../../Constants";
import { TypoLabel } from "../../../components/typo/TypoLabel";

export interface Props {
  onClose: () => void;
  onUploadFile: ( model: Model ) => void;
}

const ModelUploadDialog: React.FC<Props> = props => {

  const [file, setFile] = useState<Model | undefined>( undefined );
  const [versionError, setVersionError] = useState<string | undefined | null>( null );

  const handleAbortion = () => {
    props.onClose();
  };

  const handleOpen = () => {
    props.onUploadFile( file );
  };

  return (
    <React.Fragment>
      <Dialog>
        <DialogHeader>Datenprozess öffnen</DialogHeader>
        <DialogBody>
          <h2 css={theme => (
            [
              {
                fontSize: "16px",
                fontFamily: "Helvetica",
                color: theme.COLORS.TEXT,
                marginBottom: 1 + "vw"

              }
            ]
          )}>
            Hier können Sie einen Datenprozess, den Sie zu einem früheren Zeitpunkt gespeichert haben, erneut öffnen
            und weiterbearbeiten. Öffnen Sie dazu die .json-Datei des Datenprozesses.
          </h2>

          <DragAndDrop onUploadFile={( model: Model ) => {
            if( model.version === MODEL_VERSION ) {
              setFile( model );
            }
            else {
              setVersionError( model.version );
            }
          }}/>
        </DialogBody>
        <DialogButtonBar>

          <Button onClick={() => {
            handleAbortion()
          }}>Abbrechen</Button>

          <Button isActive={!!file} isDisabled={!file} onClick={() => {
            handleOpen()
          }} type={"primary"}>Öffnen</Button>

        </DialogButtonBar>
      </Dialog>
      {versionError !== null && (
        <Dialog>
          <DialogBody>
            {versionError === undefined && (
              <TypoLabel size={"s"}>Die Modell-Version des ausgewählten Modells ist zu alt.</TypoLabel>
            )}
            {versionError !== undefined && (
              <TypoLabel size={"s"}>Das ausgewählte Modell nutzt die Version {versionError} des Data Process Modeler.
                Bitte verwenden Sie dazu den folgenden DPM:</TypoLabel>
            )}
          </DialogBody>
          <DialogButtonBar>

            <Button onClick={() => {
              setVersionError( null );
            }} type={"primary"}>Ok</Button>

          </DialogButtonBar>
        </Dialog>
      )}
    </React.Fragment>
  )
};

export { ModelUploadDialog };