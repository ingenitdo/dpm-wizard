/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  getIdByItem,
  getStringArrayByWidth
} from "../utils/Processing";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import {
  CASE_HEADER_HEIGHT,
  CASE_HEADER_LABEL_SIZE,
  HEADER_HEIGHT,
  HEADER_MARGIN_BOTTOM,
  HEADER_MARGIN_TOP
} from "../Constants";
import { drop_shadow } from "../style/style";

import { SVGConnection } from "../graph/SVGConnection";
import { EllipsisDialogData } from "../graph/SVGText";
import { TutorialType } from "../../entities/TutorialType";
import { ProcessedParticipant } from "../../entities/ProcessedParticipant";
import { ProcessedCase } from "../../entities/ProcessedCase";
import { Colors } from "../../entities/Colors";
import { useEffect, useState } from "react";
import { TutorialStep } from "../../entities/TutorialStep";
import { ProcessedDataSource } from "../../entities/ProcessedDataSource";
import { ProcessedDataPurpose } from "../../entities/ProcessedDataPurpose";
import { ProcessedAction } from "../../entities/ProcessedAction";
import { ProcessedConnection } from "../../entities/ProcessedConnection";
import { Icon } from '../../components/icon_picker/Icon';
import { DialogHeader } from "../../components/dialog/DialogHeader";
import { DialogBody } from "../../components/dialog/DialogBody";
import { Dialog } from "../../components/dialog/Dialog";
import { Button } from "../../components/Button";
import { DialogButtonBar } from "../../components/dialog/DialogButtonBar";
import { InputCheckbox } from "../../components/input/InputCheckbox";
import { useMeasure } from "react-use";

interface Props {
  tutorial: TutorialType;
  factorizedCanvasWidth: number;
  canvasWidth: number;
  processedParticipants: ProcessedParticipant[];
  processedCases: ProcessedCase[];
  canvasOffset: number;
  colors: Colors;

  actualHeight: number;

  labelSize: number;

  showDetailedModel: boolean;
  scrollbarWidth: number | undefined;
  isLowMode: boolean;
  activeObjects: string[];
  isMobile: boolean;
  yScrollOffset: number;
  onOpenCase: ( caseId: string, item: string | undefined ) => void;
  onClose: ( neverShowAgain: boolean ) => void;
}

