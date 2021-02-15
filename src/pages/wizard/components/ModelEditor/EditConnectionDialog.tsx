/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { Model } from "../../../../entities/Model";
import { DialogBody } from "../../../../components/dialog/DialogBody";
import { Button } from "../../../../components/Button";
import { DialogButtonBar } from "../../../../components/dialog/DialogButtonBar";
import { DialogHeader } from "../../../../components/dialog/DialogHeader";
import { Dialog } from "../../../../components/dialog/Dialog";
import { RichTextEditor } from "../../../../components/input/RichTextEditor";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { useState } from "react";
import { TextInput } from "../../../../components/input/InputText";
import { InputRadioBox } from "../../../../components/input/InputRadioBox";
import { ConnectionType } from "../../../../entities/ConnectionType";
import { InputCheckbox } from "../../../../components/input/InputCheckbox";
import { Container } from "../../../../components/layout/Container";
import { TutorialStep } from "../../../../entities/TutorialStep";
import { v4 as uuidv4 } from "uuid";
import { ProcessedConnection } from "../../../../entities/ProcessedConnection";
import { TextareaInput } from "../../../../components/input/InputTextarea";
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";

export interface Props {
  processedConnection: ProcessedConnection;
  model: Model;
  onClose: () => void;
  onDelete: () => void;
  onSave: ( label: string, typeId: string, textEllipsis: boolean, tutorialStep: TutorialStep ) => void;
}

const EditConnectionDialog: React.FC<Props> = props => {

  const [label, setLabel] = useState<string>( props.processedConnection.connection.label );
  const [typeId, setTypeId] = useState<string>( props.processedConnection.connection.typeId );
  const [textEllipsis, setTextEllipsis] = useState<boolean>( props.processedConnection.connection.textEllipsis );

  const currentTutorialStep = props.model.tutorial.steps.find(
    ( tutorialStep: TutorialStep ) => tutorialStep.itemId === props.processedConnection.connection.id );

  const [tutorialStep, setTutorialStep] = useState<TutorialStep | null>(
    currentTutorialStep ?
      currentTutorialStep :
      null );

  return (
    <Dialog>
      <DialogHeader>Pfeil bearbeiten</DialogHeader>
      <DialogBody>

        <div css={theme => ([{
          display: "flex",
          "div:first-of-type": {
            marginRight: 0.6 + "vw"
          }
        }])}>
          <TextareaInput label={"Text"}
                         value={label}
                         onUpdate={( value: string ) => {
                           setLabel( value );
                         }}/>
          <InputCheckbox key={Math.random()}
                         label={"gekürzt"}
                         value={textEllipsis}
                         onUpdate={( value: boolean ) => {
                           setTextEllipsis( value )
                         }}
          />
        </div>
        <SeperatorHorizontal/>

        <TypoHeadline size={"s"}>Pfeil-Typ wählen:</TypoHeadline>
        <div>
          {props.model.connectionTypes.map( ( conType: ConnectionType, index: number ) => {
            return (
              <InputRadioBox key={Math.random()}
                             label={conType.title}
                             value={conType.id === typeId}
                             onUpdate={( val ) => {
                               val && setTypeId( conType.id );
                             }}
              />
            )
          } )}
        </div>

        <SeperatorHorizontal/>

        <TypoHeadline size={"s"} margin={true}>Tutorial</TypoHeadline>
        <InputCheckbox key={Math.random()}
                       label={"Aktiv"}
                       value={tutorialStep && tutorialStep.isActive}
                       onUpdate={( value: boolean ) => {
                         if( !!tutorialStep ) {
                           setTutorialStep( {
                             ...tutorialStep,
                             isActive: value
                           } )
                         }
                         else {
                           setTutorialStep( {
                             id: uuidv4(),
                             isActive: value,
                             title: "Neuer Tutorialschritt",
                             text: "",
                             itemId: props.processedConnection.connection.id
                           } );
                         }
                       }}
        />
        {tutorialStep && tutorialStep.isActive && (
          <Container>
            <TextInput label={"Titel"}
                       value={tutorialStep.title || ""}
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
      <DialogButtonBar hasDelete={true}>
        <Button onClick={props.onDelete} type={"danger"}>Löschen</Button>
        <Button onClick={props.onClose}>Abbrechen</Button>

        <Button onClick={() => {
          props.onSave( label, typeId, textEllipsis, tutorialStep );
        }} type={"primary"}>Speichern</Button>

      </DialogButtonBar>
    </Dialog>

  )
};

export { EditConnectionDialog };