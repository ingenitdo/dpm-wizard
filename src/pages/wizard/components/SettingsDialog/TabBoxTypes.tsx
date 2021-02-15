/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { Model } from "../../../../entities/Model";
import { ModelUpdater } from "../useModelState";
import { InputColor } from "../../../../components/input/InputColor";
import { BoxType } from "../../../../entities/BoxType";
import { TypoLabel } from "../../../../components/typo/TypoLabel";
import { v4 as uuidv4 } from 'uuid';
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";
import { Button } from "../../../../components/Button";
import { ButtonContainer } from "../../../../components/layout/ButtonContainer";
import { InputColorContainer } from "../../../../components/layout/InputColorContainer";
import { Language } from "../../../../entities/Language";
import { Container } from "../../../../components/layout/Container";
import { TextInput } from "../../../../components/input/InputText";
import { InputNumber } from "../../../../components/input/InputNumber";
import { PreviewItem } from "../../../../components/preview/PreviewItem";

export interface Props {
  modelState: Model;
  activeLanguage: Language;
  showDetailedModel: boolean;
  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const TabBoxTypes: React.FC<Props> = props => {

  return (
    <div>
      <TypoHeadline size={"l"}>
        Box-Typen
      </TypoHeadline>

      <div>

        {props.modelState.boxTypes.map( ( boxType: BoxType, index: number ) => {
          return (

            <div key={boxType.id}
                 css={theme => ([{
                   marginTop: "1vw"
                 }])}>
              <Container>
                <div>
                  <TypoHeadline size={'l'} margin={true}>
                    #{index + 1}
                  </TypoHeadline>

                  <div>
                    <TextInput label={"Titel"} value={boxType.title || ""} onUpdate={( value ) => {
                      props.onUpdateTempModel( ( draft ) => {
                        const bt = draft.boxTypes.find( cT => cT.id === boxType.id );
                        bt.title = value;
                      } )
                    }}
                    />
                  </div>

                  <div css={( theme: any ) => ([{
                    marginBottom: "1vw"
                  }])}>
                    <TypoHeadline size={'s'} margin={true}>
                      Farben
                    </TypoHeadline>

                    <TypoLabel size={"s"} margin={true}>Hintergrund</TypoLabel>
                    <InputColorContainer>
                      <InputColor label={"standard"}
                                  value={boxType.colorInactive}
                                  onUpdate={( value ) => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const elem = draft.boxTypes.find( b => b.id === boxType.id );
                                      elem.colorInactive = value;
                                    } );
                                  }}/>
                      <InputColor label={"aktiv"}
                                  value={boxType.color}
                                  onUpdate={( value ) => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const elem = draft.boxTypes.find( b => b.id === boxType.id );
                                      elem.color = value;
                                    } );
                                  }}/>
                    </InputColorContainer>

