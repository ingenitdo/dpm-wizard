/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { Model } from "../../../../entities/Model";
import { ModelUpdater } from "../useModelState";
import { Container } from "../../../../components/layout/Container";
import { InputColor } from "../../../../components/input/InputColor";
import { TypoLabel } from "../../../../components/typo/TypoLabel";
import { InputColorContainer } from "../../../../components/layout/InputColorContainer";
import { PreviewCase } from "../../../../components/preview/PreviewCase";
import { Language } from "../../../../entities/Language";
import { InputNumber } from "../../../../components/input/InputNumber";

export interface Props {
  modelState: Model;
  activeLanguage: Language;
  showDetailedModel: boolean;
  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const CaseTab: React.FC<Props> = props => {

  return (
    <div>
      <TypoHeadline size={"l"} margin={true}>
        Kapitel
      </TypoHeadline>

      <Container>
        <div>
          <TypoHeadline size={'s'} margin={true}>
            Farben
          </TypoHeadline>

          <InputColorContainer>
            <InputColor label={"Kopfzeile"}
                        value={props.modelState.colors.caseHeaderBackground}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.caseHeaderBackground = value;
                          } )
                        }
                        }/>
          </InputColorContainer>

          <InputColorContainer>

            <InputColor label={"Hintergrund"}
                        value={props.modelState.colors.caseBodyBackground}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.caseBodyBackground = value;
                          } )
                        }
                        }/>
          </InputColorContainer>

          <InputColorContainer>

            <InputColor label={"Rand"}
                        value={props.modelState.colors.caseBorder}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.caseBorder = value;
                          } )
                        }
                        }/>
          </InputColorContainer>

          <InputColorContainer>

            <InputColor label={"Text"}
                        value={props.modelState.colors.caseHeaderLabel}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.caseHeaderLabel = value;
                          } )
                        }
                        }/>
          </InputColorContainer>
          <InputColorContainer>

            <InputColor label={"Icon"}
                        value={props.modelState.colors.caseHeaderIcon}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.caseHeaderIcon = value;
                          } )
                        }
                        }/>
          </InputColorContainer>

          <TypoHeadline size={'s'} margin={true}>
            Größen
          </TypoHeadline>
          <Container>
            <InputNumber label={"Bezeichnung"}
                         value={props.modelState.dimensions.caseLabelSize*10}
                         onUpdate={( value ) => {
                           props.onUpdateTempModel( ( draft ) => {
                             if(value >= 4 && value <= 20) {
                               draft.dimensions.caseLabelSize = value/10;
                             }
                           } );
                         }}/>
          </Container>
        </div>


        <div>
          <PreviewCase modelState={props.modelState}
                       showDetailedModel={props.showDetailedModel}
          />
        </div>

      </Container>
    </div>
  )
};

export { CaseTab };