const Tutorial: React.FunctionComponent<Props> = props => {

  const [ref, { height }] = useMeasure();

  const allItems = [...props.processedParticipants, ...props.processedCases,
    ...props.processedCases.flatMap( ( processedCase: ProcessedCase ) => {
      return [...processedCase.dataSources, ...processedCase.dataPurposes, ...processedCase.actions,
        ...processedCase.connections]
    } )];

  const activeTutorialSteps = props.tutorial.steps.filter( ( tutorialStep: TutorialStep ) => tutorialStep.isActive );
  const [currentTutorialStep, setCurrentTutorialStep] = useState<TutorialStep>( activeTutorialSteps[0] );

  const [visible, setVisible] = useState<boolean>( false );
  const [highlightX, setHighlightX] = useState<number>( 0 );
  const [highlightY, setHighlightY] = useState<number>( 0 );
  const [highlightWidth, setHighlightWidth] = useState<number>( 0 );
  const [highlightHeight, setHighlightHeight] = useState<number>( 0 );

  const widthFactor = props.isMobile ? 0.8 : 0.5
  const [x, setX] = useState<number>( 0 );
  const [y, setY] = useState<number>( props.canvasOffset );
  const [width, setWidth] = useState<number>( props.canvasWidth * widthFactor );

  const [indicatorPosition, setIndicatorPosition] = useState<"left" | "right">( "left" );

  const highlightPadding = props.factorizedCanvasWidth * 0.01;

  const [currentConnection, setCurrentConnection] = useState<ProcessedConnection | null>( null );
  const [currentCase, setCurrentCase] = useState<ProcessedCase>();

  const [isCloseTutorialDialog, setIsCloseTutorialDialog] = useState<boolean>( false );

  const getAdjustedY = (value: number) => {
    return value + height*1.25 >= window.innerHeight - props.canvasOffset || value <= highlightY ? (window.innerHeight - height*1.25 - props.canvasOffset) : value;
  }

  useEffect(() => {
    setY(getAdjustedY(y));
  }, [y, height]);

  useEffect( () => {
    setWidth( props.canvasWidth * widthFactor );
  }, [props.canvasWidth] );
  useEffect( () => {
    setY( y + props.canvasOffset );
  }, [props.canvasOffset] );

  const openCase = ( item: ProcessedCase |ProcessedDataSource | ProcessedDataPurpose | ProcessedAction | ProcessedConnection ) => {
    const affectedCase = props.processedCases.find( ( processedCase: ProcessedCase ) => {
      if( "id" in item) {
        return processedCase;
      }
      if( "dataSource" in item ) {
        return processedCase.dataSources.includes( item );
      }
      if( "dataPurpose" in item ) {
        return processedCase.dataPurposes.includes( item );
      }
      if( "action" in item ) {
        return processedCase.actions.includes( item );
      }
      if( "connection" in item ) {
        return processedCase.connections.includes( item );
      }
    } );
    if( affectedCase ) {
      props.onOpenCase( affectedCase.id, getIdByItem(item) );
    }
  };

  useEffect( () => {
    allItems.map( ( item ) => {
      if( "participant" in item ) {
        if( currentTutorialStep.itemId === item.participant.id ) {
          setIndicatorPosition( "left" );
          setX( item.x + item.width * 0.2 + ((props.canvasWidth - props.factorizedCanvasWidth) / 2) );
          setY( getAdjustedY(item.y + getAbsoluteValue( props.canvasWidth, HEADER_HEIGHT ) + props.canvasOffset + highlightPadding*2));
          setHighlightX( item.x - highlightPadding * 3);
          setHighlightY( item.y + props.canvasOffset - highlightPadding * 4 );
          setHighlightWidth( item.width + highlightPadding * 4 );
          setHighlightHeight( item.height + highlightPadding * 2 );
          setCurrentConnection( null );
        }
      }
      if( "id" in item ) {
        if( currentTutorialStep.itemId === item.id ) {
          openCase( item );
          const caseHeaderLabelRows =
            [item.label].map( ( label: string ) => {
              return getStringArrayByWidth( label, (props.canvasWidth / 100 * 25),
                getAbsoluteValue( props.canvasWidth, CASE_HEADER_LABEL_SIZE ) ).length;
            } ).reduce( ( sum, current ) => sum + current, 0 );

          const caseHeaderHeight = (caseHeaderLabelRows <= 1 ? 2 : caseHeaderLabelRows) * getAbsoluteValue(
            props.canvasWidth,
            CASE_HEADER_HEIGHT );

          setIndicatorPosition( "left" );
          setX( item.x + props.factorizedCanvasWidth * 0.1 + ((props.canvasWidth - props.factorizedCanvasWidth) / 2) );
          setY( getAdjustedY(item.y + caseHeaderHeight + props.canvasOffset - props.yScrollOffset + highlightPadding*2));
          setHighlightX( 0 );
          setHighlightY( item.y + props.canvasOffset - highlightPadding - props.yScrollOffset );
          setHighlightWidth( props.canvasWidth * 0.99 );
          setHighlightHeight( item.height + highlightPadding * 2 );
          setCurrentConnection( null );
        }
      }
      if( "dataSource" in item ) {
        if( currentTutorialStep.itemId === item.dataSource.id ) {
          openCase( item );
          setX( item.x + item.width * 0.2 + ((props.canvasWidth - props.factorizedCanvasWidth) / 2) );
          setY( getAdjustedY(item.y + props.canvasOffset - props.yScrollOffset + item.height + highlightPadding*4));
          setIndicatorPosition( "left" );
          setHighlightX( item.x - highlightPadding*2 );
          setHighlightY( item.y + props.canvasOffset - highlightPadding - props.yScrollOffset );
          setHighlightWidth( item.width + highlightPadding * 2 );
          setHighlightHeight( item.height + highlightPadding * 2 );
          setCurrentConnection( null );
        }
      }
      if( "dataPurpose" in item ) {

        if( currentTutorialStep.itemId === item.dataPurpose.id ) {
          openCase( item );
          if( (item.x + item.width * 0.2 + item.width) > props.factorizedCanvasWidth ) {
            setX( item.x + item.width * 0.2 - width + ((props.canvasWidth - props.factorizedCanvasWidth) / 2) );
            setIndicatorPosition( "right" );
          }
          else {
            setX( item.x + item.width * 0.2 + ((props.canvasWidth - props.factorizedCanvasWidth) / 2) );
            setIndicatorPosition( "left" );
          }
          setY( getAdjustedY(item.y + item.height + props.canvasOffset - props.yScrollOffset + highlightPadding*4));
          setHighlightX( item.x - highlightPadding * 2 );
          setHighlightY( item.y + props.canvasOffset - highlightPadding - props.yScrollOffset );
          setHighlightWidth( item.width + highlightPadding * 2 );
          setHighlightHeight( item.height + highlightPadding * 2 );
          setCurrentConnection( null );
        }
      }
      if( "action" in item ) {
        if( currentTutorialStep.itemId === item.action.id ) {
          openCase( item );
          setX( item.x + item.width * 0.2 + ((props.canvasWidth - props.factorizedCanvasWidth) / 2) );
          setY( getAdjustedY(item.y + item.height + props.canvasOffset - props.yScrollOffset + highlightPadding*4));
          setIndicatorPosition( "left" );
          setHighlightX( item.x - highlightPadding*2 );
          setHighlightY( item.y + props.canvasOffset - highlightPadding - props.yScrollOffset );
          setHighlightWidth( item.width + highlightPadding * 2 );
          setHighlightHeight( item.height + highlightPadding * 2 );
          setCurrentConnection( null );
        }
      }
      if( "connection" in item ) {
        if( currentTutorialStep.itemId === item.connection.id ) {
          openCase( item );
          setIndicatorPosition( "left" );
          setX( item.x1 + ((props.canvasWidth - props.factorizedCanvasWidth) / 2) );
          setY( getAdjustedY(item.y1 + getAbsoluteValue( props.canvasWidth, 2 ) + props.canvasOffset - props.yScrollOffset + highlightPadding ));
          setHighlightX( -1000 );
          setHighlightY( -1000 );
          setHighlightWidth( 0 );
          setHighlightHeight( 0 );

          setCurrentConnection( item );
          const c = props.processedCases.find( ( c: ProcessedCase ) => c.connections.includes( item ) );
          setCurrentCase( c );
        }
      }
    } );
    if( currentTutorialStep.itemId === "controls" ) {
      setIndicatorPosition( "right" );
      setX( props.canvasWidth - width - props.factorizedCanvasWidth * 0.1 );
      setY( getAdjustedY(props.canvasOffset + highlightPadding*4));
      setHighlightX( 0 );
      setHighlightY( 0 );
      setHighlightWidth( props.canvasWidth * 0.996);
      setHighlightHeight( props.canvasOffset );
      setCurrentConnection( null );
    }
    if( currentTutorialStep.itemId === "header" ) {
      setIndicatorPosition( "right" );
      setX( props.canvasWidth - width - props.factorizedCanvasWidth * 0.1 );
      setY( getAdjustedY(props.canvasOffset + getAbsoluteValue( props.factorizedCanvasWidth, HEADER_MARGIN_TOP ) + getAbsoluteValue(
        props.canvasWidth, HEADER_HEIGHT ) + getAbsoluteValue( props.factorizedCanvasWidth, HEADER_MARGIN_BOTTOM ) + highlightPadding*2 ));
      setHighlightX( 0 );
      setHighlightY( props.canvasOffset - getAbsoluteValue( props.factorizedCanvasWidth, HEADER_MARGIN_TOP ) * 2 );
      setHighlightWidth( props.canvasWidth * 0.996 );
      setHighlightHeight(
        getAbsoluteValue( props.canvasWidth, HEADER_HEIGHT ) + getAbsoluteValue( props.factorizedCanvasWidth,
        HEADER_MARGIN_TOP ) + getAbsoluteValue( props.factorizedCanvasWidth, HEADER_MARGIN_BOTTOM ) );
      setCurrentConnection( null );
    }

    if(props.canvasWidth) {
      setVisible(true);
    }
  }, [currentTutorialStep, props] );


  return (
    <div css={theme => ([{
      position: "absolute",
      zIndex: 9999
    }])}>
      {visible && (
        <div css={theme => ([{
          position: "absolute",
          top: highlightY,
          left: highlightX,
          height: highlightHeight,
          width: highlightWidth,
          border: "0.2vw solid " + props.colors.tutorialBackground,
          outline: "1000vw solid rgba(0,0,0,0.5)"
        }])}/>
      )}

      {visible && (
        <div css={theme => ([{
        width: props.canvasWidth - (props.scrollbarWidth ? props.scrollbarWidth : 0),
        display: 'flex',
        justifyContent: 'center',
        position: "absolute",
        top: 0,
        left: 0
      }])}>
        <svg key={Math.random()}
        xmlns="http://www.w3.org/2000/svg"
        version={"1.2"}

        viewBox={"0 0 " + props.factorizedCanvasWidth + " " + (props.actualHeight)}

        css={theme => ([{
        width: props.factorizedCanvasWidth,
        height: "100%",
        marginTop: props.canvasOffset - props.yScrollOffset,
      },])}
        >
        {currentConnection && currentCase && (
          <SVGConnection key={Math.random()}
                         processedConnection={currentConnection}
                         processedCase={currentCase}
                         activeObjects={props.activeObjects}
                         canvasWidth={props.factorizedCanvasWidth}
                         onEllipsisClick={( ellipsisDialogData: EllipsisDialogData ) => {
                           //                         setEllipsisDialogData( ellipsisDialogData );
                         }}
                         showDetailedModel={props.showDetailedModel}
                         isLowMode={props.isLowMode}
                         colors={props.colors}
                         isTutorialHighlight={true}
          />
        )}

        </svg>
        </div>
      )}


      {visible && (
        <div css={theme => ([{
          position: "absolute",
          top: y,
          left: x,
          height: "auto",
          width: width,
          backgroundColor: props.colors.tutorialBackground
        }, drop_shadow])}
             ref={ref}
        >

          <div css={theme => ([{
            position: "absolute",
            top: "-1vw",
            left: indicatorPosition === "left" ? width * 0.05 : width * 0.85,
            width: 0,
            height: 0,

            borderLeft: "1.25vw solid transparent",
            borderRight: "1.25vw solid transparent",

            borderBottom: "1.25vw solid " + props.colors.tutorialBackground,
          }])}/>

          <h1 css={theme => ([{
            margin: "1vw 2vw 1vw 1vw",
            fontSize: (props.labelSize + 2) / 10 * 0.8 + "vw",
            color: props.colors.tutorialLabel

          }])}>
            {currentTutorialStep.title}
          </h1>

          <div css={theme => ([{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "1vw",
            cursor: "pointer"
          }])}
               onClick={() => {
                 props.onClose( true );
               }}
          >
            <Icon name={"close"} size={"1vw"} color={props.colors.tutorialLabel}/>
          </div>

          <h1 css={theme => ([{
            position: "absolute",
            bottom: 0,
            margin: "1vw",
            fontSize: props.labelSize / 10 * 0.8 + "vw",
            color: props.colors.tutorialLabel

          }])}>
            {activeTutorialSteps.indexOf( currentTutorialStep ) + 1} / {activeTutorialSteps.length}
          </h1>

          <div css={theme => ([{
            maxHeight: window.innerHeight/3,
            overflowY: "auto",
            marginRight: 1 + "vw",
            marginBottom: 3 + "vw"
          }])}>
            <p css={theme => ([{
              margin: "1vw",
              fontSize: props.labelSize / 10 * 0.8 + "vw",
              fontWeight: 500,
              color: props.colors.tutorialLabel,
            }])} dangerouslySetInnerHTML={{ __html: currentTutorialStep.text }}/>
          </div>


          <div css={theme => ([{
            position: "absolute",
            right: 0,
            bottom: 0,
            margin: "1vw",
            display: "flex"
          }])}>
            {activeTutorialSteps.indexOf( currentTutorialStep ) < activeTutorialSteps.length
            && activeTutorialSteps.indexOf( currentTutorialStep ) !== 0 && (
              <div css={theme => ([{
                cursor: "pointer"
              }])}
                   onClick={() => {
                     setCurrentTutorialStep(
                       activeTutorialSteps[activeTutorialSteps.indexOf( currentTutorialStep ) - 1] );
                   }}>
                <Icon name={"back"} size={"1vw"} color={props.colors.tutorialLabel}/>
              </div>

            )}

            {activeTutorialSteps.indexOf( currentTutorialStep ) < activeTutorialSteps.length - 1 && (
              <div css={theme => ([{
                cursor: "pointer"
              }])}
                   onClick={() => {
                     setCurrentTutorialStep(
                       activeTutorialSteps[activeTutorialSteps.indexOf( currentTutorialStep ) + 1] )
                   }}>
                <Icon name={"next"} size={"1vw"} color={props.colors.tutorialLabel}/>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
};

export { Tutorial };
