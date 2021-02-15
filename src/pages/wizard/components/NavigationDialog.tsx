/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { Dialog } from "../../../components/dialog/Dialog";
import { DialogHeader } from "../../../components/dialog/DialogHeader";
import { DialogButtonBar } from "../../../components/dialog/DialogButtonBar";
import { Button } from "../../../components/Button";
import NavigationPrompt from "react-router-navigation-prompt";
import { DialogBody } from "../../../components/dialog/DialogBody";
import { TypoLabel } from "../../../components/typo/TypoLabel";

export interface Props {
  isOpen: boolean;
}

const NavigationDialog: React.FC<Props> = props => {

  return (
    <NavigationPrompt
      when={props.isOpen}
      renderIfNotActive={true}
      beforeCancel={callback => callback()}
    >
      {( { isActive, onConfirm, onCancel } ) => {
        if( isActive ) {
          return (
            <Dialog>
              <DialogHeader>
                Verlassen der Seite
              </DialogHeader>
              <DialogBody>
                <TypoLabel size={"xs"}>
                  Möchten Sie die Seite wirklich verlassen?
                </TypoLabel>
              </DialogBody>
              <DialogButtonBar>
                <Button onClick={() => {
                  onCancel()
                }}>Abbrechen</Button>
                <Button onClick={() => {
                  onConfirm()
                }}>Ok</Button>
              </DialogButtonBar>
            </Dialog>
          );
        }
      }}
    </NavigationPrompt>
  )
};

export { NavigationDialog };

