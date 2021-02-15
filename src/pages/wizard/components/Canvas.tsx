/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useMeasure } from "react-use";

import {
  CASE_MARGIN_BOTTOM,
  HEADER_HEIGHT,
  HEADER_OFFSET,
} from "./Constants";
import { ModelUpdater } from "./useModelState";
import { Model } from "../../../entities/Model";
import { useEffect, useState } from "react";
import { Language } from "../../../entities/Language";
import { ModelViewer } from '../../../viewer/ModelViewer';
import { ModelEditor } from "./ModelEditor/ModelEditor";
import { processCases, processParticipants } from '../../../viewer/utils/Processing';
import { getAbsoluteValue } from "../../../viewer/utils/LayoutCalc";
import { CONTROLS_HEIGHT, TITLE_OFFSET } from "../../../viewer/Constants";

export interface Props {
  detailedModel: Model;
  simpleModel: Model;
  onUpdateModel: ( updater: ModelUpdater ) => void;
  activeLanguage: Language;
  showDetailedModel: boolean;
}

const Canvas: React.FC<Props> = props => {

  const [ref, { width, height }] = useMeasure();

  const [actualHeight, setActualHeight] = useState<number>( 0 );

  const [model, setModel] = useState<Model>( props.showDetailedModel ? props.detailedModel : props.simpleModel );

  useEffect( () => {
    props.showDetailedModel ? setModel( props.detailedModel ) : setModel( props.simpleModel );
  }, [props.detailedModel, props.simpleModel] );

  //Dimensions
  const canvasPadding = 80;

  const factorizedCanvasWidth = width;

  let {
    language, title, subtitle, participants, connectionTypes, boxTypes, cases,
    sourceInformation, revisionHistory, glossar, isDialogFullsize, isDetailedIcons, fixedLabels, colors
  } = model;

  const [openCases, setOpenCases] = useState<string[]>( [] );

  let processedParticipants = processParticipants( participants, factorizedCanvasWidth, actualHeight );
  let processedCases = processCases( props.showDetailedModel, cases, factorizedCanvasWidth, actualHeight,
    processedParticipants, openCases, connectionTypes, false, boxTypes );

  useEffect( () => {
    setOpenCases( cases.map( ( c: any ) => c.id ) );
  }, [cases] );

  useEffect( () => {

    const newHeight = getAbsoluteValue( factorizedCanvasWidth, HEADER_OFFSET )
      + getAbsoluteValue( factorizedCanvasWidth, TITLE_OFFSET )
      + getAbsoluteValue( factorizedCanvasWidth, CONTROLS_HEIGHT )
      + processedCases.map( item => item.height )
        .reduce( ( acc, current ) => acc + current, 0 )
      + (processedCases.length * getAbsoluteValue( factorizedCanvasWidth, CASE_MARGIN_BOTTOM ))
      + canvasPadding * 2;

    setActualHeight( newHeight );
  }, [processedCases] );

  return (
    <div id={"canvas"}
         ref={ref}
         css={theme => (
           [
             {
               border: "1px solid " + theme.COLORS.INACTIVE,
               minHeight: "60vh",
               height: (actualHeight + 200) + "px",
               backgroundSize: "20px 20px",
               backgroundImage: "linear-gradient(to right, #eee 1px, transparent 1px), linear-gradient(to bottom, #eee 1px, transparent 1px)",
               backgroundColor: model.colors.canvasBackground,

               padding: canvasPadding,
               position: "relative"
             }
           ]
         )}
    >
      <ModelViewer detailedModel={props.detailedModel}
                   simpleModel={props.simpleModel}
                   canvasHeight={"100%"}
                   showDetailedModel={props.showDetailedModel}
                   isEditorMode={true}
      />

      <ModelEditor detailedModel={props.detailedModel}
                   simpleModel={props.simpleModel}
                   showDetailedModel={props.showDetailedModel}
                   model={model}
                   canvasPadding={canvasPadding}
                   canvasWidth={factorizedCanvasWidth}
                   onUpdateModel={props.onUpdateModel}
      />

    </div>
  )
};

export { Canvas };