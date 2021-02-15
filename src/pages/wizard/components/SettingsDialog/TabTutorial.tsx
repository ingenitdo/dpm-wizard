/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { Model } from "../../../../entities/Model";
import { ModelUpdater } from "../useModelState";
import { TextInput } from "../../../../components/input/InputText";
import { useState } from "react";
import { InputCheckbox } from "../../../../components/input/InputCheckbox";
import { TutorialStep } from "../../../../entities/TutorialStep";
import { TypoLabel } from "../../../../components/typo/TypoLabel";
import { RichTextEditor } from "../../../../components/input/RichTextEditor";
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";
import { Icon } from '../../../../components/icon_picker/Icon';
import { useTheme } from "emotion-theming";
import { Dialog } from "../../../../components/dialog/Dialog";
import { DialogHeader } from "../../../../components/dialog/DialogHeader";
import { DialogBody } from "../../../../components/dialog/DialogBody";
import { DialogButtonBar } from "../../../../components/dialog/DialogButtonBar";
import { Button } from "../../../../components/Button";
import { InputColorContainer } from "../../../../components/layout/InputColorContainer";
import { InputColor } from "../../../../components/input/InputColor";
import { Container } from "../../../../components/layout/Container";
import { InputNumber } from "../../../../components/input/InputNumber";

