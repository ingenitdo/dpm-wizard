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
import produce from "immer";
import { TextInput } from "../../../../components/input/InputText";
import { TextareaInput } from "../../../../components/input/InputTextarea";
import { CustomSymbol } from "../../../../entities/CustomSymbol";
import { ItemSymbol } from "../../../../entities/ItemSymbol";
import { InputCheckbox } from "../../../../components/input/InputCheckbox";
import { Container } from "../../../../components/layout/Container";
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";
import { TutorialStep } from "../../../../entities/TutorialStep";
import { v4 as uuidv4 } from "uuid";
import { ProcessedCase } from "../../../../entities/ProcessedCase";

export interface Props {
  processedCase: ProcessedCase;
  model: Model;
  isDeleteDisabled: boolean;
  onClose: () => void;
  onDelete: () => void;
  onSave: ( label: string, permissions: string, info: string, infoTitle: string, itemSymbols: ItemSymbol[], tutorialStep: TutorialStep, isOpen: boolean) => void;
}

const EditCaseDialog: React.FC<Props> = props => {

  const [label, setLabel] = useState<string>( props.processedCase.label );

  const [permissions, setPermissions] = useState<string>( props.processedCase.permissions );
  const [info, setInfo] = useState<string>( props.processedCase.info );
  const [infoTitle, setInfoTitle] = useState<string>( props.processedCase.infoTitle );
  const [itemSymbols, setItemSymbols] = useState<ItemSymbol[]>( props.processedCase.itemSymbols || [] );

  const currentTutorialStep = props.model.tutorial.steps.find(
    ( tutorialStep: TutorialStep ) => tutorialStep.itemId === props.processedCase.id );

  const [tutorialStep, setTutorialStep] = useState<TutorialStep | null>(
    currentTutorialStep ?
      currentTutorialStep :
      null );

  const [isOpen, setIsOpen] = useState<boolean>( props.processedCase.isOpen );

  return (
    <Dialog>
      <DialogHeader>Kapitel bearbeiten</DialogHeader>
      <DialogBody>
        <TypoHeadline size={"s"}>Label</TypoHeadline>
        <TextareaInput label={""}
                       value={label}
                       onUpdate={( value: string ) => {
                         setLabel(value)
                       }
                       }/>

        <InputCheckbox key={Math.random()}
                       label={"Aufgeklappt beim Start"}
                       value={isOpen}
                       onUpdate={( val: boolean ) => {
                         setIsOpen(val);
                       }}
        />
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
                                       title: itemSymbol && itemSymbol.title || " ",
                                       text: itemSymbol && itemSymbol.text || " "
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
                             itemId: props.processedCase.id
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
      <DialogButtonBar hasDelete={true}>
        <Button onClick={props.onDelete} isDisabled={props.isDeleteDisabled} type={"danger"}>Löschen</Button>
        <Button onClick={props.onClose}>Abbrechen</Button>

        <Button onClick={() => {
          props.onSave( label, permissions, info, infoTitle, itemSymbols, tutorialStep, isOpen );
        }} type={"primary"}>Speichern</Button>

      </DialogButtonBar>
    </Dialog>

  )
};

export { EditCaseDialog };