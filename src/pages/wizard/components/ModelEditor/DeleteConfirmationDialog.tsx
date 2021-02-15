/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { DialogBody } from "../../../../components/dialog/DialogBody";
import { Button } from "../../../../components/Button";
import { DialogButtonBar } from "../../../../components/dialog/DialogButtonBar";
import { DialogHeader } from "../../../../components/dialog/DialogHeader";
import { Dialog } from "../../../../components/dialog/Dialog";
import { TypoLabel } from "../../../../components/typo/TypoLabel";

export interface Props {
  label: string;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationDialog: React.FC<Props> = props => {


  return (
    <Dialog>
      <DialogHeader>Löschen</DialogHeader>
      <DialogBody>

        <TypoLabel size={"s"}>{props.label}</TypoLabel>

      </DialogBody>
      <DialogButtonBar>
        <Button onClick={props.onClose}>Abbrechen</Button>
        <Button onClick={props.onConfirm} type={"danger"}>Löschen</Button>

      </DialogButtonBar>
    </Dialog>

  )
};

export { DeleteConfirmationDialog };