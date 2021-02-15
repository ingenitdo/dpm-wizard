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
import { InputRadioBox } from "../../../../components/input/InputRadioBox";
import { BoxType } from "../../../../entities/BoxType";
import { ItemSymbol } from "../../../../entities/ItemSymbol";
import { CustomSymbol } from "../../../../entities/CustomSymbol";
import produce from "immer";
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";
import { TutorialStep } from "../../../../entities/TutorialStep";
import { v4 as uuidv4 } from "uuid";
import { TwoColumnContainer } from "../../../../components/layout/TwoColumnContainer";
import { PreviewItem } from "../../../../components/preview/PreviewItem";
import { ProcessedDataSource } from "../../../../entities/ProcessedDataSource";

export interface Props {
  processedDataSource: ProcessedDataSource;
  showDetailedModel: boolean;
  model: Model;
  factorizedCanvasWidth: number
  onClose: () => void;
  onDelete: () => void;
  onSave: ( label: string[], info: string, infoTitle: string, shortInfo: string[], typeId: string,
    itemSymbols: ItemSymbol[], tutorialStep: TutorialStep ) => void;
}

const EditDataSourceDialog: React.FC<Props> = props => {

  const [label, setLabel] = useState<string[]>( props.processedDataSource.dataSource.label );
  const [info, setInfo] = useState<string>( props.processedDataSource.dataSource.info );
  const [infoTitle, setInfoTitle] = useState<string>( props.processedDataSource.dataSource.infoTitle );
  const [shortInfo, setShortInfo] = useState<string[]>( props.processedDataSource.dataSource.shortInfo );
  const [typeId, setTypeId] = useState<string>( props.processedDataSource.dataSource.typeId );

  const [itemSymbols, setItemSymbols] = useState<ItemSymbol[]>(
    props.processedDataSource.dataSource.itemSymbols || [] );

  const currentTutorialStep = props.model.tutorial.steps.find(
    ( tutorialStep: TutorialStep ) => tutorialStep.itemId === props.processedDataSource.dataSource.id );

  const [tutorialStep, setTutorialStep] = useState<TutorialStep | null>(
    currentTutorialStep ?
      currentTutorialStep :
      null );

  return (
    <Dialog>
      <DialogHeader>Datenkategorie bearbeiten</DialogHeader>
      <DialogBody>

        <TwoColumnContainer>
          <div>
            <TypoHeadline size={"s"}>Bezeichnung</TypoHeadline>
            <TextareaInput label={""}
                           value={label.reduce( ( acc, current ) => {
                             return acc + "\n" + current
                           } )}
                           onUpdate={( value: string ) => {
                             setLabel( value.split( "\n" ) )
                           }
                           }/>

            <TypoHeadline size={"s"}>Kurzinfo</TypoHeadline>
            <TextareaInput value={!!shortInfo ? shortInfo[0] : ""}
                           onUpdate={( value: string ) => {
                             setShortInfo( [value] );
                           }}/>

            <TypoHeadline size={"s"}>Box-Typ</TypoHeadline>
            <div>
              {props.model.boxTypes.map( ( boxType: BoxType, index: number ) => {
                return (
                  <InputRadioBox key={Math.random()}
                                 label={"#" + (index + 1) + ": " + boxType.title}
                                 value={boxType.id === typeId}
                                 onUpdate={( val ) => {
                                   val && setTypeId( boxType.id );
                                 }}
                  />
                )
              } )}
            </div>
          </div>
          <div>
            <PreviewItem modelState={props.model}
                         showDetailedModel={props.showDetailedModel}
                         factorizedCanvasWidth={props.factorizedCanvasWidth}
                         previewItem={{
                           ...props.processedDataSource,
                           dataSource: {
                             ...props.processedDataSource.dataSource,
                             label: label,
                             shortInfo: shortInfo
                           }
                         }}
            />
          </div>
        </TwoColumnContainer>


        <TwoColumnContainer>
          <div>
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
                        {customSymbol.isDialog && (
                          <div>
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
                          </div>
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
                      </div>

                      {[...props.model.predefinedSymbols, ...props.model.customSymbols].length - 1 !== index && (
                        <SeperatorHorizontal/>
                      )}

                    </div>
                  )
                } )}
            </div>
          </div>
          <div>
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
                                 itemId: props.processedDataSource.dataSource.id
                               } );
                             }
                           }}
            />
            {tutorialStep && tutorialStep.isActive && (
              <div css={theme => ([{
                margin: "1.2vw 0"
              }])}>
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
              </div>
            )}
          </div>
        </TwoColumnContainer>


      </DialogBody>
      <DialogButtonBar hasDelete={true}>
        <Button onClick={props.onDelete} type={"danger"}>Löschen</Button>
        <Button onClick={props.onClose}>Abbrechen</Button>

        <Button onClick={() => {
          props.onSave( label, info, infoTitle, shortInfo, typeId, itemSymbols, tutorialStep );
        }} type={"primary"}>Speichern</Button>

      </DialogButtonBar>
    </Dialog>

  )
};

export { EditDataSourceDialog };