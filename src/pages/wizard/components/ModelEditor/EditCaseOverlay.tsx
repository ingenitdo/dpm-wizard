/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useState } from "react";
import { ModelUpdater } from "../useModelState";
import { dropShadow } from "../../../../styles/effects";
import { getAbsoluteValue } from "../../../../viewer/utils/LayoutCalc";
import {
  ACTION_PADDING_LEFT,
  ACTION_PADDING_RIGHT,
  CASE_MARGIN_BOTTOM,
  DATASOURCE_AND_DATAPURPOSE_LEFT_OR_RIGHT,
  DATASOURCE_AND_DATAPURPOSE_WIDTH,
  PARTICIPANTS_SIZE
} from "../../../../viewer/Constants";
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from "emotion-theming";
import { SortButton } from "./widgets/SortButton";
import { EditButton } from "./widgets/EditButton";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { ProcessedCase } from "../../../../entities/ProcessedCase";
import { ProcessedParticipant } from "../../../../entities/ProcessedParticipant";

interface Props {
  x: number;
  y: number;

  width: number;
  height: number;

  canvasWidth: number;

  processedCase: ProcessedCase;
  processedParticipants: ProcessedParticipant[];

  showDetailedView: boolean;

  isFirst: boolean;
  isLast: boolean;
  onUpdateModel: ( updater: ModelUpdater ) => void;
  onEditCase: ( processedCase: ProcessedCase ) => void;
}

