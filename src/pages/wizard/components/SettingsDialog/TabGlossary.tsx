/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { useState } from "react";
import { ModelUpdater } from "../useModelState";
import { Model } from "../../../../entities/Model";
import { ButtonContainer } from "../../../../components/layout/ButtonContainer";
import { Button } from "../../../../components/Button";
import { v4 as uuidv4 } from 'uuid';
import { SeperatorHorizontal } from "../../../../components/input/SeperatorHorizontal";
import { Container } from "../../../../components/layout/Container";
import { TextInput } from "../../../../components/input/InputText";
import { GlossarItem } from '../../../../entities/GlossarItem';
import { RichTextEditor } from "../../../../components/input/RichTextEditor";
import { TypoLabel } from "../../../../components/typo/TypoLabel";
import { Icon } from '../../../../components/Icon';
import { useTheme } from "emotion-theming";
import { InputColorContainer } from "../../../../components/layout/InputColorContainer";
import { InputColor } from "../../../../components/input/InputColor";

export interface Props {
  modelState: Model;
  onUpdateTempModel: ( update: ModelUpdater ) => void;
}

const TabGlossary: React.FC<Props> = props => {

  const theme = useTheme<any>();

  const [isHovering, setIsHovering] = useState<string | null>( null );

  return (
    <div>
      <TypoHeadline size={"l"} margin={true}>
        Glossar
      </TypoHeadline>

      <TypoHeadline size={"s"} margin={true}>
        Farbe
      </TypoHeadline>
      <InputColorContainer>
        <InputColor label={"Keyword"}
                    value={props.modelState.colors.glossarKeyword}
                    onUpdate={( value ) => {
                      props.onUpdateTempModel( ( draft ) => {
                        draft.colors.glossarKeyword = value
                      } );
                    }}/>
      </InputColorContainer>

      {props.modelState.glossar !== undefined && props.modelState.glossar.map(
        ( glossarItem: GlossarItem, index: number ) => {

          return (
            <div key={glossarItem.id}>
              <TypoHeadline size={'l'}>
                #{index + 1}
              </TypoHeadline>
              <Container>
                <div>
                  <TextInput label={"Titel"}
                             value={glossarItem.title || ""}
                             onUpdate={( value: string ) => {
                               props.onUpdateTempModel( ( draft ) => {
                                 const glossaryElem = draft.glossar.find(
                                   ( gI: GlossarItem ) => gI.id === glossarItem.id );
                                 glossaryElem.title = value;
                               } )
                             }}
                  />
                  <div css={theme => ([{
                    margin: "0.6vw 0"
                  }])}>

                    <TypoLabel size={"xs"} margin={true}>Schlüsselwörter</TypoLabel>

                    <div css={theme => ([{
                      display: "flex",
                      flexDirection: "column"
                    }])}>
                      {glossarItem.keywords.map( ( keyword: string, index: number ) => {

                        return (
                          <div key={keyword + index}
                               css={theme => ([{
                                 display: "flex",
                                 justifyContent: "space-between",
                                 alignItems: "center",
                                 height: theme.INPUT.HEIGHT,
                                 borderRadius: theme.INPUT.BORDER_RADIUS,
                                 borderColor: theme.INPUT.BORDER_COLOR,
                                 borderWidth: theme.INPUT.BORDER_WIDTH,
                                 borderStyle: theme.INPUT.BORDER_STYLE,
                                 padding: theme.INPUT.PADDING,
                                 "&:nth-of-type(2n)": {
                                   backgroundColor: theme.COLORS.HEADER_BACKGROUND,
                                 },
                                 "&:not(:first-of-type):not(:last-of-type)": {
                                   borderTop: "none",
                                   borderBottom: "none",
                                   borderRadius: 0
                                 },
                                 "&:first-of-type": {
                                   borderRadius: glossarItem.keywords.length > 1 && theme.INPUT.BORDER_RADIUS + " "
                                     + theme.INPUT.BORDER_RADIUS + " 0 0",
                                   borderBottom: glossarItem.keywords.length > 1 && "none",
                                 },
                                 "&:last-of-type": {
                                   borderRadius: glossarItem.keywords.length > 1 && "0 0 " + theme.INPUT.BORDER_RADIUS
                                     + " " + theme.INPUT.BORDER_RADIUS,
                                   borderTop: glossarItem.keywords.length > 1 && "none"
                                 },
                                 "&:hover": {
                                   cursor: isHovering === (glossarItem.id + index.toString()) ? "pointer" : "unset"
                                 }
                               }])}
                          >
                            <div css={theme => ([{
                              color: isHovering === (glossarItem.id + index.toString()) ?
                                theme.COLORS.DANGER :
                                theme.COLORS.TEXT,
                              transition: "color 0.5s ease-in-out",
                              fontSize: "0.6vw",
                              fontFamily: "Helvetica",
                              marginRight: "1vw"
                            }])}
                            >
                              {keyword}
                            </div>
                            <Icon name={"trash"} color={isHovering === (glossarItem.id + index.toString()) ?
                              theme.COLORS.DANGER :
                              theme.COLORS.TEXT}
                                  size={"s"}
                                  onClick={() => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const glossaryElem = draft.glossar.find(
                                        ( gI: GlossarItem ) => gI.id === glossarItem.id );
                                      const keywordIndex = glossaryElem.keywords.indexOf( keyword );
                                      if( keywordIndex > -1 ) {
                                        glossaryElem.keywords.splice( keywordIndex, 1 );
                                      }
                                    } )
                                  }}
                                  onMouseEnter={() => {
                                    setIsHovering( glossarItem.id + index.toString() );
                                  }}
                                  onMouseLeave={() => {
                                    setIsHovering( null );
                                  }}
                            />
                          </div>
                        )
                      } )}
                    </div>

                    <div css={theme => ([{
                      display: "flex",
                      alignItems: "center"
                    }])}>
                      <TextInput value={""}
                                 addButton={true}
                                 onUpdate={( value: string ) => {
                                   props.onUpdateTempModel( ( draft ) => {
                                     const glossaryElem = draft.glossar.find(
                                       ( gI: GlossarItem ) => gI.id === glossarItem.id );
                                     if( !glossaryElem.keywords.includes( value ) ) {
                                       glossaryElem.keywords.push( value );
                                     }
                                   } )
                                 }}
                      />

                    </div>


                  </div>
                </div>
                <div>
                  <RichTextEditor label={"Text"}
                                  value={glossarItem.content || ""}
                                  onChange={( value: string ) => {
                                    props.onUpdateTempModel( ( draft ) => {
                                      const glossaryElem = draft.glossar.find(
                                        ( gI: GlossarItem ) => gI.id === glossarItem.id );
                                      glossaryElem.content = value;
                                    } )
                                  }}
                  />
                </div>
              </Container>
              <div css={theme => ([{
                display: "flex"
              }])}>
                <Button type={"danger"} onClick={() => {
                  props.onUpdateTempModel( ( draft ) => {
                    const glossaryElem = draft.glossar.find( gI => gI.id === glossarItem.id );
                    const glossarElemIndex = draft.glossar.indexOf( glossaryElem );
                    if( glossarElemIndex > -1 ) {
                      draft.glossar.splice( glossarElemIndex, 1 );
                    }
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
            draft.glossar.push(
              {
                id: uuidv4(),
                keywords: [],
                title: "",
                content: ""
              }
            )
          } );
        }}>Eintrag hinzufügen
        </Button>
      </ButtonContainer>

    </div>
  )
};

export { TabGlossary };