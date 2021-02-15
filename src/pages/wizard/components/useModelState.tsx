import { useEffect, useState } from "react";
import produce from "immer";
import { useList } from "react-use";
import { cloneDeep } from "lodash";
import { Model } from "../../../entities/Model";
import JSZip from 'jszip';

export interface ModelColors {
  canvasBackground: string;
  headerSourceLabel: string;
}

export type ModelUpdater = ( draft: Model ) => void;

interface Result {
  model: Model;
  hasChanged: boolean;
  updateModel: ( updater: ModelUpdater ) => void;
  replaceModel: ( modelState: Model ) => void;
  undo: () => void;
  saveModel: () => void;
  exportModel: () => void;
}

export const useModelState = ( model: Model ): Result => {

  const [modelState, setModelState] = useState<Model>( model );
  const [history, { push: pushHistory, removeAt: removeHistoryAt }] = useList( [] );

  const [hasChanged, setHasChanged] = useState<boolean>( false );

  useEffect( () => {
    if( history.length > 0 ) {
      if( modelState === history[0] ) {
        setHasChanged( false );
      }
      else {
        setHasChanged( true );
      }
    }
  }, [modelState] );

  function undo() {
    const oldState = history[history.length - 1];
    removeHistoryAt( history.length - 1 );
    setModelState( oldState );
  }

  function updateModelState( updater: ModelUpdater ) {
    pushHistory( cloneDeep( modelState ) );
    setModelState( produce( draft => {
      updater( draft );
    } ) );
  }

  function replaceModelState( newModel: Model ) {
    pushHistory( cloneDeep( modelState ) );
    setModelState( newModel );
  }

  async function saveModelState() {
    const today = new Date().toISOString().slice( 0, 10 );
    const time = new Date().toLocaleTimeString().slice( 0, 5 ).replace( ":", "" );

    const json = JSON.stringify( modelState );
    const fileName = modelState.masterData.title;
    const blob = new Blob( [json], { type: 'application/json' } );
    const href = await URL.createObjectURL( blob );
    const link = document.createElement( 'a' );
    link.href = href;
    link.download = today + "_" + time + "_" + (fileName || "unbenannt") + ".json";
    document.body.appendChild( link );
    link.click();
    document.body.removeChild( link );
  }

  async function exportModelState() {

    const download = ( url: string ) => {
      return fetch( url ).then( resp => resp.text() );
    };

    const zip = new JSZip();

    const readmeFileBlob = await download( "readme.md" );
    const viewerFileBlob = await download( "viewer.js" );
    const htmlFileBlob = await download( "viewer.html" );

    zip.file( "readme.md", readmeFileBlob );
    zip.file( "viewer.js", viewerFileBlob );
    zip.file( "index.html", htmlFileBlob );

    const modelFileJson = JSON.stringify( modelState );
    const modelFileBlob = new Blob( [modelFileJson], { type: 'application/json' } );

    zip.file( "model.json", modelFileBlob );

    zip.generateAsync( { type: 'uint8array' } ).then( async zipFile => {
      const today = new Date().toISOString().slice( 0, 10 );
      const time = new Date().toLocaleTimeString().slice( 0, 5 ).replace( ":", "" );

      const fileName = modelState.masterData.title;
      const blob = new Blob( [zipFile], { type: 'application/zip' } );
      const href = await URL.createObjectURL( blob );
      const link = document.createElement( 'a' );

      link.href = href;
      link.download = today + "_" + time + "_" + (fileName || "unbenannt") + ".zip";
      document.body.appendChild( link );
      link.click();
      document.body.removeChild( link );
    } );
  }

  return {
    model: modelState,
    hasChanged: hasChanged,
    updateModel: updateModelState,
    replaceModel: replaceModelState,
    undo: undo,
    saveModel: saveModelState,
    exportModel: exportModelState
  }

};