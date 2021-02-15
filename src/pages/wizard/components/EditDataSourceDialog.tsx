/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { Dialog } from "../../../components/dialog/Dialog";
import { DialogHeader } from "../../../components/dialog/DialogHeader";
import { DialogButtonBar } from "../../../components/dialog/DialogButtonBar";
import { Button } from "../../../components/Button";

export interface Props {

}

const EditDataSourceDialog: React.FC<Props> = props => {

  return (
    <Dialog>
      <DialogHeader>Datenkategorie bearbeiten</DialogHeader>
      <DialogHeader>Datenkategorie bearbeiten</DialogHeader>
      <DialogButtonBar>
        <Button onClick={() => {}}>Abbrechen</Button>
        <Button onClick={() => {}} type={"primary"}>Speichern</Button>
      </DialogButtonBar>
    </Dialog>
  )
};

export { EditDataSourceDialog };