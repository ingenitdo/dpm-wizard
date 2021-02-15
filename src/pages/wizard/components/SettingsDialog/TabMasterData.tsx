/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { ChangeEvent } from "react";
import { ModelUpdater, ModelColors } from "../useModelState";
import { Model } from "../../../../entities/Model";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { TextInput } from "../../../../components/input/InputText";
import { TextareaInput } from "../../../../components/input/InputTextarea";
import { Container } from "../../../../components/layout/Container";
import { ViewerMode } from "../../../../entities/ViewerMode";

export interface Props {
  modelState: Model;
  originalModel: Model;
  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const TabMasterData: React.FC<Props> = props => {

  return (
    <div>
      <TypoHeadline size={"l"} margin={true}>
        Stammdaten
      </TypoHeadline>
      <Container>
        <div>
          <TextInput label={"Titel"}
                     value={props.modelState.masterData.title}
                     onUpdate={( value ) => {
                       props.onUpdateTempModel( ( draft ) => {
                         draft.masterData.title = value;
                       } );
                     }}
          />
          <TextInput label={"Autor"}
                     value={props.modelState.masterData.author}
                     onUpdate={( value ) => {
                       props.onUpdateTempModel( ( draft ) => {
                         draft.masterData.author = value;
                       } );
                     }}
          />
          <TextInput label={"Version"}
                     value={props.modelState.masterData.version}
                     onUpdate={( value ) => {
                       props.onUpdateTempModel( ( draft ) => {
                         draft.masterData.version = value;
                       } );
                     }}
          />
        </div>
        <div>
          <TextareaInput label={"Beschreibung"}
                         value={props.modelState.masterData.description}
                         onUpdate={( value ) => {
                           props.onUpdateTempModel( ( draft ) => {
                             draft.masterData.description = value;
                           } );
                         }}
          />


        </div>
      </Container>
    </div>
  )
};

export { TabMasterData };