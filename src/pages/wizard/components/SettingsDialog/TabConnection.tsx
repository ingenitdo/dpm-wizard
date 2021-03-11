/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { ModelUpdater } from "../useModelState";
import { Container } from "../../../../components/layout/Container";
import { TypoLabel } from "../../../../components/typo/TypoLabel";
import { InputColorContainer } from "../../../../components/layout/InputColorContainer";
import { Model } from "../../../../entities/Model";
import { ButtonContainer } from "../../../../components/layout/ButtonContainer";
import { Button } from "../../../../components/Button";
import { v4 as uuidv4 } from "uuid";
import { ConnectionType } from "../../../../entities/ConnectionType";
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";
import { InputColor } from "../../../../components/input/InputColor";
import { InputNumber } from "../../../../components/input/InputNumber";
import { PreviewConnection } from "../../../../components/preview/PreviewConnection";
import { TextInput } from "../../../../components/input/InputText";

export interface Props {
  modelState: Model;
  showDetailedModel: boolean;

  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const TabConnection: React.FC<Props> = props => {

  return (
    <div>
      <TypoHeadline size={"l"} margin={true}>
        Pfeile
      </TypoHeadline>



        <div>
          <TypoHeadline size={'s'} margin={true}>
            Text
          </TypoHeadline>
          <InputColorContainer>
            <InputColor label={"Hintergrund"}
                        value={props.modelState.colors.textEllipsisBackground}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.textEllipsisBackground = value;
                          } );
                        }}/>
            <InputColor label={"Text"}
                        value={props.modelState.colors.textEllipsisLabel}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.textEllipsisLabel = value;

                          } );
                        }}/>
          </InputColorContainer>
        </div>

      {props.modelState.connectionTypes.map( ( connectionType: ConnectionType, index: number ) => {
          return (
            <div key={connectionType.id}
                 css={theme => ([{
                   marginTop: "1vw",
                 }])}>
              <Container>
                <div>
                  <TypoHeadline size={'l'} margin={true}>
                    #{index + 1}
                  </TypoHeadline>

                  <InputColorContainer>
                    <TextInput label={"Titel"} value={connectionType.title || ""} onUpdate={( value ) => {
                      props.onUpdateTempModel( ( draft ) => {
                        const conType = draft.connectionTypes.find( cT => cT.id === connectionType.id );
                        conType.title = value;
                      } )
                    }}
                    />
                    <TextInput label={"Beschreibung (Legende)"} value={connectionType.legendLabel || ""} onUpdate={( value ) => {
                      props.onUpdateTempModel( ( draft ) => {
                        const conType = draft.connectionTypes.find( cT => cT.id === connectionType.id );
                        conType.legendLabel = value;
                      } )
                    }}
                    />
                  </InputColorContainer>
                  <div>

                    <InputColorContainer>
                      <InputColor label={"Farbe"}
                                  value={connectionType.color}
                                  onUpdate={( value ) => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const conType = draft.connectionTypes.find( cT => cT.id === connectionType.id );
                                      conType.color = value;
                                    } )
                                  }
                                  }/>
                    </InputColorContainer>

                    <TypoLabel size={"s"} margin={true}>Darstellung</TypoLabel>
                    <InputColorContainer>
                      <InputNumber label={"Länge Strichelung"}
                                   value={parseInt(
                        connectionType.strokeDasharray && connectionType.strokeDasharray.split( "," )[0] ) || 0}
                                   onUpdate={( value: number ) => {
                                     if(value >= 0 && value <= 40) {
                                       props.onUpdateTempModel( draft => {
                                         const conType = draft.connectionTypes.find(
                                           cT => cT.id === connectionType.id );
                                         const actualValue = conType.strokeDasharray;

                                         if( actualValue ) {
                                           conType.strokeDasharray = value.toString() + "," + actualValue.split(
                                             "," )[1];
                                         }
                                         else {
                                           conType.strokeDasharray = value.toString() + ",0";
                                         }
                                       } );
                                     }
                                   }}
                      />
                      <InputNumber label={"Länge Lücken"}
                        value={parseInt(
                        connectionType.strokeDasharray && connectionType.strokeDasharray.split( "," )[1] ) || 0}
                                   onUpdate={( value: number ) => {
                                     if(value >= 0 && value <= 40) {

                                       props.onUpdateTempModel( draft => {
                                         const conType = draft.connectionTypes.find(
                                           cT => cT.id === connectionType.id );
                                         const actualValue = conType.strokeDasharray;

                                         if( actualValue ) {
                                           conType.strokeDasharray = actualValue.split( "," )[0] + ","
                                             + value.toString();
                                         }
                                         else {
                                           conType.strokeDasharray = "0," + value.toString();
                                         }
                                       } );
                                     }
                                   }
                                   }
                      />
                      <InputNumber label={"Bezeichnung"}
                                   value={connectionType.labelSize*10}
                                   onUpdate={( value ) => {
                                     props.onUpdateTempModel( ( draft ) => {
                                       const elem = draft.connectionTypes.find( b => b.id === connectionType.id );
                                       if(value >= 4 && value <= 20) {
                                         elem.labelSize = value/10;
                                       }
                                     } );
                                   }}/>
                    </InputColorContainer>
                  </div>

                  {index > 0 && (
                    <ButtonContainer>
                      <Button type={"danger"} onClick={() => {
                        props.onUpdateTempModel( ( draft ) => {
                          const conType = draft.connectionTypes.find( cT => cT.id === connectionType.id );
                          const conIndex = draft.connectionTypes.indexOf( conType );
                          if( conIndex > -1 ) {
                            draft.connectionTypes.splice( conIndex, 1 );
                          }

                          draft.cases.map( c => {
                            c.connections.map( con => {
                              con.typeId = draft.connectionTypes[0].id;

                            } )
                          } )
                        } )
                      }}>
                        Löschen
                      </Button>
                    </ButtonContainer>
                  )}


                </div>
                <PreviewConnection modelState={props.modelState}
                                   showDetailedModel={props.showDetailedModel}
                                   connectionType={connectionType}
                />


              </Container>

              <SeperatorHorizontal/>
            </div>

          )
        }
      )}

      <ButtonContainer>
        <Button onClick={() => {
          props.onUpdateTempModel( ( draft ) => {
            draft.connectionTypes.push(
              {
                id: uuidv4(),
                color: "#aaaaaa",
                textColor: "#aaaaaa",
                colorInactive: "#aaaaaa",
                textColorInactive: "#aaaaaa",
                strokeDasharray: "0, 0",
                legend: true,
                legendOrder: draft.connectionTypes.length,
                legendLabel: "",
                default: false,
                labelSize: 1.0
              }
            )
          } );
        }}>Pfad hinzufügen
        </Button>
      </ButtonContainer>

    </div>
  )
};

export { TabConnection };