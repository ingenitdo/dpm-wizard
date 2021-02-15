/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { Model } from "../../../../entities/Model";
import { ModelUpdater } from "../useModelState";
import { Container } from "../../../../components/layout/Container";
import { TextInput } from "../../../../components/input/InputText";
import { InputCheckbox } from "../../../../components/input/InputCheckbox";

export interface Props {
  modelState: Model;
  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const TabTitleAndControls: React.FC<Props> = props => {

  return (
    <div>
      <TypoHeadline size={"l"} margin={true}>
        Titel & Steuerelemente
      </TypoHeadline>

      <Container>
        <div>
          <TextInput label={"Titel"}
                     value={props.modelState.title}
                     onUpdate={( value: string ) => {
                       props.onUpdateTempModel( ( draft ) => {
                         draft.title = value;
                       } );
                     }}
          />

          <InputCheckbox label={"zeige Titel"}
                         labelRight={true}
                         value={props.modelState.masterData.controlOptions.showTitle}
                         onUpdate={( value: boolean ) => {
                           props.onUpdateTempModel( ( draft ) => {
                             draft.masterData.controlOptions.showTitle = value;
                           } );
                         }}
          />
        </div>
        <div/>

      </Container>
      <Container>
        <div>
          <TextInput label={"Subtitel"}
                     value={props.modelState.subtitle}
                     onUpdate={( value: string ) => {
                       props.onUpdateTempModel( ( draft ) => {
                         draft.subtitle = value;
                       } );
                     }}
          />
          <InputCheckbox label={"zeige Subtitel"}
                         labelRight={true}
                         value={props.modelState.masterData.controlOptions.showSubTitle}
                         onUpdate={( value: boolean ) => {
                           props.onUpdateTempModel( ( draft ) => {
                             draft.masterData.controlOptions.showSubTitle = value;
                           } );
                         }}
          />
        </div>
        <div/>
      </Container>

      <Container>
        <InputCheckbox label={"zeige Legende"}
                       labelRight={true}
                       value={props.modelState.masterData.controlOptions.showLegend}
                       onUpdate={( value: boolean ) => {
                         props.onUpdateTempModel( ( draft ) => {
                           draft.masterData.controlOptions.showLegend = value;
                         } );
                       }}
        />
      </Container>
      <Container>
        <InputCheckbox label={"zeige Fullscreen"}
                       labelRight={true}
                       value={props.modelState.masterData.controlOptions.showFullscreen}
                       onUpdate={( value: boolean ) => {
                         props.onUpdateTempModel( ( draft ) => {
                           draft.masterData.controlOptions.showFullscreen = value;
                         } );
                       }}
        />
      </Container>
      <Container>
        <InputCheckbox label={"zeige Zoom"}
                       labelRight={true}
                       value={props.modelState.masterData.controlOptions.showZoom}
                       onUpdate={( value: boolean ) => {
                         props.onUpdateTempModel( ( draft ) => {
                           draft.masterData.controlOptions.showZoom = value;
                         } );
                       }}
        />
      </Container>

      <Container>
        <InputCheckbox label={"zeige TutorialType"}
                       labelRight={true}
                       value={props.modelState.masterData.controlOptions.showTutorial}
                       onUpdate={( value: boolean ) => {
                         props.onUpdateTempModel( ( draft ) => {
                           draft.masterData.controlOptions.showTutorial = value;
                         } );
                       }}
        />
      </Container>

    </div>
  )
};

export { TabTitleAndControls };