                    <TypoLabel size={"s"} margin={true}>Text</TypoLabel>
                    <InputColorContainer>
                      <InputColor label={"standard"}
                                  value={boxType.textColorInactive}
                                  onUpdate={( value ) => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const elem = draft.boxTypes.find( b => b.id === boxType.id );
                                      elem.textColorInactive = value;
                                    } );
                                  }}/>
                      <InputColor label={"aktiv"}
                                  value={boxType.textColor}
                                  onUpdate={( value ) => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const elem = draft.boxTypes.find( b => b.id === boxType.id );
                                      elem.textColor = value;
                                    } );
                                  }}/>
                    </InputColorContainer>

                    <TypoLabel size={"s"} margin={true}>Short-Info</TypoLabel>
                    <InputColorContainer>
                      <InputColor label={"standard"}
                                  value={boxType.shortInfoBackground}
                                  onUpdate={( value ) => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const elem = draft.boxTypes.find( b => b.id === boxType.id );
                                      elem.shortInfoBackground = value;
                                    } );
                                  }}/>
                      <InputColor label={"aktiv"}
                                  value={boxType.shortInfoActiveBackground}
                                  onUpdate={( value ) => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const elem = draft.boxTypes.find( b => b.id === boxType.id );
                                      elem.shortInfoActiveBackground = value;
                                    } );
                                  }}/>
                    </InputColorContainer>

                    <TypoLabel size={"s"} margin={true}>Info-Icon</TypoLabel>
                    <InputColorContainer>
                      <InputColor label={"standard"}
                                  value={boxType.infoIconBackground}
                                  onUpdate={( value ) => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const elem = draft.boxTypes.find( b => b.id === boxType.id );
                                      elem.infoIconBackground = value;
                                    } );
                                  }}/>
                      <InputColor label={"aktiv"}
                                  value={boxType.infoIconActiveBackground}
                                  onUpdate={( value ) => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const elem = draft.boxTypes.find( b => b.id === boxType.id );
                                      elem.infoIconActiveBackground = value;
                                    } );
                                  }}/>
                    </InputColorContainer>


                  </div>

                  <TypoHeadline size={'s'} margin={true}>
                    Größen
                  </TypoHeadline>
                  <TypoLabel size={"s"} margin={true}>Text</TypoLabel>
                  <Container>
                    <InputNumber label={"Bezeichnung"}
                                 value={boxType.labelSize * 10}
                                 onUpdate={( value ) => {
                                   props.onUpdateTempModel( ( draft ) => {
                                     const elem = draft.boxTypes.find( b => b.id === boxType.id );
                                     if( value >= 4 && value <= 20 ) {
                                       elem.labelSize = value / 10;
                                     }
                                   } );
                                 }}/>
                    <InputNumber label={"Kurz-Info"}
                                 value={boxType.shortInfoLabelSize * 10}
                                 onUpdate={( value ) => {
                                   props.onUpdateTempModel( ( draft ) => {
                                     const elem = draft.boxTypes.find( b => b.id === boxType.id );
                                     if( value >= 4 && value <= 20 ) {
                                       elem.shortInfoLabelSize = value / 10;
                                     }
                                   } );
                                 }}/>
                  </Container>

                  {index > 0 && (
                    <ButtonContainer>
                      <Button type={"danger"} onClick={() => {
                        props.onUpdateTempModel( ( draft ) => {
                          const boxElem = draft.boxTypes.find( p => p.id === boxType.id );
                          const boxIndex = draft.boxTypes.indexOf( boxElem );
                          if( boxIndex > -1 ) {
                            draft.boxTypes.splice( boxIndex, 1 );
                          }

                          draft.cases.map( c => {
                            c.dataSources.map( ds => {
                              ds.typeId = draft.boxTypes[0].id;
                            } );
                            c.actions.map( ds => {
                              ds.typeId = draft.boxTypes[0].id;
                            } );
                            c.dataPurposes.map( ds => {
                              ds.typeId = draft.boxTypes[0].id;
                            } );
                          } )
                        } )
                      }}>
                        Löschen
                      </Button>
                    </ButtonContainer>
                  )}
                </div>


                <div>
                  <PreviewItem modelState={props.modelState}
                               showDetailedModel={props.showDetailedModel}
                               previewItem={{
                                   action: {
                                     id: "previewItem",
                                     typeId: boxType.id,
                                     label: [
                                       "Ein Beispiel"
                                     ],
                                     info: "<div><p>Prozessschritt Info</p></div>",
                                     erasurePolicy: "Dauerhaft gespeichert",
                                     storagePolicy: "Eigenes Smartphone",
                                     participantID: "1",
                                     position: {
                                       start: 0,
                                       end: 0
                                     },
                                     shortInfo: ["Eine Info"],
                                     itemSymbols: [
                                       {
                                         customSymbolId: "b4a9c476-2d96-4f25-9354-a74b0901efde",
                                         title: "",
                                         text: ""
                                       }
                                     ]
                                   },
                                   y: 0,
                                   x: 0,
                                   width: 0,
                                   height: 0,

                                 }}
                               isSettingsDialogPreview={true}
                  />
                </div>
              </Container>

              <SeperatorHorizontal/>
            </div>
          );
        } )}

        <ButtonContainer>
          <Button onClick={() => {
            props.onUpdateTempModel( ( draft ) => {
              draft.boxTypes.push(
                {
                  id: uuidv4(),
                  title: "Neue Box",
                  color: "#ffffff",
                  textColor: "#000000",
                  colorInactive: "#ffffff",
                  textColorInactive: "#000000",
                  borderColor: "#ffffff",
                  borderWidth: 0,
                  borderStrokeDasharray: "#ffffff",
                  legend: true,
                  legendOrder: 0,
                  legendLabel: "#ffffff",
                  sourceDefault: true,
                  purposeDefault: true,
                  actionDefault: true,

                  labelSize: 1.0,
                  shortInfoLabelSize: 1.0,

                  shortInfoBackground: "#999999",
                  shortInfoActiveBackground: "#999999",
                  infoIconBackground: "#666666",
                  infoIconActiveBackground: "#666666",
                  policyIconBackground: "#666666",
                  policyIconActiveBackground: "#666666"
                }
              )
            } );
          }}>Box-Typ hinzufügen
          </Button>
        </ButtonContainer>
      </div>
    </div>
  )
};

export { TabBoxTypes };