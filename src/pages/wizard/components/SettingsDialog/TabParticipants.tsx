/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { Model } from "../../../../entities/Model";
import { ModelUpdater } from "../useModelState";
import { TextInput } from "../../../../components/input/InputText";
import { Participant } from "../../../../entities/Participant";
import { Container } from "../../../../components/layout/Container";
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";
import { ButtonContainer } from "../../../../components/layout/ButtonContainer";
import { Button } from "../../../../components/Button";
import { v4 as uuidv4 } from "uuid";
import { TextareaInput } from "../../../../components/input/InputTextarea";
import { Icon } from "../../../../components/Icon";
import { useTheme } from "emotion-theming";
import { InputColorContainer } from "../../../../components/layout/InputColorContainer";
import { InputColor } from "../../../../components/input/InputColor";
import { PreviewParticipant } from "../../../../components/preview/PreviewParticipant";
import { InputNumber } from "../../../../components/input/InputNumber";
import { IconPicker } from "../../../../components/icon_picker/IconPicker";
import { IconType } from "../../../../entities/IconType";

export interface Props {
  modelState: Model;
  showDetailedModel: boolean;

  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const TabParticipants: React.FC<Props> = props => {

  return (
    <div>
      <TypoHeadline size={"l"} margin={true}>
        Prozessbeteiligte
      </TypoHeadline>

      {props.modelState.participants.map( ( participant: Participant, index: number ) => {
        return (
          <div key={participant.id}
               css={theme => ([{
                 marginTop: "1vw",
               }])}>
            <Container>
              <div>
                <TypoHeadline size={'l'} margin={true}>
                  #{index + 1}
                </TypoHeadline>

                <TextareaInput label={"Bezeichnung"}
                               value={participant.label.reduce( ( acc, current ) => {
                                 return acc + "\n" + current
                               } )}
                               onUpdate={( value: string ) => {
                                 props.onUpdateTempModel( ( draft ) => {
                                   const participantElem = draft.participants.find( p => p.id === participant.id );
                                   participantElem.label = value.split( "\n" );
                                 } );
                               }
                               }/>
                <Container>
                  <div>
                    <TextareaInput label={"Bezeichnung: Prozessschritt vorhanden"} value={participant.hasActionLabel || ""}
                                   onUpdate={( value ) => {
                                     props.onUpdateTempModel( ( draft ) => {
                                       const participantElem = draft.participants.find( p => p.id === participant.id );
                                       participantElem.hasActionLabel = value;
                                     } )
                                   }}
                    />
                    <TextareaInput label={"Bezeichnung: keine Prozessschritt vorhanden"}
                                   value={participant.hasNoActionLabel || ""}
                                   onUpdate={( value ) => {
                                     props.onUpdateTempModel( ( draft ) => {
                                       const participantElem = draft.participants.find( p => p.id === participant.id );
                                       participantElem.hasNoActionLabel = value;
                                     } )
                                   }}
                    />
                  </div>
                  <IconPicker label={"Icon"}
                              value={participant.icon ? participant.icon : { id: "x", dataUri: "" }}
                              onChange={( icon: IconType ) => {
                                props.onUpdateTempModel( ( draft ) => {
                                  const participantElem = draft.participants.find( p => p.id === participant.id );
                                  participantElem.icon = icon;
                                } )
                              }}/>
                </Container>
                <TypoHeadline size={'s'} margin={true}>
                  Farben
                </TypoHeadline>
                <InputColorContainer>
                  <InputColor label={"Hintergrund"}
                              value={participant.backgroundColor}
                              onUpdate={( value ) => {
                                props.onUpdateTempModel( ( draft ) => {
                                  const participantElem = draft.participants.find( p => p.id === participant.id );
                                  participantElem.backgroundColor = value;
                                } );
                              }}/>
                  <InputColor label={"Rand"}
                              value={participant.borderColor}
                              onUpdate={( value ) => {
                                props.onUpdateTempModel( ( draft ) => {
                                  const participantElem = draft.participants.find( p => p.id === participant.id );
                                  participantElem.borderColor = value;
                                } );
                              }}/>
                  <InputColor label={"Icon"}
                              value={participant.iconColor}
                              onUpdate={( value ) => {
                                props.onUpdateTempModel( ( draft ) => {
                                  const participantElem = draft.participants.find( p => p.id === participant.id );
                                  participantElem.iconColor = value;
                                } );
                              }}/>
                  <InputColor label={"Bezeichnung"}
                              value={participant.labelColor}
                              onUpdate={( value ) => {
                                props.onUpdateTempModel( ( draft ) => {
                                  const participantElem = draft.participants.find( p => p.id === participant.id );
                                  participantElem.labelColor = value;
                                } );
                              }}/>
                </InputColorContainer>
                <TypoHeadline size={'s'} margin={true}>
                  Größen
                </TypoHeadline>
                <Container>
                  <InputNumber label={"Randgröße"}
                               value={participant.borderSize}
                               onUpdate={( value ) => {
                                 props.onUpdateTempModel( ( draft ) => {
                                   const participantElem = draft.participants.find( p => p.id === participant.id );
                                   if( value >= 0 && value <= 10 )
                                     participantElem.borderSize = value;
                                 } );
                               }}

                  />
                  <InputNumber label={"Bezeichnung"}
                               value={participant.labelSize * 10}
                               onUpdate={( value ) => {
                                 props.onUpdateTempModel( ( draft ) => {
                                   const elem = draft.participants.find( b => b.id === participant.id );
                                   if( value >= 4 && value <= 20 ) {
                                     elem.labelSize = value / 10;
                                   }
                                 } );
                               }}/>
                </Container>

                {index > 0 && (
                  <ButtonContainer>
                    <Button type={"danger"} onClick={() => {
                      props.onUpdateTempModel( ( draft ) => {
                        const participantElem = draft.participants.find( p => p.id === participant.id );
                        const participantIndex = draft.participants.indexOf( participantElem );
                        if( participantIndex > -1 ) {
                          draft.participants.splice( participantIndex, 1 );
                        }

                        draft.cases.map( c => {
                          const affectedAction = c.actions.filter( a => {
                            return a.participantID === participant.id
                          } );

                          const affectedConnections = c.connections.filter( con => {
                            return affectedAction.map( a => a.id ).includes( con.source ) ||
                              affectedAction.map( a => a.id ).includes( con.destination );
                          } );

                          affectedAction.map( aA => {
                            const actionElem = c.actions.find( a => a.id === aA.id );
                            const actionIndex = c.actions.indexOf( actionElem );
                            if( actionIndex > -1 ) {
                              c.actions.splice( actionIndex, 1 );
                            }
                          } );

                          affectedConnections.map( aA => {
                            const conElem = c.connections.find( a => a.id === aA.id );
                            const conIndex = c.connections.indexOf( conElem );
                            if( conIndex > -1 ) {
                              c.connections.splice( conIndex, 1 );
                            }
                          } );

                        } )
                      } )
                    }}>
                      Löschen
                    </Button>
                  </ButtonContainer>
                )}
              </div>
              <PreviewParticipant modelState={props.modelState}
                                  showDetailedModel={props.showDetailedModel}
                                  participant={participant}
              />
            </Container>
            <SeperatorHorizontal/>

          </div>
        );
      } )}

      <ButtonContainer>
        <Button isDisabled={props.modelState.participants.length >= 3}
                onClick={() => {
                  props.onUpdateTempModel( ( draft ) => {
                    draft.participants.push(
                      {
                        id: uuidv4(),
                        label: [""],
                        labelSize: 1.0,
                        hasActionLabel: "",
                        hasNoActionLabel: "",
                        backgroundColor: "#ffffff",
                        labelColor: "#000000",
                        iconColor: "#000000",
                        borderColor: "#000000",
                        borderSize: 1
                      }
                    )
                  } );
                }}>Prozessbeteiligten hinzufügen
        </Button>
      </ButtonContainer>

    </div>
  )
};

export { TabParticipants };