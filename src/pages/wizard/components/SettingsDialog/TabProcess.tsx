/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { Container } from "../../../../components/layout/Container";
import { InputColor } from "../../../../components/input/InputColor";
import { PreviewProcess } from "../../../../components/preview/PreviewProcess";
import { Model } from "../../../../entities/Model";
import { ModelUpdater } from "../useModelState";
import { TypoLabel } from "../../../../components/typo/TypoLabel";
import { InputColorContainer } from "../../../../components/layout/InputColorContainer";
import { Language } from "../../../../entities/Language";
import { InputNumber } from "../../../../components/input/InputNumber";
import { TextInput } from "../../../../components/input/InputText";
import { IconPicker } from "../../../../components/icon_picker/IconPicker";
import { IconType } from "../../../../entities/IconType";
import { DialogBody } from "../../../../components/dialog/DialogBody";

export interface Props {
  modelState: Model;
  activeLanguage: Language;
  showDetailedModel: boolean;

  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const TabProcess: React.FC<Props> = props => {

  return (
    <div>
      <TypoHeadline size={"l"} margin={true}>
        Kopfzeile Datenkategorien und Verwendungszweck
      </TypoHeadline>

      <Container>
        <div>
          <TypoHeadline size={'s'} margin={true}>
            Farben
          </TypoHeadline>

          <InputColorContainer>
            <InputColor label={"Hintergrund"}
                        value={props.modelState.colors.headerSourceBackground}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.headerSourceBackground = value;
                            draft.colors.headerSourceArrowBackground = value;
                            draft.colors.headerPurposeBackground = value;
                            draft.colors.headerPurposeArrowBackground = value;
                          } )
                        }
                        }/>
          </InputColorContainer>

          <InputColorContainer>
            <InputColor label={"Text"}
                        value={props.modelState.colors.headerSourceLabel}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.headerSourceLabel = value;
                            draft.colors.headerProcessLabel = value;
                            draft.colors.headerPurposeLabel = value;
                          } )
                        }
                        }/>
          </InputColorContainer>

          <InputColorContainer>
            <InputColor label={"Icon"}
                        value={props.modelState.colors.headerSourceIcon}
                        onUpdate={( value ) => {
                          props.onUpdateTempModel( ( draft ) => {
                            draft.colors.headerSourceIcon = value;
                            draft.colors.headerProcessIcon = value;
                            draft.colors.headerPurposeIcon = value;
                          } )
                        }
                        }/>
          </InputColorContainer>


          <TypoHeadline size={'s'} margin={true}>
            Größen
          </TypoHeadline>
          <Container>
            <InputNumber label={"Bezeichnung"}
                         value={props.modelState.dimensions.headerLabelSize * 10}
                         onUpdate={( value ) => {
                           props.onUpdateTempModel( ( draft ) => {
                             if( value >= 4 && value <= 20 ) {
                               draft.dimensions.headerLabelSize = value / 10;
                             }
                           } );
                         }}/>
          </Container>

          <Container>
            <div css={theme => ([{ marginTop: 1 + "vw" }])}>
              <TypoHeadline size={"s"} margin={true}>Datenkategorie</TypoHeadline>

              <TextInput label={"Bezeichnung"}
                         value={props.modelState.header.sourceLabel}
                         onUpdate={( value: string ) => {
                           props.onUpdateTempModel( ( draft ) => {
                             draft.header.sourceLabel = value;
                           } )
                         }}/>
              <IconPicker label={"Icon"}
                          value={props.modelState.header.sourceIcon}
                          onChange={( icon: IconType ) => {
                            props.onUpdateTempModel( ( draft ) => {
                              draft.header.sourceIcon = icon;
                            } )
                          }}
              />
            </div>
            <div css={theme => ([{ marginTop: 1 + "vw" }])}>
              <TypoHeadline size={"s"} margin={true}>Verwendungszweck</TypoHeadline>

              <TextInput label={"Bezeichnung"}
                         value={props.modelState.header.purposeLabel}
                         onUpdate={( value: string ) => {
                           props.onUpdateTempModel( ( draft ) => {
                             draft.header.purposeLabel = value;
                           } )
                         }}/>
              <IconPicker label={"Icon"}
                          value={props.modelState.header.purposeIcon}
                          onChange={( icon: IconType ) => {
                            props.onUpdateTempModel( ( draft ) => {
                              draft.header.purposeIcon = icon;
                            } )
                          }}
              />
            </div>
          </Container>
        </div>

        <div>
          <PreviewProcess modelState={props.modelState}
                          showDetailedModel={props.showDetailedModel}
          />
        </div>

      </Container>
    </div>
  )
};

export { TabProcess };