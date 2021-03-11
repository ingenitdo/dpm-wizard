/** @jsx jsx */
import { jsx } from '@emotion/core'

import * as React from "react";
import { useEffect, useState } from "react";
import { useLocalStorage, useMeasure, useScrollbarWidth, useToggle } from "react-use";
import { Dialog } from "./dialog/Dialog";
import { SVGParticipant } from "./graph/SVGParticipant";
import { SVGCase } from "./graph/SVGCase";
import {
  getCaseHeaderHeight, getItemByCaseAndId,
  processCases,
  processParticipants
} from "./utils/Processing";
import { SVGAction } from "./graph/SVGAction";

import { SVGDataSource } from "./graph/SVGDataSource";
import { SVGConnection } from "./graph/SVGConnection";
import { SVGDataPurpose } from "./graph/SVGDataPurpose";
import {
  BROWSER_COMPABILITY,
  CASE_HEADER_HEIGHT,
  CASE_MARGIN_BOTTOM, DATASOURCE_AND_DATAPURPOSE_WIDTH,
  HEADER_MARGIN_BOTTOM,
  HEADER_MARGIN_TOP,
  HEADER_OFFSET,
  LEGEND_LABEL_ICON_SIZE,
  LEGEND_LABEL_SIZE,
  PARTICIPANTS_LABEL_SIZE
} from "./Constants";
import { EllipsisDialogData } from "./graph/SVGText";
import { SVGEllipsisDialog } from "./graph/SVGEllipsisDialog";
import { useMobile } from "./hooks/useMobile";
import { SVGCaseActionIdentifier } from "./graph/SVGCaseActionIdentifier";
import { GlossarDialog } from "./dialog/GlossarDialog";
import { filter_blur } from "./style/style";
import { Header } from "./header/Header";
import { useBrowser } from "./hooks/useBrowser";
import { getAbsoluteValue } from "./utils/LayoutCalc";
import { CreditsDialog } from "./dialog/CreditsDialog";
import { LegalNoticeDialog } from "./dialog/LegalNoticeDialog";
import { LegendDialog } from "./dialog/LegendDialog";
import { CONTROLS_HEIGHT, SUBTITLE_MARGIN_BOTTOM, TITLE_OFFSET } from "../pages/wizard/components/Constants";
import { SVGItemSymbolOverlay } from "./graph/SVGItemSymbolOverlay";
import { processGlossar } from "./utils/GlossarProcessing";
import _ = require("lodash");
import { Case } from "../entities/Case";
import { useIsBrowserCompatible } from "./hooks/useIsBrowserCompatible";
import { BrowserCompatibilityWarning } from "./dialog/BrowserCompatibilityWarning";
import { Participant } from '../entities/Participant';
import { ProcessedCase } from "../entities/ProcessedCase";
import { ProcessedParticipant } from "../entities/ProcessedParticipant";
import { ProcessedAction } from "../entities/ProcessedAction";
import { ProcessedDataSource } from "../entities/ProcessedDataSource";
import { ProcessedDataPurpose } from "../entities/ProcessedDataPurpose";
import { ProcessedConnection } from "../entities/ProcessedConnection";
import { FixedLabels } from "../entities/FixedLabels";
import { DataSource } from "../entities/DataSource";
import { Action } from "../entities/Action";
import { DataPurpose } from "../entities/DataPurpose";
import { Tutorial } from "./tutorial/Tutorial";
import { TutorialType } from "../entities/TutorialType";
import { BoxType } from "../entities/BoxType";
import { ConnectionType } from "../entities/ConnectionType";

const lang_en = require( "./lang/lang_en.json" );
const lang_de = require( "./lang/lang_de.json" );

interface Props {
  detailedModel: any;
  simpleModel: any;
  canvasHeight: string;
  showDetailedModel?: boolean;
  isEditorMode?: boolean;
  isPreviewMode?: boolean;
  forceShowTutorial?: boolean;
}

