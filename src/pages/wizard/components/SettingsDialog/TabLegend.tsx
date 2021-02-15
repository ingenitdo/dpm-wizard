/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { ConnectionType } from "../../../../entities/ConnectionType";
import { Model } from "../../../../entities/Model";
import { ModelUpdater } from "../useModelState";
import { InputCheckbox } from "../../../../components/input/InputCheckbox";
import { TextInput } from "../../../../components/input/InputText";
import { BoxType } from "../../../../entities/BoxType";
import { CustomSymbol } from "../../../../entities/CustomSymbol";
import { TypoLabel } from "../../../../components/typo/TypoLabel";

export interface Props {
  modelState: Model;
  showDetailedModel: boolean;

  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const TabLegend: React.FC<Props> = props => {

  return (
    <div>
      <TypoHeadline size={"l"} margin={true}>
        Legende
      </TypoHeadline>
      <TypoHeadline size={"s"} margin={true}>
        Pfeile
      </TypoHeadline>
      {props.modelState.connectionTypes.map( ( connectionType: ConnectionType, index: number ) => {
          return (
            <div>
              <TypoLabel size={"xs"}>
                {connectionType.title}
              </TypoLabel>
              <div key={connectionType.id}
                   css={theme => ([{
                     width: "100%",
                     display: "flex",
                     alignItems: "center",
                     "& > *": {
                       marginRight: "1vw"
                     }
                   }])}>
                <InputCheckbox label={""}
                               value={connectionType.legend}
                               onUpdate={( value: boolean ) => {
                                 props.onUpdateTempModel( ( draft ) => {
                                   const conType = draft.connectionTypes.find( cT => cT.id === connectionType.id );
                                   conType.legend = value;
                                 } )
                               }
                               }/>

                <TextInput value={connectionType.legendLabel || connectionType.title}
                           width={"10vw"}
                           onUpdate={( value: string ) => {
                             props.onUpdateTempModel( ( draft ) => {
                               const conType = draft.connectionTypes.find( cT => cT.id === connectionType.id );
                               conType.legendLabel = value;
                             } )
                           }}
                />
              </div>
            </div>
          )
        }
      )}
      <div css={theme => ([{
        height: "2vw"
      }])}
      />
      <TypoHeadline size={"s"} margin={true}>
        Datenkategorien, Prozessschritte & Verwendungszwecke
      </TypoHeadline>
      {props.modelState.boxTypes.map( ( boxType: BoxType, index: number ) => {
          return (
            <div>
              <TypoLabel size={"xs"}>
                {boxType.title}
              </TypoLabel>
              <div key={boxType.id}
                   css={theme => ([{
                     width: "100%",
                     display: "flex",
                     alignItems: "center",
                     "& > *": {
                       marginRight: "1vw"
                     }
                   }])}>
                <InputCheckbox label={""}
                               value={boxType.legend}
                               onUpdate={( value: boolean ) => {
                                 props.onUpdateTempModel( ( draft ) => {
                                   const box = draft.boxTypes.find( bT => bT.id === boxType.id );
                                   box.legend = value;
                                 } )
                               }
                               }/>
                <TextInput value={boxType.legendLabel || boxType.title}
                           width={"10vw"}
                           onUpdate={( value: string ) => {
                             props.onUpdateTempModel( ( draft ) => {
                               const box = draft.boxTypes.find( bT => bT.id === boxType.id );
                               box.legendLabel = value;
                             } )
                           }}
                />
              </div>
            </div>
          )
        }
      )}
      <TypoHeadline size={"s"} margin={true}>
        Symbole
      </TypoHeadline>
      {[...props.modelState.predefinedSymbols, ...props.modelState.customSymbols].map(
        ( customSymbol: CustomSymbol, index: number ) => {
          return (
            <div>
              <TypoLabel size={"xs"}>
                {customSymbol.title}
              </TypoLabel>
              <div key={customSymbol.id}
                   css={theme => ([{
                     width: "100%",
                     display: "flex",
                     alignItems: "center",
                     "& > *": {
                       marginRight: "1vw"
                     }
                   }])}>
                <InputCheckbox label={""}
                               value={customSymbol.legend}
                               onUpdate={( value: boolean ) => {
                                 props.onUpdateTempModel( ( draft ) => {
                                   const customSymbolElem = [...draft.predefinedSymbols, ...draft.customSymbols].find(
                                     cS => cS.id === customSymbol.id );
                                   customSymbolElem.legend = value;
                                 } )
                               }
                               }/>
                <TextInput value={customSymbol.legendLabel || customSymbol.title}
                           width={"10vw"}
                           onUpdate={( value: string ) => {
                             props.onUpdateTempModel( ( draft ) => {
                               const customSymbolElem = [...draft.predefinedSymbols, ...draft.customSymbols].find(
                                 cS => cS.id === customSymbol.id );
                               customSymbolElem.legendLabel = value;
                             } )
                           }}
                />
              </div>
            </div>
          )
        }
      )}
    </div>
  )
};

export { TabLegend };