const EditCaseOverlay: React.FunctionComponent<Props> = props => {

  const theme = useTheme<any>();

  const [isHovering, setIsHovering] = useState<boolean>( false );

  const buttonSize = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.EDIT_BUTTON_SIZE );

  const addAction = ( processedParticipant?: ProcessedParticipant ) => {
    props.onUpdateModel( ( draft ) => {
      const caseItem = draft.cases.find( c => c.id === props.processedCase.id );

      const processDataPurposesPositionEnd = caseItem.actions.map( ( d ) => {
        return d.position.end
      } );
      const newPosition = (processDataPurposesPositionEnd.length > 0 &&
        processDataPurposesPositionEnd.reduce( ( acc, value ) => Math.max( acc, value ), 0 ) + 1) || 0;

      const boxTypeId = draft.boxTypes[0].id;

      caseItem.actions.push(
        {
          id: uuidv4(),
          typeId: boxTypeId,
          label: [
            "Neuer Prozessschritt"
          ],
          position: {
            "start": newPosition,
            "end": newPosition
          },
          participantID: processedParticipant ? processedParticipant.participant.id : null
        }
      )
    } )
  };

  const renderAddAction = ( x: number, y: number, width: number, processedParticipant?: ProcessedParticipant ) => {
    return (
      <div key={Math.random()}
           css={theme => ([{
             position: "absolute",
             top: y,
             left: x,
             height: theme.DIMENSIONS.ADD_BUTTON_HEIGHT,
             width: width,
             backgroundColor: theme.COLORS.EDIT.PRIMARY.DEFAULT,
             borderRadius: "25px",
             transition: "background-color 0.5s ease-in-out",
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             ":hover": {
               cursor: "pointer"
             }
           }, dropShadow])}

           onClick={() => {
             processedParticipant ? addAction( processedParticipant ) : addAction()
           }}
      >
        <TypoHeadline size={"s"} color={theme.COLORS.EDIT.SECONDARY.DEFAULT} center>
          Prozessschritt hinzufügen
        </TypoHeadline>
      </div>
    )
  };
  const renderDataSourceAddButton = ( x: number, y: number, width: number, height: number, label: string,
    onClick: () => void ) => {

    return (
      <div css={theme => ([{
        position: "absolute",
        top: y,
        left: x,
        width: width,
        height: theme.DIMENSIONS.ADD_BUTTON_HEIGHT,
        backgroundColor: theme.COLORS.EDIT.PRIMARY.DEFAULT,
        borderRadius: "25px",
        transition: "background-color 0.5s ease-in-out",
        ":hover": {
          cursor: "pointer"
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, dropShadow])}

           onClick={onClick}
      >
        <TypoHeadline size={"s"} color={theme.COLORS.EDIT.SECONDARY.DEFAULT}>
          {label}
        </TypoHeadline>
      </div>
    )
  };
  return (
    <div css={theme => ([{
      position: "absolute",
      top: props.y,
      left: 0,
      width: "100%",
      height: props.height,
      opacity: isHovering ? 1 : 0,
      transition: "opacity 0.5s ease-in-out"
    }])}
         onMouseEnter={() => {
           setIsHovering( true )
         }}
         onMouseOver={() => {
           setIsHovering( true )
         }}
         onMouseLeave={() => {
           setIsHovering( false )
         }}
    >
      <EditButton x={props.x + props.width + 5}
                  y={0}
                  size={buttonSize}
                  onClick={() => {
                    props.onEditCase( props.processedCase );
                  }}
      />

      <SortButton x={props.x + props.width + 5}
                  y={buttonSize * 1.2}
                  canvasWidth={props.canvasWidth}
                  isFirst={props.isFirst}
                  isLast={props.isLast}
                  onClickUp={() => {
                    if( !props.isFirst ) {
                      props.onUpdateModel( ( draft ) => {
                        const item = draft.cases.find( c => c.id === props.processedCase.id );
                        const num = draft.cases.indexOf( item );
                        draft.cases.splice( num - 1, 0, draft.cases.splice( num, 1 )[0] );
                      } )
                    }
                  }

                  } onClickDown={() => {
        if( !props.isLast ) {
          props.onUpdateModel( ( draft ) => {
            const item = draft.cases.find( c => c.id === props.processedCase.id );
            const num = draft.cases.indexOf( item );
            draft.cases.splice( num + 1, 0, draft.cases.splice( num, 1 )[0] );
          } )
        }
      }}/>


      {renderDataSourceAddButton( props.x + getAbsoluteValue( props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_LEFT_OR_RIGHT ),
        props.height - getAbsoluteValue( props.width, 4 ) - getAbsoluteValue( props.width, CASE_MARGIN_BOTTOM ),
        getAbsoluteValue( props.width, DATASOURCE_AND_DATAPURPOSE_WIDTH ),
        getAbsoluteValue( props.width, 4 ),
        "Datenkategorie hinzufügen",
        () => {
          props.onUpdateModel( ( draft ) => {
            const item = draft.cases.find( c => c.id === props.processedCase.id );
            const index = draft.cases.indexOf( item );

            const dataSourcesPositionEnd = draft.cases[index].dataSources.map( ( d ) => {
              return d.position.end
            } );
            const newPosition = (dataSourcesPositionEnd.length > 0 &&
              dataSourcesPositionEnd.reduce( ( acc, value ) => Math.max( acc, value ), 0 ) + 1) || 0;

            const boxTypeId = draft.boxTypes[0].id;

            draft.cases[index].dataSources.push(
              {
                id: uuidv4(),
                typeId: boxTypeId,
                label: [
                  "Neue Datenkategorie"
                ],
                position: {
                  "start": newPosition,
                  "end": newPosition
                }
              }
            )
          } )
        }
      )}

      {props.showDetailedView && props.processedParticipants.map( ( processedParticipant: ProcessedParticipant, index: number ) => {

        const y = props.height - getAbsoluteValue( props.width, 4 ) - getAbsoluteValue( props.width,
          CASE_MARGIN_BOTTOM );
        const participantWidth = props.canvasWidth / 100 * PARTICIPANTS_SIZE / props.processedParticipants.length;
        const x = props.x + participantWidth*0.2 + participantWidth * index + (props.canvasWidth / 100 * PARTICIPANTS_SIZE/2);
        const width = participantWidth*0.6;

        return renderAddAction( x, y, width, processedParticipant );
      } )}

      {!props.showDetailedView && (
        renderAddAction( props.x + props.width * 0.3,
          props.height - getAbsoluteValue( props.width, 4 ) - getAbsoluteValue( props.width, CASE_MARGIN_BOTTOM ),
          getAbsoluteValue( props.width, (PARTICIPANTS_SIZE - 10) ), null )
      )}


      {renderDataSourceAddButton(
        props.x + props.canvasWidth - getAbsoluteValue( props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_LEFT_OR_RIGHT ) - getAbsoluteValue( props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_WIDTH ),
        props.height - getAbsoluteValue( props.width, 4 ) - getAbsoluteValue( props.width, CASE_MARGIN_BOTTOM ),
        getAbsoluteValue( props.width, DATASOURCE_AND_DATAPURPOSE_WIDTH ),
        getAbsoluteValue( props.width, 4 ),
        "Verwendungszweck hinzufügen",
        () => {
          props.onUpdateModel( ( draft ) => {
            const item = draft.cases.find( c => c.id === props.processedCase.id );
            const index = draft.cases.indexOf( item );

            const processDataPurposesPositionEnd = draft.cases[index].dataPurposes.map( ( d ) => {
              return d.position.end
            } );
            const newPosition = (processDataPurposesPositionEnd.length > 0 &&
              processDataPurposesPositionEnd.reduce( ( acc, value ) => Math.max( acc, value ), 0 ) + 1) || 0;

            const boxTypeId = draft.boxTypes[0].id;

            draft.cases[index].dataPurposes.push(
              {
                id: uuidv4(),
                typeId: boxTypeId,
                label: [
                  "Neuer Verwendungszweck"
                ],
                position: {
                  "start": newPosition,
                  "end": newPosition
                }
              }
            )
          } )
        }
      )}

    </div>
  )
};

export { EditCaseOverlay };