const ModelViewer: React.FunctionComponent<Props> = props => {

  // Check for Portrait
  const [isPortrait, setIsPortrait] = useState<boolean>( window.innerHeight > window.innerWidth );
  const portraitModeTimestamp = localStorage.getItem( 'portraitModeTimestamp' );

  const [portraitWarningShown, setPortraitWarningShown] = useState<boolean>(
    portraitModeTimestamp ? (Date.now() - parseInt( portraitModeTimestamp )) / 1000 < 86400 : false );

  useEffect( () => {
    if( window.innerHeight > window.innerWidth ) {
      setIsPortrait( true );
    }
    else {
      setIsPortrait( false );
    }
  }, [window.innerHeight, window.innerWidth] );

  const [isBrowserCompatible, isLowMode] = useIsBrowserCompatible( BROWSER_COMPABILITY );
  const [isBrowserCompabilityWarningClosed, setIsBrowserCompabilityWarningClosed] = useState<boolean>( false );
  const isMobile = useMobile();
  const [browserName] = useBrowser();

  const [ref, { width, height }] = useMeasure();
  const currentRef = React.createRef<HTMLDivElement>();
  const [yScrollOffset, setYScrollOffset] = useState<number>( 0 );
  let baseYScrollOffset = 0;
  const [openCases, setOpenCases] = useState<string[]>( [] );
  const [activeObjects, setActiveObjects] = useState<string[]>( [] );

  const [infoIconSize, setInfoIconSize] = useState<number>( width * 0.015 );

  const [ellipsisDialogData, setEllipsisDialogData] = useState<EllipsisDialogData | null>( null );

  const [canvasHeight, setCanvasHeight] = useState<number>( 0 );
  const [actualHeight, setActualHeight] = useState<number>( 0 );

  const [infoDialogContent, setInfoDialogContent] = useState<{ title: string[], text: string } | null>( null );
  const [itemSymbolOverlay, setItemSymbolOverlay] = useState<{ text: string, x: number, y: number } | null>( null );
  const [itemSymbolDialog, setItemSymbolDialog] = useState<{ title: string, text: string } | null>( null );

  const [legendShown, toggleLegendShown] = useToggle( false );

  const [showDetailedModel, setShowDetailedModel] = useState<boolean>( !!props.showDetailedModel || false );

  useEffect( () => {
    setShowDetailedModel( props.showDetailedModel );
  }, [props.showDetailedModel] );

  let {
    masterData,
    language,
    title,
    subtitle,
    header,
    participants,
    connectionTypes,
    boxTypes,
    cases,
    sourceInformation,
    revisionHistory,
    glossar,
    isDialogFullsize,
    isDetailedIcons,
    fixedLabels,
    colors,
    dimensions,
    predefinedSymbols,
    customSymbols,
    tutorial
  }
    = (showDetailedModel ? props.detailedModel : props.simpleModel);

  predefinedSymbols = predefinedSymbols ? predefinedSymbols : [];
  customSymbols = customSymbols ? customSymbols : [];

  const [casesState, setCasesState] = useState<Case[]>( cases );

  const [participantsState, setParticipantsState] = useState<Participant[]>( participants );
  const [boxTypesState, setBoxTypesState] = useState<BoxType[]>( boxTypes );
  const [connectionTypesState, setConnectionTypesState] = useState<ConnectionType[]>( connectionTypes );

  const [activeLang, setActiveLang] = useState<FixedLabels>( lang_en );

  const [isCreditsDialog, setIsCreditsDialog] = useState<boolean>( false );
  const [isLegalNoticeDialog, setIsLegalNoticeDialog] = useState<boolean>( false );
  const [glossarInfoContent, setGlossarInfoContent] = useState<{ title: string, content: string } | null>( null );

  //Scrollbar
  const scrollbarWidth = useScrollbarWidth();

  //Blur
  const [isInfoDialogBlurred, setIsInfoDialogBlurred] = useState<boolean>( false );
  const [isGlossarDialogBlurred, setIsGlossarDialogBlurred] = useState<boolean>( false );

  //ZOOMING
  const [canvasWidth, setCanvasWidth] = useState<number>( width );
  const [canvasX, setCanvasX] = useState<number>( 0 );
  const [canvasY, setCanvasY] = useState<number>( 0 );
  const [factorizedCanvasWidth, setFactorizedCanvasWidth] = useState<number>( width );
  const [zoomFactor, setZoomFactor] = useState<number>( 1.0 ); //0.0 - 1.0

  //FULLSCREEN
  const isInFullscreen = () => {
    return document.fullscreenElement || (document as any).webkitFullscreenElement;
  };

  const toggleFullscreen = () => {
    const uncheckedElement = document.querySelector( "*[dpm-viewer]" ) as any;
    const anyDocument = document as any;

    if( !isInFullscreen() ) {
      if( uncheckedElement ) {
        if( uncheckedElement.requestFullscreen ) {
          uncheckedElement.requestFullscreen();
        }
        else if( uncheckedElement.mozRequestFullScreen ) { /* Firefox */
          uncheckedElement.mozRequestFullScreen();
        }
        else if( uncheckedElement.webkitRequestFullscreen ) { /* Chrome, Safari & Opera */
          uncheckedElement.webkitRequestFullscreen();
        }
        else if( uncheckedElement.msRequestFullscreen ) { /* IE/Edge */
          uncheckedElement.msRequestFullscreen();
        }
      }
    }
    else {
      if( anyDocument.exitFullscreen ) {
        anyDocument.exitFullscreen();
      }
      else if( anyDocument.mozCancelFullScreen ) { /* Firefox */
        anyDocument.mozCancelFullScreen();
      }
      else if( anyDocument.webkitExitFullscreen ) { /* Chrome, Safari and Opera */
        anyDocument.webkitExitFullscreen();
      }
      else if( anyDocument.msExitFullscreen ) { /* IE/Edge */
        anyDocument.msExitFullscreen();
      }
    }
  };

  //Language
  useEffect( () => {
    if( language === 'de' ) {
      setActiveLang( lang_de );
    }
    else {
      setActiveLang( lang_en )
    }
  }, [language] );

  //SCROLLING
  const resetYScrollOffset = () => {
    setYScrollOffset( 0 );
    window.scrollTo( 0, 0 );
  };

  useEffect( () => {

    //use seperate var, because ref doesnt work when updates called by browser event listener(out of hook lifecycle)
    const currentWrapper = currentRef.current;

    const update = () => {
      if( currentWrapper ) {
        setCanvasWidth( currentWrapper.getBoundingClientRect().width );
        setCanvasHeight( currentWrapper.getBoundingClientRect().height );
        setCanvasX( currentWrapper.getBoundingClientRect().x );
        setCanvasY( currentWrapper.getBoundingClientRect().y );
      }
    };

    update();
    if( currentWrapper ) {
      baseYScrollOffset = currentWrapper.getBoundingClientRect().y;
    }

    window.addEventListener( 'resize', update );
    return () => {
      window.removeEventListener( 'resize', update );
    };

  }, [currentRef.current] );

  useEffect( () => {
    if( isMobile ) {
      setShowDetailedModel( true );
    }
  }, [isMobile] );

  useEffect( () => {
    if( !props.isEditorMode ) {
      resetYScrollOffset();
      setOpenCases( cases.map( ( c: any ) => c.isOpen ? c.id : null ) );
    }
  }, [showDetailedModel, cases] );

  useEffect( () => {
    setFactorizedCanvasWidth( canvasWidth * zoomFactor );
  }, [canvasHeight, height, width, zoomFactor] );

  useEffect( () => {
    !!glossarInfoContent ? setIsGlossarDialogBlurred( true ) : setIsGlossarDialogBlurred( false );
  }, [glossarInfoContent] );
  useEffect( () => {
    //BLUR
    !!infoDialogContent ? setIsInfoDialogBlurred( true ) : setIsInfoDialogBlurred( false );

    //GLOSSAR
    let keywordTriggerList = document.getElementsByClassName( "7a9bf624-ea78-4876-ac2e-fd6f8f4499c3" );
    for( let i = 0; i < keywordTriggerList.length; i++ ) {
      const id = keywordTriggerList[i].id;
      const glossarItem = glossar?.find( ( g: any ) => g.id === id );

      keywordTriggerList[i].addEventListener( "click", ( e ) => {
        if( glossarItem ) {
          setGlossarInfoContent( { title: glossarItem.title, content: glossarItem.content } );
        }
      }, false );
    }
  }, [glossar, itemSymbolDialog, casesState] );

  useEffect( () => {
    if( glossar ) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const [tempCases, tempParticipants] = processGlossar( glossar, _.cloneDeep( cases ), _.cloneDeep( participants ),
        colors.glossarKeyword,
        [...predefinedSymbols, ...customSymbols] );
      setCasesState( tempCases );
      setParticipantsState( tempParticipants );
      setBoxTypesState( boxTypes );
      setConnectionTypesState( connectionTypes );
    }
  }, [glossar, cases, participants, boxTypes] );

  let processedParticipants = participants ?
    processParticipants( participantsState, factorizedCanvasWidth, actualHeight ) :
    [];
  let processedCases = processCases( showDetailedModel, casesState, factorizedCanvasWidth, actualHeight,
    processedParticipants, openCases,
    connectionTypesState, false, boxTypesState );

  useEffect( () => {
    if( props.isEditorMode ) {
      setOpenCases( cases.map( ( c: any ) => c.id ) );
    }
    else {
      setOpenCases( cases.map( ( c: any ) => c.isOpen ? c.id : null ) );
    }
  }, [cases] );

  useEffect( () => {
    setEllipsisDialogData( null );
  }, [width] );

  useEffect( () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    processedParticipants = processParticipants( participants, factorizedCanvasWidth, actualHeight );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    processedCases = processCases( showDetailedModel, casesState, factorizedCanvasWidth, actualHeight,
      processedParticipants, openCases,
      connectionTypesState, false, boxTypesState );
    setEllipsisDialogData( null );
  }, [openCases, casesState] );

  useEffect( () => {
    setInfoIconSize( getAbsoluteValue( factorizedCanvasWidth, DATASOURCE_AND_DATAPURPOSE_WIDTH ) * 0.075 );
  }, [processedCases, processedParticipants, showDetailedModel] );

  const handleCaseClick = ( id: string ) => {
    openCases.includes( id )
      ? setOpenCases( openCases.filter( item => item !== id ) )
      : setOpenCases( openCases.concat( id ) );

    let pc = processedCases.find( ( c ) => c.id === id );
    if( pc && pc.dataSources.length > 0 ) {
      handleObjectClick( pc, pc.dataSources[0].dataSource, true );
    }
  };

  const handleOpenCase = ( caseId: string ) => {
    if( !props.isEditorMode && !openCases.includes( caseId ) ) {
      setOpenCases( openCases.concat( caseId ) );
    }
  };

  const [tutorialYScrollOffset, setTutorialYScrollOffset] = useState<number>( 0 );
  const scrollToItem = ( caseId: string, itemId: string ) => {

    if( !props.isEditorMode ) {
      const processedCase = processedCases.find( ( pC: ProcessedCase ) => pC.id === caseId );

      if( processedCase ) {
        const processedItem = processedCase.id === itemId ? processedCase : getItemByCaseAndId( processedCase, itemId );
        if( processedItem ) {
          if( currentRef && currentRef.current ) {
            const scrollTop = processedCase.y + (processedCase.id === itemId ? 0 : ("connection" in processedItem ? processedItem.y1 : processedItem.y))
              - canvasOffset * 2;

            let newValue = 0;
            if( props.isPreviewMode ) {
              currentRef.current.parentElement.scrollTo( { top: scrollTop } );
              newValue = currentRef.current.parentElement.scrollTop;
            }
            else {
              currentRef.current.parentElement.scrollTo( { top: 0 } );

              currentRef.current.children[0].scrollTo( { top: scrollTop } );
              newValue = currentRef.current.children[0].scrollTop;
            }

            setTutorialYScrollOffset( newValue );
          }
        }
      }
    }
  };

  useEffect( () => {

    const newHeight = getAbsoluteValue( factorizedCanvasWidth, HEADER_OFFSET )
      + processedCases.map( item => item.height )
        .reduce( ( acc, current ) => acc + current )
      + (processedCases.length * getAbsoluteValue( factorizedCanvasWidth, CASE_MARGIN_BOTTOM ));

    setActualHeight( newHeight );
  }, [processedCases] );

  const handleObjectClick = ( c: ProcessedCase, obj: DataSource | Action | DataPurpose,
    isCaseOpeningEvent: boolean ) => {

    if( activeObjects.includes( obj.id ) && !isCaseOpeningEvent && obj.infoTitle && obj.info ) {
      setInfoDialogContent( {
        title: [obj.infoTitle],
        text: obj.info
      } )
    }
    else {
      const getInterval = ( obj: DataSource | Action | DataPurpose ) => {
        return Array( obj.position.end - obj.position.start + 1 ).fill( obj )
          .map( ( _, idx: any ) => obj.position.start + idx );
      };
      const hasIntersection = ( obj: DataSource | Action | DataPurpose ) => {
        let arrB = getInterval( obj );
        return arrA.filter( x => arrB.includes( x ) ).length > 0;
      };
      const arrA = getInterval( obj );
      let list: string[] = [obj.id];

      list.push(
        ...c.dataSources.filter( item => {
          return hasIntersection( item.dataSource )
        } ).map( item => {
          return item.dataSource.id
        } ),
        ...c.actions.filter( item => hasIntersection( item.action ) ).map( item => {
          return item.action.id
        } ),
        ...c.dataPurposes.filter( item => hasIntersection( item.dataPurpose ) ).map( item => {
          return item.dataPurpose.id
        } )
      );
      setActiveObjects( list );
    }

  };

  const canvasOffset = getAbsoluteValue( factorizedCanvasWidth, HEADER_MARGIN_TOP )
    + getAbsoluteValue( factorizedCanvasWidth, HEADER_MARGIN_BOTTOM )
    + (!props.isEditorMode
      ? (
        (masterData.controlOptions.showTitle
          ? getAbsoluteValue( factorizedCanvasWidth, TITLE_OFFSET )
          : 0)
        + (masterData.controlOptions.showSubTitle || browserName === 'Safari'
          ? getAbsoluteValue( factorizedCanvasWidth, SUBTITLE_MARGIN_BOTTOM ) * 3
          : 0)
        + ((masterData.controlOptions.showModeToggle
          || masterData.controlOptions.showLegend
          || masterData.controlOptions.showFullscreen
          || masterData.controlOptions.showZoom)
          ? getAbsoluteValue( factorizedCanvasWidth, CONTROLS_HEIGHT )
          : 0)
        + (1 - zoomFactor) * (factorizedCanvasWidth / 10)
      ) : 0);

  // TutorialType
  const [tutorialState, setTutorialState] = useLocalStorage( 'tutorial', 'not-seen' );
  const [activeTutorial, setActiveTutorial] = useState<TutorialType | null>(
    (tutorialState === 'not-seen' && masterData.controlOptions.showTutorial && !props.isEditorMode
      && !props.isPreviewMode) ? tutorial : null );

  useEffect( () => {
    if( props.forceShowTutorial ) {
      setActiveTutorial( tutorial );
      setZoomFactor( 1 );
      isInFullscreen() && toggleFullscreen();
    }
  }, [props.forceShowTutorial] );

  useEffect( () => {
    if( activeTutorial ) {
      setZoomFactor( 1 );
      isInFullscreen() && toggleFullscreen();
    }
  }, [activeTutorial] )

  return (
    <div ref={currentRef}
         css={theme => ([{
           height: "100%",
           overflow: "hidden",
           margin: 0,
           fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
           webkitFontSmoothing: "antialiased",
           mozOsxFontSmoothing: "grayscale"
         }])}
    >

      <div className={"canvas"}
           css={theme => ({
             width: "100%",
             height: isInFullscreen() ? "100vh" : props.canvasHeight,
             backgroundColor: !props.isEditorMode ? (showDetailedModel ?
               props.detailedModel.colors.canvasBackground :
               props.simpleModel.colors.canvasBackground)
               : null,
             overflowX: 'hidden'
           })}
           ref={ref}
           onScroll={( e ) => {
             if( activeTutorial === null ) {
               setYScrollOffset( e.currentTarget.scrollTop );
             }
           }}
      >

        <div css={theme => ({
          display: 'flex',
          flexDirection: 'column'
        })}>

          {!!activeTutorial && (
            <Tutorial tutorial={activeTutorial}
                      factorizedCanvasWidth={factorizedCanvasWidth}
                      canvasWidth={canvasWidth - (scrollbarWidth ? scrollbarWidth : 0)}
                      processedCases={processedCases}
                      processedParticipants={processedParticipants}
                      canvasOffset={canvasOffset}
                      colors={colors}
                      actualHeight={actualHeight}
                      showDetailedModel={showDetailedModel}
                      activeObjects={activeObjects}
                      isLowMode={isLowMode}
                      scrollbarWidth={scrollbarWidth}
                      labelSize={dimensions.tutorialLabelSize || 12}
                      isMobile={isMobile}
                      yScrollOffset={tutorialYScrollOffset}
                      onOpenCase={( caseId: string, itemId: string | undefined ) => {
                        handleOpenCase( caseId );
                        itemId && scrollToItem( caseId, itemId )
                      }}
                      onScrollTop={() => {
                        if( props.isPreviewMode ) {
                          currentRef.current.parentElement.scrollTo( { top: 0 } );
                        }
                        else {
                          currentRef.current.children[0].scrollTo( { top: 0 } );
                        }
                        setTutorialYScrollOffset(0);
                      }}
                      onClose={( neverShowAgain: boolean ) => {
                        if( neverShowAgain ) {
                          setTutorialState( "seen" );
                        }
                        setActiveTutorial( null );
                      }}
            />
          )}

          <Header showDetailedModel={showDetailedModel}
                  fixedLabels={fixedLabels}
                  language={activeLang}
                  toggleMode={() => setShowDetailedModel( !showDetailedModel )}
                  toggleLegend={() => toggleLegendShown()}
                  marginTop={canvasWidth / 100 * HEADER_MARGIN_TOP}
                  labelSize={canvasWidth / 100 * LEGEND_LABEL_SIZE}
                  iconSize={canvasWidth / 100 * LEGEND_LABEL_ICON_SIZE}
                  infoIconSize={infoIconSize}
                  predefinedAndCustomSymbols={[...predefinedSymbols, ...customSymbols]}
                  onItemSymbolClick={( isDialog: boolean, title: string, text: string,
                    x: number, y: number ) => {
                    if( isDialog ) {
                      setItemSymbolDialog( { title: title, text: text } )
                    }
                    else {
                      setItemSymbolOverlay( { text: text, x: x, y: y } )
                    }
                  }}

                  isMobile={isMobile}
                  yScrollOffset={yScrollOffset}
                  canvasWidth={canvasWidth}
                  scrollbarWidth={scrollbarWidth ? scrollbarWidth : 0}
                  zoomFactor={zoomFactor}
                  onZoomIn={() => {
                    setZoomFactor( zoomFactor < 1 ? zoomFactor + 0.05 : zoomFactor )
                  }}
                  onZoomOut={() => {
                    setZoomFactor( zoomFactor > 0.5 ? zoomFactor - 0.05 : zoomFactor )
                  }}

                  onFullscreen={toggleFullscreen}

                  colors={colors}
                  dimensions={dimensions}
                  isFullscreen={isInFullscreen()}
                  header={header}
                  height={height}
                  isLowMode={false}
                  factorizedCanvasWidth={factorizedCanvasWidth}
                  isInfoDialogBlurred={isInfoDialogBlurred}
                  processedParticipants={processedParticipants}
                  isIos={browserName === 'Safari'}
                  title={title}
                  subtitle={subtitle}
                  masterData={masterData}
                  isEditorMode={props.isEditorMode}


                  showTitle={masterData.controlOptions.showTitle}
                  showSubtitle={masterData.controlOptions.showSubTitle}
                  showModeToggle={masterData.controlOptions.showModeToggle}
                  showLegend={masterData.controlOptions.showLegend}
                  showFullscreen={masterData.controlOptions.showFullscreen}
                  showZoom={masterData.controlOptions.showZoom}
          />


          <div css={theme => ([{
            width: canvasWidth - (scrollbarWidth ? scrollbarWidth : 0),
            display: 'flex',
            justifyContent: 'center'
          }])}>
            <svg key={Math.random()}
                 xmlns="http://www.w3.org/2000/svg"
                 version={"1.2"}

                 viewBox={"0 0 " + factorizedCanvasWidth + " " + (actualHeight)}

                 css={theme => ([{
                   width: factorizedCanvasWidth,
                   marginTop: canvasOffset,
                   height: "100%"

                 }, isInfoDialogBlurred && filter_blur])}
            >


              {/*SHADOW DEFS*/}
              <defs>
                <linearGradient id="CoronaGradient1">
                  <stop offset="29%" stopColor={'#b4daf1'}/>
                  <stop offset="126%" stopColor={'#b4daf1'}/>
                </linearGradient>
                <linearGradient id="CoronaGradient_middle">
                  <stop offset="29%" stopColor={'#b4daf1'}/>
                  <stop offset="126%" stopColor={'#b07894'}/>
                </linearGradient>
                <linearGradient id="CoronaGradient2">
                  <stop offset="29%" stopColor={'#b07894'}/>
                  <stop offset="126%" stopColor={'#AE4261'}/>
                </linearGradient>
                <linearGradient id="CoronaGradient3">
                  <stop offset="29%" stopColor={'#b4daf1'}/>
                  <stop offset="126%" stopColor={'#AE4261'}/>
                </linearGradient>
                <filter id="shadow">
                  <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor={'#7D7D7D'}/>
                </filter>
                <filter id="icon_shadow">
                  <feDropShadow dx="1" dy="1" stdDeviation="2" floodColor={'#7D7D7D'}/>
                </filter>

                <filter id="shadow_sides">
                  <feDropShadow dx="2" dy="0" stdDeviation="2" floodColor={'#7D7D7D'}/>
                </filter>

                <filter id="highlight">
                  <feComponentTransfer in='SourceAlpha'>
                    <feFuncA type="table" tableValues="1 0"/>
                  </feComponentTransfer>
                  <feGaussianBlur stdDeviation="4"/>
                  <feOffset dx="2" dy="2" result="offsetblur"/>
                  <feFlood floodColor="rgba(0,0,0,0.7)" result="color"/>
                  <feComposite in2="offsetblur" operator="in"/>
                  <feComposite in2="SourceAlpha" operator="in"/>
                  <feMerge>
                    <feMergeNode in="SourceGraphic"/>
                    <feMergeNode/>
                  </feMerge>
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor={"white"}/>
                </filter>

                <linearGradient id="white_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="80%" stopColor="white" stopOpacity="100%"/>
                  <stop offset="100%" stopColor="white" stopOpacity="0%"/>
                </linearGradient>
                <linearGradient id="blue_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="15%" stopColor={'#d4eaf7'} stopOpacity="100%"/>
                  <stop offset="100%" stopColor={'#d4eaf7'} stopOpacity="0%"/>
                </linearGradient>
                <linearGradient id="gray_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="15%" stopColor={'#F2F2F2'} stopOpacity="100%"/>
                  <stop offset="100%" stopColor={'#F2F2F2'} stopOpacity="0%"/>
                </linearGradient>
              </defs>


              {processedCases.map( ( c ) => {

                return (
                  <SVGCase key={Math.random()}
                           case={c}
                           x={c.x}
                           y={c.y}
                           width={c.width}
                           canvasWidth={factorizedCanvasWidth}
                           height={c.height}
                           openCases={openCases}
                           toggle={( id: string ) => handleCaseClick( id )}
                           onShowInfoText={( title: string[] | undefined, content: string | undefined ) => {
                             setInfoDialogContent( {
                               title: title ? title : [""],
                               text: content ? content : ""
                             } )
                           }}
                           onItemSymbolClick={( isDialog: boolean, title: string, text: string | undefined,
                             x: number, y: number ) => {
                             if( isDialog ) {
                               setItemSymbolDialog( { title: title, text: text } )
                             }
                             else {
                               setItemSymbolOverlay( { text: text, x: x, y: y } )
                             }
                           }}
                           fixedLabels={fixedLabels}
                           language={activeLang}
                           colors={colors}
                           dimensions={dimensions}
                           isLowMode={false}
                           infoIconSize={infoIconSize}
                           predefinedAndCustomSymbols={[...predefinedSymbols, ...customSymbols]}

                  />
                )
              } )
              }

              {processedParticipants.map( ( p: ProcessedParticipant, index: number ) => {
                return (
                  <SVGParticipant key={Math.random()}
                                  participant={p.participant}
                                  x={p.x}
                                  y={p.y}
                                  width={p.width}
                                  height={actualHeight}
                                  fontSize={PARTICIPANTS_LABEL_SIZE}
                                  index={index}
                                  canvasWidth={factorizedCanvasWidth}
                                  colors={colors}
                                  isLowMode={false}
                  />
                );
              } )}

              {processedCases.map( ( c ) => {

                if( openCases.includes( c.id ) ) {

                  let anies = c.actions.map( ( processedAction: ProcessedAction, index: number ) => {

                    return (
                      <SVGAction key={index}
                                 processedAction={processedAction}
                                 boxTypes={boxTypesState}
                                 processedParticipants={processedParticipants}
                                 activeObjects={activeObjects}
                                 onShowInfoText={( title: string[] | undefined, text: string | undefined ) => {
                                   setInfoDialogContent( {
                                     title: title ? title : [""],
                                     text: text ? text : ""
                                   } )
                                 }}
                                 onClick={() => handleObjectClick( c, processedAction.action, false )}
                                 onItemSymbolClick={( isDialog: boolean, title: string, text: string | undefined,
                                   x: number, y: number ) => {
                                   if( isDialog ) {
                                     setItemSymbolDialog( { title: title, text: text } )
                                   }
                                   else {
                                     setItemSymbolOverlay( { text: text, x: x, y: y } )
                                   }
                                 }}
                                 canvasWidth={factorizedCanvasWidth}
                                 infoIconSize={infoIconSize}
                                 showDetailedModel={showDetailedModel}
                                 fixedLabels={fixedLabels}
                                 language={activeLang}
                                 isLowMode={false}
                                 colors={colors}
                                 predefinedAndCustomSymbols={[...predefinedSymbols, ...customSymbols]}
                      />

                    );
                  } );

                  let dataSources = c.dataSources.map( ( processedDataSource: ProcessedDataSource, index: number ) => {

                    return (
                      <SVGDataSource key={index}
                                     processedDataSource={processedDataSource}
                                     boxTypes={boxTypesState}
                                     activeObjects={activeObjects}
                                     onShowInfoText={( title: string[] | undefined, content: string | undefined ) => {
                                       setInfoDialogContent( {
                                         title: title ? title : [""],
                                         text: content ? content : ""
                                       } )
                                     }}
                                     onItemSymbolClick={( isDialog: boolean, title: string, text: string | undefined,
                                       x: number, y: number ) => {
                                       if( isDialog ) {
                                         setItemSymbolDialog( { title: title, text: text } )
                                       }
                                       else {
                                         setItemSymbolOverlay( { text: text, x: x, y: y } )
                                       }
                                     }}
                                     canvasWidth={factorizedCanvasWidth}
                                     infoIconSize={infoIconSize}
                                     onClick={() =>
                                       handleObjectClick( c, processedDataSource.dataSource, false )
                                     }
                                     fixedLabels={fixedLabels}
                                     language={activeLang}
                                     isLowMode={false}
                                     colors={colors}
                                     predefinedAndCustomSymbols={[...predefinedSymbols, ...customSymbols]}
                      />
                    )
                      ;
                  } );
                  let dataPurposes = c.dataPurposes.map(
                    ( processedDataPurposes: ProcessedDataPurpose, index: number ) => {

                      return (
                        <SVGDataPurpose key={index}
                                        processedDataPurpose={processedDataPurposes}
                                        boxTypes={boxTypesState}
                                        activeObjects={activeObjects}
                                        onShowInfoText={( title: string[] | undefined,
                                          content: string | undefined ) => {
                                          setInfoDialogContent( {
                                            title: title ? title : [""],
                                            text: content ? content : ""
                                          } )
                                        }}
                                        onItemSymbolClick={( isDialog: boolean, title: string, text: string | undefined,
                                          x: number, y: number ) => {
                                          if( isDialog ) {
                                            setItemSymbolDialog( { title: title, text: text } )
                                          }
                                          else {
                                            setItemSymbolOverlay( { text: text, x: x, y: y } )
                                          }
                                        }}
                                        infoIconSize={infoIconSize}
                                        onClick={() => handleObjectClick( c, processedDataPurposes.dataPurpose, false )}
                                        canvasWidth={factorizedCanvasWidth}
                                        fixedLabels={fixedLabels}
                                        language={activeLang}
                                        isLowMode={false}
                                        colors={colors}
                                        predefinedAndCustomSymbols={[...predefinedSymbols, ...customSymbols]}
                        />
                      );
                    } );

                  let connections = c.connections.map( ( processedConnection: ProcessedConnection, index: number ) => {

                    return (
                      <SVGConnection key={index}
                                     processedConnection={processedConnection}
                                     processedCase={c}
                                     activeObjects={activeObjects}
                                     canvasWidth={factorizedCanvasWidth}
                                     onEllipsisClick={( ellipsisDialogData: EllipsisDialogData ) => {
                                       setEllipsisDialogData( ellipsisDialogData );
                                     }}
                                     showDetailedModel={showDetailedModel}
                                     isLowMode={false}
                                     colors={colors}
                      />
                    );
                  } );
                  let caseActionIdentifier = processedParticipants.map( ( p: ProcessedParticipant, index: number ) => {
                    let size = getAbsoluteValue( width, CASE_HEADER_HEIGHT );
                    return (
                      <SVGCaseActionIdentifier key={index}
                                               x={p.x + p.participant.borderSize * 2}
                                               y={c.y}
                                               width={p.width - p.participant.borderSize * 4 >= 0 ?
                                                 p.width - p.participant.borderSize * 4 :
                                                 0}
                                               height={getCaseHeaderHeight( [c.label], factorizedCanvasWidth )}
                                               size={size}
                                               hasAction={c.actions.filter(
                                                 a => a.action.participantID === p.participant.id ).length > 0}
                                               onClick={() => handleCaseClick( c.id )}
                                               colors={colors}
                                               isDetailedIcons={isDetailedIcons}
                                               participantIndex={index}
                                               participants={participants}
                      />
                    );
                  } );

                  return (
                    <React.Fragment key={Math.random()}>
                      {connections}
                      {dataPurposes}
                      {anies}
                      {dataSources}
                      {caseActionIdentifier}
                    </React.Fragment>
                  );
                }
                else {
                  let caseActionIdentifier = processedParticipants.map( ( p: ProcessedParticipant, index: number ) => {
                    let size = getAbsoluteValue( width, CASE_HEADER_HEIGHT );

                    return (
                      <SVGCaseActionIdentifier key={index}
                                               x={p.x}
                                               y={c.y}
                                               width={p.width}
                                               height={getCaseHeaderHeight( [c.label], factorizedCanvasWidth )}
                                               size={size}
                                               hasAction={c.actions.filter(
                                                 a => a.action.participantID === p.participant.id ).length > 0}
                                               onClick={() => handleCaseClick( c.id )}
                                               colors={colors}
                                               isDetailedIcons={isDetailedIcons}
                                               participantIndex={index}
                                               participants={participants}
                      />
                    );
                  } );

                  return (
                    <React.Fragment key={Math.random()}>
                      {caseActionIdentifier}
                    </React.Fragment>
                  );
                }
              } )}

              {!!itemSymbolOverlay && (
                <SVGItemSymbolOverlay text={itemSymbolOverlay.text}
                                      x={itemSymbolOverlay.x}
                                      y={itemSymbolOverlay.y}
                                      width={processedParticipants.length > 0 ?
                                        processedParticipants[0].width :
                                        canvasWidth * 0.1}
                                      onMouseLeave={() => {
                                        setItemSymbolOverlay( null )
                                      }}
                                      canvasWidth={factorizedCanvasWidth}
                                      fixedLabels={fixedLabels}
                                      language={activeLang}
                                      colors={colors}
                />
              )}

              {!!ellipsisDialogData && (
                <SVGEllipsisDialog ellipsisDialogData={ellipsisDialogData}
                                   onMouseLeave={() => {
                                     setEllipsisDialogData( null )
                                   }}
                                   canvasWidth={factorizedCanvasWidth}
                                   participantsWidth={processedParticipants[0].width}
                                   isLowMode={false}
                                   colors={colors}
                />
              )}

            </svg>
          </div>


        </div>

        {!!legendShown && (
          <LegendDialog html={""}
                        title={fixedLabels.legend}
                        onClose={() => toggleLegendShown()}
                        canvasHeight={actualHeight}
                        canvasWidth={canvasWidth}
                        canvasX={canvasX}
                        canvasY={canvasY}
                        isDialogFullsize={isDialogFullsize}
                        fixedLabels={fixedLabels}
                        language={activeLang}
                        connectionTypes={connectionTypesState}
                        boxTypes={boxTypesState}
                        isLowMode={false}
                        onShowInfoText={( title: string[] | undefined, content: string | undefined ) => {
                          setInfoDialogContent( {
                            title: title ? title : [""],
                            text: content ? content : ""
                          } )
                        }}
                        onCreditsClick={() => {
                          setIsCreditsDialog( true );
                          setIsInfoDialogBlurred( true );
                        }}
                        onTutorialClick={() => {
                          setActiveTutorial( tutorial );
                          toggleLegendShown();
                        }}
                        hasTutorial={!!tutorial}
                        sourceInformation={sourceInformation}
                        revisionHistory={revisionHistory}
                        colors={colors}
                        customSymbols={[...predefinedSymbols, ...customSymbols]}
          />
        )}

        {!!itemSymbolDialog && (
          <Dialog
            html={itemSymbolDialog.text}
            title={itemSymbolDialog.title}
            onClose={() => setItemSymbolDialog( null )}
            blur={isGlossarDialogBlurred}
            canvasHeight={actualHeight}
            canvasWidth={canvasWidth}
            canvasX={canvasX}
            canvasY={canvasY}
            isDialogFullsize={isDialogFullsize}
          />
        )}

        {!!glossarInfoContent && (
          <GlossarDialog html={glossarInfoContent.content}
                         title={glossarInfoContent.title}
                         onClose={() => setGlossarInfoContent( null )}
                         canvasHeight={actualHeight}
                         canvasWidth={canvasWidth}
                         canvasX={canvasX}
                         canvasY={canvasY}
                         isDialogFullsize={isDialogFullsize}
          />
        )}


        {isCreditsDialog && (
          <CreditsDialog onClose={() => {
            setIsCreditsDialog( false );
            setIsInfoDialogBlurred( false );
          }}
                         canvasHeight={actualHeight}
                         canvasWidth={canvasWidth}
                         canvasX={canvasX}
                         canvasY={canvasY}
                         isDialogFullsize={isDialogFullsize}
                         onLegalNoticeClick={() => {
                           setIsLegalNoticeDialog( true )
                         }}
                         fixedLabels={fixedLabels}
                         language={activeLang}
          />
        )}

        {isLegalNoticeDialog && (
          <LegalNoticeDialog onClose={() => {
            setIsLegalNoticeDialog( false );
          }}
                             canvasHeight={actualHeight}
                             canvasWidth={canvasWidth}
                             canvasX={canvasX}
                             canvasY={canvasY}
                             isDialogFullsize={isDialogFullsize}
                             language={activeLang}
          />
        )}

        {!isBrowserCompatible && !isBrowserCompabilityWarningClosed && (
          <BrowserCompatibilityWarning onClose={() => {
            setIsBrowserCompabilityWarningClosed( true )
          }}/>
        )}

        {isMobile && isPortrait && !portraitWarningShown && (
          <Dialog html={"Bitte drehen Sie Ihr Smartphone!"}
                  title={"Smartphone Orientierung"}
                  onClose={() => {
                    localStorage.setItem( "portraitModeTimestamp", Date.now().toString() );
                    setPortraitWarningShown( true );
                  }}
                  blur={isGlossarDialogBlurred}
                  canvasHeight={actualHeight}
                  canvasWidth={canvasWidth}
                  canvasX={canvasX}
                  canvasY={canvasY}
                  isDialogFullsize={isDialogFullsize}
          />
        )

        }

      </div>
    </div>
  );

};

export { ModelViewer };
