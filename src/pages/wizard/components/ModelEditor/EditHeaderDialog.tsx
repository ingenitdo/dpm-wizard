/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useState } from "react";
import { DialogBody } from "../../../../components/dialog/DialogBody";
import { Button } from "../../../../components/Button";
import { DialogButtonBar } from "../../../../components/dialog/DialogButtonBar";
import { DialogHeader } from "../../../../components/dialog/DialogHeader";
import { Dialog } from "../../../../components/dialog/Dialog";
import { RichTextEditor } from "../../../../components/input/RichTextEditor";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { TextInput } from "../../../../components/input/InputText";
import { Model } from "../../../../entities/Model";
import { InputCheckbox } from "../../../../components/input/InputCheckbox";
import { Container } from "../../../../components/layout/Container";
import { IconPicker } from "../../../../components/icon_picker/IconPicker";
import { IconType } from "../../../../entities/IconType";
import { TutorialStep } from "../../../../entities/TutorialStep";
import { v4 as uuidv4 } from "uuid";
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";

export interface Props {
  model: Model;
  onClose: () => void;
  onSave: ( sourcelabel: string, sourceIcon: IconType, purposelabel: string, purposeIcon: IconType, tutorialStep: TutorialStep ) => void;
}

const EditHeaderDialog: React.FC<Props> = props => {

  const [sourceLabel, setSourceLabel] = useState<string>(props.model.header.sourceLabel);
  const [purposeLabel, setPurposeLabel] = useState<string>(props.model.header.purposeLabel);

  const [sourceIcon, setSourceIcon] = useState<IconType>(props.model.header.sourceIcon);
  const [purposeIcon, setPurposeIcon] = useState<IconType>(props.model.header.purposeIcon);

  const currentTutorialStep = props.model.tutorial.steps.find(
    ( tutorialStep: TutorialStep ) => tutorialStep.itemId === "header" );

  const [tutorialStep, setTutorialStep] = useState<TutorialStep>(
    currentTutorialStep ?
      currentTutorialStep :
      { id: uuidv4(), isActive: false, title: "", text: "", itemId: "header" } );

  return (
    <Dialog>
      <DialogHeader>Kopfzeile bearbeiten</DialogHeader>
      <DialogBody>

        <Container>
          <div>
            <TypoHeadline size={"s"}>Datenkategorie</TypoHeadline>

            <TextInput label={"Bezeichnung"}
                       value={sourceLabel}
                       onUpdate={( value: string ) => {
                         setSourceLabel( value );
                       }}/>
            <IconPicker label={"Icon"}
                        value={sourceIcon}
                        onChange={( icon: IconType ) => {
                          setSourceIcon(icon);
                        }}
            />
          </div>
          <div>
            <TypoHeadline size={"s"}>Verwendungszweck</TypoHeadline>

            <TextInput label={"Bezeichnung"}
                       value={purposeLabel}
                       onUpdate={( value: string ) => {
                         setPurposeLabel( value );
                       }}/>
            <IconPicker label={"Icon"}
                        value={purposeIcon}
                        onChange={( icon: IconType ) => {
                          setPurposeIcon(icon);
                        }}
            />
          </div>

        </Container>

        <SeperatorHorizontal/>

        <TypoHeadline size={"s"} margin={true}>Tutorial</TypoHeadline>
        <InputCheckbox key={Math.random()}
                       label={"Aktiv"}
                       value={tutorialStep.isActive}
                       onUpdate={( value: boolean ) => {
                         setTutorialStep(
                           {
                             ...tutorialStep,
                             isActive: value
                           }
                         )
                       }}
        />
        {tutorialStep.isActive && (
          <Container>
            <TextInput label={"Titel"}
                       value={tutorialStep.title}
                       onUpdate={( value: string ) => {
                         setTutorialStep( {
                           ...tutorialStep,
                           title: value
                         } )
                       }}
            />
            <RichTextEditor label={"Text"}
                            value={tutorialStep.text || ""}
                            onChange={( value: string ) => {
                              setTutorialStep( {
                                ...tutorialStep,
                                text: value
                              } )
                            }}/>
          </Container>
        )}
      </DialogBody>
      <DialogButtonBar>
        <Button onClick={props.onClose}>Abbrechen</Button>

        <Button onClick={() => {
          props.onSave( sourceLabel, sourceIcon, purposeLabel, purposeIcon, tutorialStep );
        }}
                type={"primary"}>
          Speichern
        </Button>

      </DialogButtonBar>
    </Dialog>
  )
};

export { EditHeaderDialog };