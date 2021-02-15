/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { createRef, useEffect, useState } from "react";
import {
  CASE_HEADER_HEIGHT,
  CASE_HEADER_LABEL_SIZE,
  CASE_MARGIN_BOTTOM,
  HEADER_MARGIN_BOTTOM,
  HEADER_MARGIN_TOP,
  HEADER_OFFSET
} from "../../../../viewer/Constants";
import {
  getStringArrayByWidth,
  processCases,
  processParticipants
} from "../../../../viewer/utils/Processing";
import { getAbsoluteValue } from "../../../../viewer/utils/LayoutCalc";
import { EditCaseOverlay } from "./EditCaseOverlay";
import { ModelUpdater } from "../useModelState";
import { EditDataSourceOverlay } from "./EditDataSourceOverlay";
import { EditCaseDialog } from "./EditCaseDialog";
import { EditDataSourceDialog } from "./EditDataSourceDialog";
import { EditDataPurposeOverlay } from "./EditDataPurposeOverlay";
import { EditDataPurposeDialog } from "./EditDataPurposeDialog";
import { EditActionOverlay } from "./EditActionOverlay";
import { EditActionDialog } from "./EditActionDialog";
import { useScrollbarWidth } from "react-use";
import { EditConnectionOverlay } from './EditConnectionOverlay';
import { Model } from "../../../../entities/Model";
import { dropShadow } from "../../../../styles/effects";
import { TypoHeadline } from "../../../../components/typo/TypoHeadline";
import { v4 as uuidv4 } from 'uuid';
import { Connection } from "../../../../entities/Connection";
import { EditConnectionDialog } from "./EditConnectionDialog";
import { DeleteConfirmationDialog } from "./DeleteConfirmationDialog";
import { HeaderOverlay } from "./HeaderOverlay";
import _ = require("lodash");
import { EditHeaderDialog } from "./EditHeaderDialog";
import { useTheme } from "emotion-theming";
import { ItemSymbol } from "../../../../entities/ItemSymbol";
import { IconType } from "../../../../entities/IconType";
import { TutorialStep } from "../../../../entities/TutorialStep";
import { ParticipantOverlay } from "./ParticipantOverlay";
import { EditParticipantDialog } from "./EditParticipantDialog";
import { ProcessedCase } from "../../../../entities/ProcessedCase";
import { ProcessedDataSource } from "../../../../entities/ProcessedDataSource";
import { ProcessedDataPurpose } from "../../../../entities/ProcessedDataPurpose";
import { ProcessedAction } from "../../../../entities/ProcessedAction";
import { ProcessedConnection } from "../../../../entities/ProcessedConnection";
import { ProcessedParticipant } from "../../../../entities/ProcessedParticipant";
import { Case } from "../../../../entities/Case";
import { processGlossar } from "../../../../viewer/utils/GlossarProcessing";

export interface Props {
  detailedModel: any;
  simpleModel: any;
  model: Model;
  canvasPadding: number;
  canvasWidth: number;
  showDetailedModel: boolean;
  onUpdateModel: ( updater: ModelUpdater ) => void;
}

