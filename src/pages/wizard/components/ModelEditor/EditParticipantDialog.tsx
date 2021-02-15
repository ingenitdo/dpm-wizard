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
import { TextareaInput } from "../../../../components/input/InputTextarea";
import { Model } from "../../../../entities/Model";
import { InputCheckbox } from "../../../../components/input/InputCheckbox";
import { Container } from "../../../../components/layout/Container";
import { IconPicker } from "../../../../components/icon_picker/IconPicker";
import { IconType } from "../../../../entities/IconType";
import { TutorialStep } from "../../../../entities/TutorialStep";
import { v4 as uuidv4 } from "uuid";
import { Participant } from "../../../../entities/Participant";
import { CustomSymbol } from "../../../../entities/CustomSymbol";
import { ItemSymbol } from "../../../../entities/ItemSymbol";
import produce from "immer";
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";

export interface Props {
  model: Model;
  participant: Participant;
  onClose: () => void;
  onSave: ( label: string[], hasActionLabel: string, hasNoActionLabel: string, icon: IconType,
    tutorialStep: TutorialStep, itemSymbols: ItemSymbol[] ) => void;
}

const EditParticipantDialog: React.FC<Props> = props => {

  const [label, setLabel] = useState<string[]>( props.participant.label );
  const [hasActionLabel, setHasActionLabel] = useState<string>( props.participant.hasActionLabel );
  const [hasNoActionLabel, setHasNoActionLabel] = useState<string>( props.participant.hasNoActionLabel );
  const [icon, setIcon] = useState<IconType>( props.participant.icon );

  const [itemSymbols, setItemSymbols] = useState<ItemSymbol[]>( props.participant.itemSymbols || [] );

  const currentTutorialStep = props.model.tutorial.steps.find(
    ( tutorialStep: TutorialStep ) => tutorialStep.itemId === props.participant.id );

  const [tutorialStep, setTutorialStep] = useState<TutorialStep | null>(
    currentTutorialStep ?
      currentTutorialStep :
      null );

  return (
    <Dialog>
      <DialogHeader>Prozessbeteiligte bearbeiten</DialogHeader>
      <DialogBody>

        <Container>
          <TextareaInput label={"Bezeichnung"}
                         value={label.reduce( ( acc, current ) => {
                           return acc + "\n" + current
                         } )}
                         onUpdate={( value: string ) => {
                           setLabel( value.split( "\n" ) );
                         }
                         }/>
        </Container>

        <Container>
          <div>
            <TextareaInput label={"Bezeichnung: Prozessschritt vorhanden"} value={hasActionLabel || ""}
                           onUpdate={( value ) => {
                             setHasActionLabel( value );

                           }}
            />
            <TextareaInput label={"Bezeichnung: keine Prozessschritt vorhanden"} value={hasNoActionLabel || ""}
                           onUpdate={( value ) => {
                             setHasNoActionLabel( value );
                           }}
            />
          </div>
          <IconPicker label={"Icon"}
                      value={icon ? icon : { id: "x", dataUri: "" }}
                      onChange={( icon: IconType ) => {
                        setIcon( icon );
                      }}/>
        </Container>

        <SeperatorHorizontal/>

        <TypoHeadline size={"s"} margin={true}>Symbole</TypoHeadline>
        <div>
          {[...props.model.predefinedSymbols, ...props.model.customSymbols].map(
            ( customSymbol: CustomSymbol, index: number ) => {

              const [isSelected, setIsSelected] = useState(
                itemSymbols.map( ( itemSymbol: ItemSymbol ) => itemSymbol.customSymbolId )
                  .includes( customSymbol.id ) );

              const itemSymbol = itemSymbols.find(
                ( itemSymbol: ItemSymbol ) => itemSymbol.customSymbolId === customSymbol.id );

              return (
                <div key={customSymbol.id}>
                  <InputCheckbox key={Math.random()}
                                 label={customSymbol.title}
                                 value={isSelected}
                                 onUpdate={( val ) => {
                                   if( val ) {
                                     setItemSymbols( itemSymbols => [...itemSymbols, {
                                       customSymbolId: customSymbol.id,
                                       title: itemSymbol && itemSymbol.title || "",
                                       text: itemSymbol && itemSymbol.text || ""
                                     }] );
                                   }
                                   else {
                                     setItemSymbols(
                                       itemSymbols.filter( item => item.customSymbolId !== customSymbol.id ) );
                                   }
                                   setIsSelected( val );
                                 }}
                  />


                  <div css={theme => ([{
                    height: isSelected ? "auto" : 0,
                    maxHeight: isSelected ? "100vh" : 0,
                    overflow: "hidden",
                    transition: "maxHeight 0.5s ease-in-out"
                  }])}>
                    <Container>
                      {customSymbol.isDialog && (
                        <Container>
                          <TextInput label={"Titel"}
                                     value={itemSymbol && itemSymbol.title || ""}
                                     onUpdate={( value: string ) => {
                                       setItemSymbols(
                                         produce( draft => {
                                           const item = draft.find(
                                             ( item: ItemSymbol ) => item.customSymbolId === customSymbol.id );
                                           if( item ) {
                                             item.title = value;
                                           }
                                         } )
                                       )
                                     }}/>
                          <RichTextEditor label={"Text"}
                                          value={(itemSymbol !== undefined && itemSymbol.text) || ""}
                                          onChange={( value: string ) => {
                                            setItemSymbols(
                                              produce( draft => {
                                                const item = draft.find(
                                                  ( item: ItemSymbol ) => item.customSymbolId === customSymbol.id );
                                                if( item ) {
                                                  item.text = value;
                                                }
                                              } )
                                            )
                                          }}/>
                        </Container>
                      )}
                      {!customSymbol.isDialog && (
                        <TextareaInput label={"Text"}
                                       value={itemSymbol && itemSymbol.text || ""}
                                       onUpdate={( value: string ) => {
                                         setItemSymbols(
                                           produce( draft => {
                                             const item = draft.find(
                                               ( item: ItemSymbol ) => item.customSymbolId === customSymbol.id );
                                             item.text = value;
                                           } )
                                         )
                                       }}/>
                      )}

                    </Container>
                  </div>

                  {[...props.model.predefinedSymbols, ...props.model.customSymbols].length - 1 !== index && (
                    <SeperatorHorizontal/>
                  )}

                </div>
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
                             itemId: props.participant.id
                           } );
                         }
                       }}
        />
        {tutorialStep && tutorialStep.isActive && (
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
          props.onSave( label, hasActionLabel, hasNoActionLabel, icon, tutorialStep, itemSymbols );
        }}
                type={"primary"}>
          Speichern
        </Button>

      </DialogButtonBar>
    </Dialog>
  )
};

export { EditParticipantDialog };