export interface Props {
  modelState: Model;
  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const TabTutorial: React.FC<Props> = props => {

  const theme = useTheme() as any;

  const [tutorialStepHovering, setTutorialStepHovering] = useState<string | null>( null );
  const [tutorialStepToDelete, setTutorialStepToDelete] = useState<string | null>( null );
  const [draggedTutorialStep, setDraggedTutorialStep] = useState<TutorialStep | null>( null );
  const [tutorialStepToEdit, setTutorialStepToEdit] = useState<string | null>( null );

  return (
    <div>
      <TypoHeadline size={"l"} margin={true}>
        Tutorial
      </TypoHeadline>

      <div css={theme => ([{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        width: "calc(100% - " + theme.INPUT.BORDER_WIDTH + ")",
        marginBottom: 1 + "vw"
      }])}
      >
        <div css={( theme: any ) => ([{
          display: "flex",
          alignItems: "center",
          width: "calc(100% - " + theme.INPUT.BORDER_WIDTH + " - " + theme.INPUT.BORDER_WIDTH + " - 4vw)",
          paddingLeft: "2vw",
          paddingRight: "2vw",
          marginBottom: "1vw"
        }])}>
          <div css={( theme: any ) => ([{
            flex: "1 0 10%"
          }])}>
            <TypoHeadline size={"s"}>#</TypoHeadline>

          </div>
          <div css={( theme: any ) => ([{
            flex: "1 0 20%"
          }])}>
            <TypoHeadline size={"s"}>Titel</TypoHeadline>
          </div>
          <div css={( theme: any ) => ([{
            flex: "1 0 40%",
            paddingRight: "5%"
          }])}>
            <TypoHeadline size={"s"}>Text</TypoHeadline>
          </div>
          <div css={( theme: any ) => ([{
            flex: "1 0 25%",
          }])}>
            <TypoHeadline size={"s"}>aktiv</TypoHeadline>
          </div>
        </div>
        {props.modelState.tutorial.steps && props.modelState.tutorial.steps.map(
          ( tutorialStep: TutorialStep, index: number ) => {

            return (
              <React.Fragment key={tutorialStep.id}>
                <SeperatorHorizontal/>

                <div
                  css={theme => ([{
                    width: "calc(100% - " + theme.INPUT.BORDER_WIDTH + " - " + theme.INPUT.BORDER_WIDTH + " - 4vw)",
                    display: "flex",
                    alignItems: tutorialStepToEdit === tutorialStep.id ? "flex-start" : "center",
                    backgroundColor: (draggedTutorialStep && draggedTutorialStep.id === tutorialStep.id)
                      ? "#EEE"
                      : (tutorialStepHovering === tutorialStep.id)
                        ? theme.COLORS.EDIT.PRIMARY.DEFAULT
                        : "white",
                    borderRadius: theme.INPUT.BORDER_RADIUS,
                    paddingLeft: "2vw",
                    paddingRight: "2vw",
                    marginBottom: "0.2vw",

                    "&:hover": {
                      cursor: "pointer"
                    }
                  }])}

                  draggable
                  onDragOver={( e: any ) => {
                    e.preventDefault();
                    setTutorialStepHovering( tutorialStep.id );

                  }}
                  onDragStart={( e: any ) => {
                    setDraggedTutorialStep( tutorialStep );

                  }}
                  onDrop={( e: any ) => {
                    e.preventDefault();
                    props.onUpdateTempModel( ( draft ) => {
                      const tutorialSteps = draft.tutorial.steps;
                      const elemA = tutorialSteps.find( ( a ) => a.id === tutorialStep.id );
                      const elemB = tutorialSteps.find( ( a ) => a.id === draggedTutorialStep.id );

                      const indexA = tutorialSteps.indexOf( elemA );
                      const indexB = tutorialSteps.indexOf( elemB );

                      const temp = tutorialSteps[indexA];
                      tutorialSteps[indexA] = tutorialSteps[indexB];
                      tutorialSteps[indexB] = temp;
                    } );
                    setTutorialStepHovering( "" );
                    setDraggedTutorialStep( null );
                  }}
                >

                  <div css={( theme: any ) => ([{
                    flex: "1 0 10%",
                    margin: "0.6vw 0"
                  }])}>
                    <TypoLabel size={"s"}>{index + 1}</TypoLabel>
                  </div>
                  <div css={( theme: any ) => ([{
                    flex: "1 0 20%"
                  }])}>
                    {tutorialStepToEdit === tutorialStep.id && (
                      <TextInput value={tutorialStep.title}
                                 onUpdate={( value: string ) => {
                                   props.onUpdateTempModel( ( draft ) => {
                                     const tutorialStepElem = draft.tutorial.steps.find(
                                       ( tS: TutorialStep ) => tS.id === tutorialStep.id );
                                     if( tutorialStepElem ) {
                                       tutorialStepElem.title = value;
                                     }
                                   } );
                                 }}
                      />
                    )}
                    {tutorialStepToEdit !== tutorialStep.id && (
                      <TypoLabel size={"s"}>
                        <div dangerouslySetInnerHTML={{ __html: tutorialStep.title }}/>
                      </TypoLabel>
                    )}

                  </div>
                  <div css={( theme: any ) => ([{
                    flex: "1 0 40%",
                    paddingRight: "5%"
                  }])}>
                    {tutorialStepToEdit === tutorialStep.id && (
                      <RichTextEditor value={tutorialStep.text || ""}
                                      onChange={( value: string ) => {
                                        props.onUpdateTempModel( ( draft ) => {
                                          const tutorialStepElem = draft.tutorial.steps.find(
                                            ( tS: TutorialStep ) => tS.id === tutorialStep.id );
                                          if( tutorialStepElem ) {
                                            tutorialStepElem.text = value;
                                          }
                                        } );
                                      }}/>
                    )}
                    {tutorialStepToEdit !== tutorialStep.id && (
                      <TypoLabel size={"s"}>
                        <div dangerouslySetInnerHTML={{ __html: tutorialStep.text }}/>
                      </TypoLabel>
                    )}

                  </div>
                  <div css={( theme: any ) => ([{
                    flex: "1 0 10%"
                  }])}>

                    <InputCheckbox value={tutorialStep.isActive}
                                   onUpdate={( value: boolean ) => {
                                     props.onUpdateTempModel( ( draft ) => {
                                       const tutorialStepElem = draft.tutorial.steps.find(
                                         ( tS: TutorialStep ) => tS.id === tutorialStep.id );
                                       if( tutorialStepElem ) {
                                         tutorialStepElem.isActive = value;
                                       }
                                     } );
                                   }}
                    />
                  </div>

                  <div css={( theme: any ) => ([{
                    flex: "1 0 15%",
                    display: "flex",
                    alignItems: tutorialStepToEdit === tutorialStep.id ? "flex-start" : "center",
                    justifyContent: "flex-end",
                    width: "1.35vw",
                    height: "1.35vw",
                    margin: "0.6vw 0"
                  }])}>
                    <div css={( theme: any ) => ([{
                      flex: "1 0 40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      width: "1.35vw",
                      height: "1.35vw",
                      marginRight: "20%",
                    }])}>
                      {index !== 0 && (
                        <Icon name={"arrow-up"}
                              color={theme.COLORS.TEXT}
                              onClick={() => {
                                props.onUpdateTempModel( ( draft ) => {
                                  const tutorialSteps = draft.tutorial.steps;

                                  const temp = tutorialSteps[index];
                                  tutorialSteps[index] = tutorialSteps[index - 1];
                                  tutorialSteps[index - 1] = temp;
                                } );
                              }}/>
                      )}
                      {index === 0 && (
                        <div css={theme => ([{ width: "100%" }])}/>
                      )}
                      {index !== (props.modelState.tutorial.steps.length - 1) && (
                        <Icon name={"arrow-down"}
                              color={theme.COLORS.TEXT}
                              onClick={() => {
                                props.onUpdateTempModel( ( draft ) => {
                                  const tutorialSteps = draft.tutorial.steps;

                                  const temp = tutorialSteps[index];
                                  tutorialSteps[index] = tutorialSteps[index + 1];
                                  tutorialSteps[index + 1] = temp;
                                } );
                              }}/>
                      )}
                      {index === (props.modelState.tutorial.steps.length - 1) && (
                        <div css={theme => ([{ width: "100%" }])}/>
                      )}

                    </div>


                    <Icon name={"edit"}
                          color={tutorialStepToEdit === tutorialStep.id ?
                            theme.COLORS.EDIT.SECONDARY.DEFAULT :
                            theme.COLORS.TEXT}
                          onClick={() => {
                            setTutorialStepToEdit( tutorialStepToEdit === tutorialStep.id ? null : tutorialStep.id );
                          }}/>
                    {tutorialStep.id !== "controls" && tutorialStep.id !== "header" && (
                      <Icon name={"trash"}
                            color={theme.COLORS.TEXT}
                            onClick={() => {
                              setTutorialStepToDelete( tutorialStep.id );
                            }}/>
                    )}
                    {(tutorialStep.id === "controls" || tutorialStep.id === "header") && (
                      <div css={theme => ([{ width: "100%" }])}/>
                    )}

                  </div>

                </div>
              </React.Fragment>
            );
          } )}
      </div>


      <Container>
        <div>
          <div>
          <TypoHeadline size={'s'}>
            Farben
          </TypoHeadline>

          <InputColorContainer>
            <InputColor label={"Hintergrund"}
                        value={props.modelState.colors.tutorialBackground}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.tutorialBackground = value;
                          } )
                        }
                        }/>

            <InputColor label={"Text"}
                        value={props.modelState.colors.tutorialLabel}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.tutorialLabel = value;
                          } )
                        }
                        }/>
          </InputColorContainer>

        </div>
        <div>
          <TypoHeadline size={'s'}>
            Größen
          </TypoHeadline>
          <InputColorContainer>
            <InputNumber label={"Text"}
                         value={props.modelState.dimensions.tutorialLabelSize || 12}
                         onUpdate={( value ) => {
                           props.onUpdateTempModel( ( draft ) => {
                             if( value >= 8 && value <= 20 ) {
                               draft.dimensions.tutorialLabelSize = value;
                             }
                           } );
                         }}
            />
          </InputColorContainer>
        </div>
      </div>
        <div>
          <InputCheckbox label={"Tutorial anzeigen"}
                         labelRight={true}
                         value={props.modelState.masterData.controlOptions.showTutorial}
                         onUpdate={( value: boolean ) => {
                           props.onUpdateTempModel( ( draft ) => {
                             draft.masterData.controlOptions.showTutorial = value;
                           } );
                         }}
          />
        </div>
      </Container>


      {tutorialStepToDelete !== null && (
        <Dialog>
          <DialogHeader>Löschen</DialogHeader>
          <DialogBody>

            <TypoLabel size={"s"}>Möchten Sie den Tutorial-Schritt wirklich löschen?</TypoLabel>

          </DialogBody>
          <DialogButtonBar>
            <Button onClick={() => {
              setTutorialStepToDelete( null );
            }}>Abbrechen</Button>
            <Button onClick={() => {
              setTutorialStepToDelete( null );

              props.onUpdateTempModel( ( draft ) => {
                const tutorialSteps = draft.tutorial.steps;
                const tutorialStepElem = tutorialSteps.find( ( tS: TutorialStep ) => tS.id === tutorialStepToDelete );
                const tutorialStepElemIndex = tutorialSteps.indexOf( tutorialStepElem );
                if( tutorialStepElemIndex > -1 ) {
                  tutorialSteps.splice( tutorialStepElemIndex, 1 );
                }
              } );
            }} type={"danger"}>Löschen</Button>

          </DialogButtonBar>
        </Dialog>
      )

      }

    </div>
  )
};

export { TabTutorial };