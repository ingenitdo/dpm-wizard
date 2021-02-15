/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { ModelUpdater } from "../useModelState";
import { Model } from "../../../../entities/Model";
import { IconPicker } from "../../../../components/icon_picker/IconPicker";
import { InputSelect } from "../../../../components/input/InputSelect";
import { ButtonContainer } from "../../../../components/layout/ButtonContainer";
import { Button } from "../../../../components/Button";
import { IconType } from "../../../../entities/IconType";
import { CustomSymbol } from "../../../../entities/CustomSymbol";
import { CustomSymbolPosition } from "../../../../entities/CustomSymbolPosition";
import { v4 as uuidv4 } from 'uuid';
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";
import { Container } from "../../../../components/layout/Container";
import { TextInput } from "../../../../components/input/InputText";
import { InputRadioBox } from "../../../../components/input/InputRadioBox";
import { InputRadioBoxContainer } from "../../../../components/layout/InputRadioBoxContainer";
import { InputColorContainer } from "../../../../components/layout/InputColorContainer";
import { InputColor } from "../../../../components/input/InputColor";

export interface Props {
  modelState: Model;
  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const TabItemSymbols: React.FC<Props> = props => {

  return (
    <div>
      <TypoHeadline size={"l"} margin={true}>
        Symbole
      </TypoHeadline>

      <TypoHeadline size={"s"} margin={true}>
        Einblendung
      </TypoHeadline>
      <InputColorContainer>
        <InputColor label={"Hintergrund"}
                    value={props.modelState.colors.overlayBackground}
                    onUpdate={( value ) => {
                      props.onUpdateTempModel( ( draft ) => {
                        draft.colors.overlayBackground = value
                      } );
                    }}/>
        <InputColor label={"Text"}
                    value={props.modelState.colors.overlayLabel}
                    onUpdate={( value ) => {
                      props.onUpdateTempModel( ( draft ) => {
                        draft.colors.overlayLabel = value
                      } );
                    }}/>
      </InputColorContainer>

      {props.modelState.customSymbols !== undefined && props.modelState.customSymbols.map(
        ( customSymbol: CustomSymbol, index: number ) => {

          return (
            <div key={customSymbol.id}>
              <TypoHeadline size={'l'}>
                #{index + 1}
              </TypoHeadline>
              <Container>
                <div>
                  <TextInput label={"Titel"}
                             value={customSymbol.title || ""}
                             onUpdate={( value ) => {
                               props.onUpdateTempModel( ( draft ) => {
                                 const cs = draft.customSymbols.find( cS => cS.id === customSymbol.id );
                                 cs.title = value;
                               } )
                             }}
                  />
                  <IconPicker label={"Icon"}
                              value={customSymbol.icon}
                              onChange={( icon: IconType ) => {
                                props.onUpdateTempModel( ( draft ) => {
                                  const cs = draft.customSymbols.find( cS => cS.id === customSymbol.id );
                                  cs.icon = icon;
                                } )
                              }}
                  />
                </div>
                <div>
                  <InputSelect label={"Position"}
                               value={customSymbol.position.toString()}
                               options={[
                                 { value: CustomSymbolPosition.TOP_RIGHT.toString(), label: "Oben-Rechts" },
                                 { value: CustomSymbolPosition.TOP_LEFT.toString(), label: "Oben-Links" },
                                 { value: CustomSymbolPosition.BOTTOM_RIGHT.toString(), label: "Unten-Rechts" },
                                 { value: CustomSymbolPosition.BOTTOM_LEFT.toString(), label: "Unten-Links" },
                               ]}
                               onUpdate={( value: string ) => {
                                 props.onUpdateTempModel( ( draft ) => {
                                   const cs = draft.customSymbols.find( cS => cS.id === customSymbol.id );
                                   cs.position = Number(value);
                                 } )
                               }}
                  />
                  <InputRadioBoxContainer label={"Typ"}>
                    <InputRadioBox label={"Dialog"}
                                   value={customSymbol.isDialog}
                                   onUpdate={( val ) => {
                                     props.onUpdateTempModel( ( draft ) => {
                                       const cs = draft.customSymbols.find( cS => cS.id === customSymbol.id );
                                       cs.isDialog = true;
                                     } )
                                   }}
                    />
                    <InputRadioBox label={"Einblendung"}
                                   value={!customSymbol.isDialog}
                                   onUpdate={( val ) => {
                                     props.onUpdateTempModel( ( draft ) => {
                                       const cs = draft.customSymbols.find( cS => cS.id === customSymbol.id );
                                       cs.isDialog = false;
                                     } )
                                   }}
                    />

                  </InputRadioBoxContainer>
                </div>
              </Container>
              <div css={theme => ([{
                display: "flex"
              }])}>
                <Button type={"danger"} onClick={() => {
                  props.onUpdateTempModel( ( draft ) => {
                    const customSymbolElem = draft.customSymbols.find( cT => cT.id === customSymbol.id );
                    const customSymbolElemIndex = draft.customSymbols.indexOf( customSymbolElem );
                    if( customSymbolElemIndex > -1 ) {
                      draft.customSymbols.splice( customSymbolElemIndex, 1 );
                    }

                    draft.cases.map( c => {
                      [...c.actions, ...c.dataSources, ...c.dataPurposes].map( elem => {
                        const elemItemSymbols = elem.itemSymbols && elem.itemSymbols.filter(
                          iS => iS.customSymbolId === customSymbol.id );
                        elemItemSymbols && elemItemSymbols.map( iS => {
                          const elemItemSymbolIndex = elem.itemSymbols.indexOf( iS );
                          if( elemItemSymbolIndex > -1 ) {
                            elem.itemSymbols.splice( elemItemSymbolIndex, 1 );
                          }
                        } );
                      } );
                    } )
                  } )
                }}>
                  Löschen
                </Button>
              </div>
              <SeperatorHorizontal/>
            </div>
          )
        } )}

      <ButtonContainer>
        <Button onClick={() => {
          props.onUpdateTempModel( ( draft ) => {
            draft.customSymbols.push(
              {
                id: uuidv4(),
                title: "Neues Symbol",
                icon: {
                  id: "info",
                  dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjU0My4wNTlweCIgaGVpZ2h0PSI1NDMuMDU5cHgiIHZpZXdCb3g9IjAgMCA1NDMuMDU5IDU0My4wNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU0My4wNTkgNTQzLjA1OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNDYuNDM4LDQ2OC4xMzdoLTE4LjcyN1YxNzEuMDZjMC01LjA2Mi0xLjg1NS05LjQ1Ni01LjU1Ny0xMy4xN2MtMy43MDktMy43MDMtOC4wOTgtNS41NTctMTMuMTY0LTUuNTU3SDE5Ni42Mg0KCQkJYy01LjA3MywwLTkuNDYxLDEuODU0LTEzLjE3LDUuNTU3Yy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwMy01LjU2MywxMy4xN3YzNy40NTRjMCw1LjA3NCwxLjg1NCw5LjQ2Miw1LjU2MywxMy4xNw0KCQkJYzMuNzAzLDMuNzE1LDguMDkxLDUuNTY5LDEzLjE3LDUuNTY5aDE4LjcyN3YyNDAuODgzSDE5Ni42MmMtNS4wNzMsMC05LjQ2MSwxLjg1NS0xMy4xNyw1LjU1Nw0KCQkJYy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwNC01LjU2MywxMy4xN3YzNy40NTVjMCw1LjA3NCwxLjg1NCw5LjQ2MSw1LjU2MywxMy4xN2MzLjcwMywzLjcxNSw4LjA5MSw1LjU3LDEzLjE3LDUuNTdoMTQ5LjgxNw0KCQkJYzUuMDc0LDAsOS40NjEtMS44NTUsMTMuMTctNS41N2MzLjcwMy0zLjcwMSw1LjU2NC04LjA5LDUuNTY0LTEzLjE3di0zNy40NTVjMC01LjA2MS0xLjg1NS05LjQ1NS01LjU2NC0xMy4xNw0KCQkJQzM1NS44OTgsNDY5Ljk4NCwzNTEuNTA2LDQ2OC4xMzcsMzQ2LjQzOCw0NjguMTM3eiIvPg0KCQk8Y2lyY2xlIGN4PSIyNjcuNjczIiBjeT0iNjIuOTIiIHI9IjYyLjkyIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                },
                position: CustomSymbolPosition.TOP_RIGHT,
                isDialog: true,
                legend: false,
                legendLabel: ""
              }
            )
          } );
        }}>Symbol hinzufügen
        </Button>
      </ButtonContainer>

    </div>
  )
};

export { TabItemSymbols };