const ModelEditor: React.FC<Props> = props => {

  const scrollbarWidth = useScrollbarWidth();

  const theme = useTheme<any>();

  const [caseToEdit, setCaseToEdit] = useState<ProcessedCase | null>( null );
  const [dataSourceToEdit, setDataSourceToEdit] = useState<{ dataSource: ProcessedDataSource, case: ProcessedCase } | null>(
    null );
  const [dataPurposeToEdit, setDataPurposeToEdit] = useState<{ dataPurpose: ProcessedDataPurpose, case: ProcessedCase } | null>(
    null );
  const [actionToEdit, setActionToEdit] = useState<{ action: ProcessedAction, case: ProcessedCase } | null>( null );
  const [connectionToEdit, setConnectionToEdit] = useState<{ connection: ProcessedConnection, case: ProcessedCase } | null>(
    null );
  const [headerToEdit, setHeaderToEdit] = useState<number | null>( null );
  const [participantToEdit, setParticipantToEdit] = useState<number | null>( null );

  const [deleteItem, setDeleteItem] = useState<ProcessedDataSource | ProcessedAction | ProcessedDataPurpose | ProcessedConnection | ProcessedCase | null>(
    null );

  const ref = createRef<HTMLDivElement>();
  const [width, setWidth] = useState<number>( 0 );
  const [x, setX] = useState<number>( 0 );
  const [y, setY] = useState<number>( 0 );
  const [baseYScrollOffset, setBaseYScrollOffset] = useState<number>( 0 );

  useEffect( () => {
    const rect = ref.current;
    setWidth( rect.getBoundingClientRect().width );
    setX( rect.getBoundingClientRect().x );
    setY( rect.getBoundingClientRect().y );
    setBaseYScrollOffset( window.scrollY );
    setFactrorizedCanvasWidth( rect.getBoundingClientRect().width - props.canvasPadding * 2 - scrollbarWidth );
  }, [ref] );

  useEffect( () => {
    const rect = ref.current;

    const updateRef = () => {
      setWidth( rect.getBoundingClientRect().width );
      setX( rect.getBoundingClientRect().x );
      setY( rect.getBoundingClientRect().y );
      setBaseYScrollOffset( window.scrollY );
      setFactrorizedCanvasWidth( rect.getBoundingClientRect().width - props.canvasPadding * 2 - scrollbarWidth );
    };

    window.addEventListener( 'resize', updateRef );
    window.addEventListener( 'scroll', updateRef );

    return () => {
      window.removeEventListener( 'resize', updateRef );
      window.removeEventListener( 'scroll', updateRef );
    };
  }, [ref.current] );

  const [openCases, setOpenCases] = useState<string[]>( [] );

  const [actualHeight, setActualHeight] = useState<number>( 0 );

  const [factorizedCanvasWidth, setFactrorizedCanvasWidth] = useState<number>( props.canvasPadding * 2 );

  const headerPadding = getAbsoluteValue( factorizedCanvasWidth, HEADER_MARGIN_TOP )
    + getAbsoluteValue( factorizedCanvasWidth, HEADER_MARGIN_BOTTOM );

  let { language, title, subtitle, participants, connectionTypes, boxTypes, cases, sourceInformation, revisionHistory, glossar, isDialogFullsize, isDetailedIcons, fixedLabels, colors }
    = (props.showDetailedModel ? props.detailedModel : props.simpleModel);

  let processedParticipants = processParticipants( participants, factorizedCanvasWidth, actualHeight );

  let processedCases = processCases( props.showDetailedModel, cases, factorizedCanvasWidth, actualHeight,
    processedParticipants, openCases,
    connectionTypes, false, boxTypes );

  useEffect( () => {
    const newHeight = getAbsoluteValue( width, HEADER_OFFSET )
      + processedCases.map( item => item.height )
        .reduce( ( acc, current ) => acc + current )
      + (processedCases.length * getAbsoluteValue( width, CASE_MARGIN_BOTTOM ));

    setActualHeight( newHeight );
  }, [processedCases] );

  useEffect( () => {
    setOpenCases( cases.map( ( c: any ) => c.id ) );
  }, [cases] );


  const deleteTutorialSteps = (draft: Model, itemId: string) => {
    const affectedTutorialSteps = draft.tutorial.steps.filter((tS: TutorialStep) => tS.itemId === itemId);
    affectedTutorialSteps.map((tS: TutorialStep) => {
      const tutorialStepIndex = draft.tutorial.steps.indexOf(tS);
      if( tutorialStepIndex > -1) {
        draft.tutorial.steps.splice(tutorialStepIndex, 1);
      }
    })
  }
  const deleteCase = () => {
    props.onUpdateModel( ( draft ) => {
      const caseElem = draft.cases.find( c => c.id === caseToEdit.id );

      const caseElemIndex = draft.cases.indexOf( caseElem );

      // resolve constraints


      if( caseElemIndex > -1 ) {
        draft.cases.splice( caseElemIndex, 1 );
      }

    } );
    setCaseToEdit( null );
  };
  const deleteDataSource = () => {
    props.onUpdateModel( ( draft ) => {
      const caseElem = draft.cases.find( c => c.id === dataSourceToEdit.case.id );
      const dataSourceElem = caseElem.dataSources.find(
        d => d.id === dataSourceToEdit.dataSource.dataSource.id );
      const dataSourceElemIndex = caseElem.dataSources.indexOf( dataSourceElem );

      // resolve constraints
      const affectedConnections = caseElem.connections.filter(
        ( c: Connection ) => c.destination === dataSourceToEdit.dataSource.dataSource.id
          || c.source === dataSourceToEdit.dataSource.dataSource.id );
      affectedConnections.map( ( con: Connection ) => {
        const conIndex = caseElem.connections.indexOf( con );
        if( conIndex > -1 ) {
          caseElem.connections.splice( conIndex, 1 );
        }
      } );

      deleteTutorialSteps(draft, dataSourceElem.id);

      // delete item
      if( dataSourceElemIndex > -1 ) {
        caseElem.dataSources.splice( dataSourceElemIndex, 1 );
      }


    } );
    setDataSourceToEdit( null );
  };
  const deleteAction = () => {
    props.onUpdateModel( ( draft ) => {
      const caseElem = draft.cases.find( c => c.id === actionToEdit.case.id );
      const actionElem = caseElem.actions.find(
        c => c.id === actionToEdit.action.action.id );
      const actionElemIndex = caseElem.actions.indexOf( actionElem );

      // resolve constraints
      const affectedConnections = caseElem.connections.filter(
        ( c: Connection ) => c.destination === actionToEdit.action.action.id
          || c.source === actionToEdit.action.action.id );
      affectedConnections.map( ( con: Connection ) => {
        const conIndex = caseElem.connections.indexOf( con );
        if( conIndex > -1 ) {
          caseElem.connections.splice( conIndex, 1 );
        }
      } );

      deleteTutorialSteps(draft, actionElem.id);

      if( actionElemIndex > -1 ) {
        caseElem.actions.splice( actionElemIndex, 1 );
      }
    } );
    setActionToEdit( null );
  };
  const deleteDataPurpose = () => {
    props.onUpdateModel( ( draft ) => {
      const caseElem = draft.cases.find( c => c.id === dataPurposeToEdit.case.id );
      const dataPurposeElem = caseElem.dataPurposes.find(
        c => c.id === dataPurposeToEdit.dataPurpose.dataPurpose.id );
      const dataPurposeElemIndex = caseElem.dataPurposes.indexOf( dataPurposeElem );

      // resolve constraints
      const affectedConnections = caseElem.connections.filter(
        ( c: Connection ) => c.destination
          === dataPurposeToEdit.dataPurpose.dataPurpose.id
          || c.source === dataPurposeToEdit.dataPurpose.dataPurpose.id );
      affectedConnections.map( ( con: Connection ) => {
        const conIndex = caseElem.connections.indexOf( con );
        if( conIndex > -1 ) {
          caseElem.connections.splice( conIndex, 1 );
        }
      } );

      deleteTutorialSteps(draft, dataPurposeElem.id);

      if( dataPurposeElemIndex > -1 ) {
        caseElem.dataPurposes.splice( dataPurposeElemIndex, 1 );
      }
    } );
    setDataPurposeToEdit( null );
  };
  const deleteConnection = () => {
    props.onUpdateModel( ( draft ) => {
      const caseElem = draft.cases.find( c => c.id === connectionToEdit.case.id );
      const connectionElem = caseElem.connections.find(
        c => c.id === connectionToEdit.connection.connection.id );
      const connectionElemIndex = caseElem.connections.indexOf( connectionElem );

      //resolve Contraints
      deleteTutorialSteps(draft, connectionElem.id);

      if( connectionElemIndex > -1 ) {
        caseElem.connections.splice( connectionElemIndex, 1 );
      }
    } );
    setConnectionToEdit( null );
  };

  const updateTutorial = ( draft: Model, tutorialStep: TutorialStep ) => {
    if(tutorialStep) {
      const tutorialStepElem = draft.tutorial.steps.find(
        ( tS: TutorialStep ) => tS.id === tutorialStep.id )

      if( tutorialStepElem ) {
        tutorialStepElem.isActive = tutorialStep.isActive;
        tutorialStepElem.title = tutorialStep.title;
        tutorialStepElem.text = tutorialStep.text;
      }
      else {
        draft.tutorial.steps.push( tutorialStep );
      }
    }
  }

  return (
    <div css={theme => ([{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }])}
         ref={ref}>

      {processedCases.map( ( processedCase: ProcessedCase, index: number ) => {
        return (
          <EditCaseOverlay key={processedCase.id}
                           x={processedCase.x + props.canvasPadding}
                           y={processedCase.y + headerPadding + props.canvasPadding}
                           width={processedCase.width}
                           height={processedCase.height}
                           canvasWidth={props.canvasWidth}
                           processedCase={processedCase}
                           processedParticipants={processedParticipants}
                           showDetailedView={props.showDetailedModel}
                           isFirst={index === 0}
                           isLast={index === processedCases.length - 1}
                           onUpdateModel={props.onUpdateModel}
                           onEditCase={( processedCase: ProcessedCase ) => {
                             setCaseToEdit( processedCase );
                           }}

          />
        )
      } )}

      {processedCases.map( ( processedCase: ProcessedCase, caseIndex: number ) => {

        let dataSourceOverlay = processedCase.dataSources.map(
          ( processedDataSource: ProcessedDataSource, index: number ) => {
            return (
              <EditDataSourceOverlay key={processedDataSource.dataSource.id}
                                     canvasX={x}
                                     canvasY={y}
                                     x={processedDataSource.x + props.canvasPadding}
                                     y={processedDataSource.y + headerPadding + props.canvasPadding}
                                     width={processedDataSource.width}
                                     height={processedDataSource.height}
                                     isFirst={index === 0}
                                     isLast={index === processedCase.dataSources.length - 1}
                                     processedCase={processedCase}
                                     processedDataSource={processedDataSource}
                                     onUpdateModel={props.onUpdateModel}
                                     onEditDataSource={( pDS: ProcessedDataSource, c: ProcessedCase ) => {
                                       setDataSourceToEdit( { dataSource: pDS, case: c } );
                                     }}
                                     canvasWidth={props.canvasWidth}
                                     canvasPadding={props.canvasPadding}
                                     baseYScrollOffset={baseYScrollOffset}
                                     headerPadding={headerPadding}
              />
            );
          } );
        let dataPurposeOverlay = processedCase.dataPurposes.map(
          ( processedDataPurpose: ProcessedDataPurpose, index: number ) => {
            return (
              <EditDataPurposeOverlay key={processedDataPurpose.dataPurpose.id}
                                      canvasX={x}
                                      canvasY={y}
                                      canvasPadding={props.canvasPadding}
                                      headerPadding={headerPadding}
                                      baseYScrollOffset={baseYScrollOffset}
                                      x={processedDataPurpose.x + props.canvasPadding}
                                      y={processedDataPurpose.y + headerPadding + props.canvasPadding}
                                      width={processedDataPurpose.width}
                                      height={processedDataPurpose.height}
                                      isFirst={index === 0}
                                      isLast={index === processedCase.dataPurposes.length - 1}
                                      processedCase={processedCase}
                                      processedDataPurpose={processedDataPurpose}
                                      onUpdateModel={props.onUpdateModel}
                                      onEditDataPurpose={( pDP: ProcessedDataPurpose, c: ProcessedCase ) => {
                                        setDataPurposeToEdit( { dataPurpose: pDP, case: c } );
                                      }}
                                      canvasWidth={props.canvasWidth}
              />
            );
          } );

        let actionOverlay = processedCase.actions.map(
          ( processedAction: ProcessedAction, index: number ) => {
            return (
              <EditActionOverlay key={processedAction.action.id}
                                 canvasX={x}
                                 canvasY={y}
                                 canvasWidth={props.canvasWidth}
                                 canvasPadding={props.canvasPadding}
                                 headerPadding={headerPadding}

                                 baseYScrollOffset={baseYScrollOffset}
                                 x={processedAction.x + props.canvasPadding}
                                 y={processedAction.y + headerPadding + props.canvasPadding}
                                 width={processedAction.width}
                                 height={processedAction.height}
                                 isFirst={index === 0}
                                 isLast={index === processedCase.dataPurposes.length - 1}
                                 processedCase={processedCase}
                                 processedAction={processedAction}
                                 processedParticipants={processedParticipants}
                                 onUpdateModel={props.onUpdateModel}
                                 onEditAction={( pA: ProcessedAction, c: ProcessedCase ) => {
                                   setActionToEdit( { action: pA, case: c } );
                                 }}
              />
            );
          } );

        const caseHeightAbove = processedCases.filter( ( pC: ProcessedCase, i: number ) => i < caseIndex )
          .map( pC => pC.height + getAbsoluteValue( factorizedCanvasWidth, CASE_MARGIN_BOTTOM ) )
          .reduce( ( acc: number, current: number ) => {
            return acc + current;
          }, 0 );
        let connectionOverlayOffset = getAbsoluteValue( factorizedCanvasWidth, HEADER_OFFSET );

        const top = props.canvasPadding
          + getAbsoluteValue( factorizedCanvasWidth, HEADER_MARGIN_TOP )
          + getAbsoluteValue( factorizedCanvasWidth, HEADER_MARGIN_BOTTOM );

        const caseHeaderLabelRows =
          [processedCase.label].map( ( label: string ) => {
            return getStringArrayByWidth( label, (props.canvasWidth / 100 * 25),
              getAbsoluteValue( props.canvasWidth, CASE_HEADER_LABEL_SIZE ) ).length;
          } ).reduce( ( sum, current ) => sum + current, 0 );

        const caseHeaderHeight = (caseHeaderLabelRows <= 1 ? 2 : caseHeaderLabelRows) * getAbsoluteValue(
          props.canvasWidth,
          CASE_HEADER_HEIGHT );

        let connectionOverlay =
          (
            <svg key={Math.random()}
                 xmlns="http://www.w3.org/2000/svg"
                 version={"1.2"}

                 viewBox={"0 0 " + factorizedCanvasWidth + " " + (processedCase.height - connectionOverlayOffset >= 0 ?
                   processedCase.height - connectionOverlayOffset :
                   0)}

                 css={theme => ([{
                   position: "absolute",
                   width: factorizedCanvasWidth,
                   height: processedCase.height - connectionOverlayOffset,
                   marginLeft: props.canvasPadding,
                   top: top + caseHeightAbove + connectionOverlayOffset + caseHeaderHeight
                 }])}
            >
              {processedCase.connections.map(
                ( processedConnection: ProcessedConnection, index: number ) => {
                  return (

                    <EditConnectionOverlay key={processedConnection.connection.id}
                                           modelState={props.model}
                                           canvasWidth={props.canvasWidth}
                                           factorizedWidth={factorizedCanvasWidth}
                                           canvasPadding={props.canvasPadding}
                                           connectionOverlayOffset={connectionOverlayOffset + caseHeaderHeight}
                                           caseHeightAbove={caseHeightAbove}
                                           x1={processedConnection.x1 + props.canvasPadding}
                                           x2={processedConnection.x2 + props.canvasPadding}
                                           y1={processedConnection.y1 + headerPadding + props.canvasPadding}
                                           y2={processedConnection.y2 + headerPadding + props.canvasPadding}
                                           processedCase={processedCase}
                                           processedConnection={processedConnection}
                                           showDetailedModel={props.showDetailedModel}
                                           isLowMode={false}
                                           openCases={openCases}
                                           onEditConnection={( pC: ProcessedConnection, c: ProcessedCase ) => {
                                             setConnectionToEdit( { connection: pC, case: c } );
                                           }}
                    />
                  );
                } )}
            </svg>
          );

        let headerOverlay = _.times( 2, ( index: number ) => {
          return (
            <HeaderOverlay key={Math.random()}
                           canvasWidth={props.canvasWidth}
                           canvasPadding={props.canvasPadding}
                           baseYScrollOffset={baseYScrollOffset}
                           index={index}
                           onEditHeader={( index: number ) => {
                             setHeaderToEdit( index );
                           }}
            />
          );
        } );

        let participantOverlay = processedParticipants.map(
          ( processedParticipant: ProcessedParticipant, index: number ) => {
            return (
              <ParticipantOverlay key={Math.random()}
                                  processedParticipant={processedParticipant}
                                  canvasWidth={props.canvasWidth}
                                  canvasPadding={props.canvasPadding}
                                  baseYScrollOffset={baseYScrollOffset}
                                  index={index}
                                  onEditParticipant={( index: number ) => {
                                    setParticipantToEdit( index );
                                  }}
              />
            );
          } );

        return (
          <React.Fragment key={Math.random()}>
            {connectionOverlay}
            {dataSourceOverlay}
            {dataPurposeOverlay}
            {actionOverlay}
            {headerOverlay}
            {participantOverlay}
          </React.Fragment>
        );
      } )
      }

      {headerToEdit !== null && (
        <EditHeaderDialog model={props.model}
                          onClose={() => {
                            setHeaderToEdit( null );
                          }}
                          onSave={( sourceLabel: string, sourceIcon: IconType, purposeLabel: string,
                            purposeIcon: IconType, tutorialStep: TutorialStep ) => {

                            setHeaderToEdit( null );
                            props.onUpdateModel( ( draft ) => {
                              draft.header.sourceLabel = sourceLabel;
                              draft.header.sourceIcon = sourceIcon;
                              draft.header.purposeLabel = purposeLabel;
                              draft.header.purposeIcon = purposeIcon;

                              updateTutorial( draft, tutorialStep );
                            } )
                          }}
        />
      )}

      {participantToEdit !== null && (
        <EditParticipantDialog model={props.model}
                               participant={participants[participantToEdit]}
                               onClose={() => {
                                 setParticipantToEdit( null );
                               }}
                               onSave={( label: string[], hasActionLabel: string, hasNoActionLabel: string,
                                 icon: IconType, tutorialStep: TutorialStep, itemSymbols: ItemSymbol[] ) => {

                                 props.onUpdateModel( ( draft ) => {
                                   draft.participants[participantToEdit].label = label;
                                   draft.participants[participantToEdit].hasActionLabel = hasActionLabel;
                                   draft.participants[participantToEdit].hasNoActionLabel = hasNoActionLabel;
                                   draft.participants[participantToEdit].icon = icon;
                                   draft.participants[participantToEdit].itemSymbols = itemSymbols;
                                   updateTutorial( draft, tutorialStep );
                                 } );
                                 setParticipantToEdit( null );

                               }}
        />
      )}

      {caseToEdit && (
        <EditCaseDialog processedCase={caseToEdit}
                        model={props.model}
                        isDeleteDisabled={props.model.cases.length <= 1}
                        onClose={() => {
                          setCaseToEdit( null );
                        }}
                        onDelete={() => {
                          setDeleteItem( caseToEdit )
                        }}
                        onSave={( label: string, permissions: string, info: string, infoTitle: string,
                          itemSymbols: ItemSymbol[], tutorialStep: TutorialStep, isOpen: boolean ) => {
                          setCaseToEdit( null );
                          props.onUpdateModel( ( draft ) => {
                            const caseElem = draft.cases.find( c => c.id === caseToEdit.id );
                            caseElem.label = label;
                            caseElem.permissions = permissions;
                            caseElem.info = info;
                            caseElem.infoTitle = infoTitle;
                            caseElem.itemSymbols = itemSymbols;
                            caseElem.isOpen = isOpen;

                            updateTutorial( draft, tutorialStep );
                          } )
                        }}
        />
      )}

      {dataSourceToEdit && (
        <EditDataSourceDialog processedDataSource={dataSourceToEdit.dataSource}
                              showDetailedModel={props.showDetailedModel}
                              model={props.model}
                              factorizedCanvasWidth={factorizedCanvasWidth}
                              onClose={() => {
                                setDataSourceToEdit( null );
                              }}
                              onDelete={() => {
                                setDeleteItem( dataSourceToEdit.dataSource );
                              }}
                              onSave={( label: string[], info: string, infoTitle: string, shortInfo: string[],
                                typeId: string, itemSymbols: ItemSymbol[], tutorialStep: TutorialStep ) => {
                                setDataSourceToEdit( null );
                                props.onUpdateModel( ( draft ) => {
                                  const caseElem = draft.cases.find( c => c.id === dataSourceToEdit.case.id );
                                  const dataSourceElem = caseElem.dataSources.find(
                                    ( ds ) => ds.id === dataSourceToEdit.dataSource.dataSource.id );

                                  dataSourceElem.label = label;
                                  dataSourceElem.shortInfo = shortInfo
                                  && shortInfo.reduce(
                                    ( acc: string, current: string ) => {
                                      return acc + current
                                    }, "" ).length > 0 ? shortInfo : null;
                                  dataSourceElem.info = info !== "<p><br></p>" ?
                                    info :
                                    null;
                                  dataSourceElem.infoTitle = infoTitle;

                                  dataSourceElem.typeId = typeId;
                                  dataSourceElem.itemSymbols = itemSymbols;

                                  updateTutorial( draft, tutorialStep );
                                } )
                              }}
        />
      )}

      {dataPurposeToEdit && (
        <EditDataPurposeDialog processedDataPurpose={dataPurposeToEdit.dataPurpose}
                               showDetailedModel={props.showDetailedModel}
                               model={props.model}
                               factorizedCanvasWidth={factorizedCanvasWidth}
                               onClose={() => {
                                 setDataPurposeToEdit( null );
                               }}
                               onDelete={() => {
                                 setDeleteItem( dataPurposeToEdit.dataPurpose );
                               }}
                               onSave={( label: string[], info: string, infoTitle: string, shortInfo: string[],
                                 typeId: string, itemSymbols: ItemSymbol[], tutorialStep: TutorialStep ) => {
                                 setDataPurposeToEdit( null );
                                 props.onUpdateModel( ( draft ) => {
                                   const caseElem = draft.cases.find( c => c.id === dataPurposeToEdit.case.id );

                                   const dataPurposeElem = caseElem.dataPurposes.find(
                                     ( ds ) => ds.id === dataPurposeToEdit.dataPurpose.dataPurpose.id );

                                   dataPurposeElem.label = label;
                                   dataPurposeElem.shortInfo = shortInfo
                                   && shortInfo.reduce(
                                     ( acc: string, current: string ) => {
                                       return acc + current
                                     }, "" ).length > 0 ? shortInfo : null;
                                   dataPurposeElem.info = info
                                   !== "<p><br></p>" ?
                                     info :
                                     null;
                                   dataPurposeElem.typeId = typeId;
                                   dataPurposeElem.itemSymbols = itemSymbols;

                                   updateTutorial( draft, tutorialStep );
                                 } )
                               }}
        />
      )}

      {actionToEdit && (
        <EditActionDialog processedAction={actionToEdit.action}
                          showDetailedModel={props.showDetailedModel}
                          model={props.model}
                          factorizedCanvasWidth={factorizedCanvasWidth}
                          onClose={() => {
                            setActionToEdit( null );
                          }}
                          onDelete={() => {
                            setDeleteItem( actionToEdit.action )
                          }}
                          onSave={( label: string[], info: string, infoTitle: string, shortInfo: string[],
                            typeId: string, itemSymbols: ItemSymbol[], tutorialStep: TutorialStep ) => {
                            setActionToEdit( null );
                            props.onUpdateModel( ( draft ) => {
                              const caseElem = draft.cases.find( c => c.id === actionToEdit.case.id );

                              const actionElem = caseElem.actions.find(
                                ( ds ) => ds.id === actionToEdit.action.action.id );

                              actionElem.label = label;
                              actionElem.shortInfo = shortInfo ?
                                shortInfo.reduce( ( acc: string, current: string ) => acc + current ).length > 0 ?
                                  shortInfo :
                                  null :
                                null;
                              actionElem.info = info !== "<p><br></p>" ?
                                info :
                                null;
                              actionElem.infoTitle = infoTitle;
                              actionElem.typeId = typeId;
                              actionElem.itemSymbols = itemSymbols;

                              updateTutorial( draft, tutorialStep );
                            } )
                          }}
        />
      )}

      {connectionToEdit && (
        <EditConnectionDialog processedConnection={connectionToEdit.connection}
                              model={props.model}
                              onClose={() => {
                                setConnectionToEdit( null );
                              }}
                              onDelete={() => {
                                setDeleteItem( connectionToEdit.connection )
                              }}
                              onSave={( label: string, typeId: string, textEllipsis: boolean, tutorialStep: TutorialStep ) => {
                                props.onUpdateModel( ( draft ) => {
                                  const caseElem = draft.cases.find( c => c.id === connectionToEdit.case.id );
                                  const connectionElem = caseElem.connections.find(
                                    c => c.id === connectionToEdit.connection.connection.id );
                                  connectionElem.label = label;
                                  connectionElem.typeId = typeId;
                                  connectionElem.textEllipsis = textEllipsis;

                                  updateTutorial( draft, tutorialStep );
                                } );
                                setConnectionToEdit( null );

                              }
                              }
        />
      )}

      {deleteItem !== null && (
        <DeleteConfirmationDialog
          label={dataSourceToEdit && "Möchten Sie den Datenkategorie und alle mit ihm verknüpften Pfeile wirklich löschen?"
          || actionToEdit && "Möchten Sie den Prozessschritt und alle mit ihm verknüpften Pfeile wirklich löschen?"
          || dataPurposeToEdit && "Möchten Sie den Verwendungszweck und alle mit ihm verknüpften Pfeile wirklich löschen?"
          || connectionToEdit && "Möchten Sie den Pfeil wirklich löschen?"
          || caseToEdit && "Möchten Sie das Kapitel und alle mit ihm verknüpften Objekte wirklich löschen?"}
          onClose={() => {
            setDeleteItem( null );
          }}
          onConfirm={() => {
            dataSourceToEdit && deleteDataSource();
            actionToEdit && deleteAction();
            dataPurposeToEdit && deleteDataPurpose();
            caseToEdit && deleteCase();
            connectionToEdit && deleteConnection();
            setDeleteItem( null );
          }}
        />
      )
      }

      <div css={theme => ([{
        display: "flex",
        justifyContent: "center",
        width: props.canvasWidth + props.canvasPadding * 2
      }])}>
        <div css={theme => ([{
          position: "absolute",
          top: props.canvasPadding + processedCases[processedCases.length - 1].y + processedCases[processedCases.length
          - 1].height + 120,
          height: theme.DIMENSIONS.ADD_BUTTON_HEIGHT,
          width: props.canvasWidth / 3,
          backgroundColor: theme.COLORS.EDIT.PRIMARY.DEFAULT,
          borderRadius: "25px",
          transition: "all 0.5s ease-in-out",
          transitionProperty: "background-color, color",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ":hover": {
            cursor: "pointer"
          }
        }, dropShadow])}

             onClick={() => {
               props.onUpdateModel( ( draft ) => {
                 draft.cases.push(
                   {
                     id: uuidv4(),
                     label: "Neues Kapitel",
                     dataSources: [],
                     dataPurposes: [],
                     actions: [],
                     connections: [],
                     shortInfo: [],
                     infoTitle: "",
                     info: "",
                     permissions: "",
                     isOpen: false
                   }
                 );
               } )
             }}
        >
          <TypoHeadline size={"s"} color={theme.COLORS.EDIT.SECONDARY.DEFAULT}>
            Kapitel hinzufügen
          </TypoHeadline>
        </div>
      </div>

    </div>
  )
};

export { ModelEditor };