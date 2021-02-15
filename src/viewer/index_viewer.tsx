import * as React from "react";
import * as ReactDOM from "react-dom";
import './index_viewer.css';
import AppViewer from "./app_viewer";
import devModel from "./dev-model.json";

function init( container: Element, canvasHeight: string, detailedModel: any, simpleModel?: any) {
  ReactDOM.render(
    <React.StrictMode>
      <AppViewer detailedModel={detailedModel}
                 simpleModel={simpleModel}
                 canvasHeight={canvasHeight}
      />
    </React.StrictMode>,
    container
  );
}

//@ts-ignore
window.initDpmViewer = init;

let container = document.querySelector( "*[dpm-viewer]" );

if(process.env.NODE_ENV === 'development') {
  init( container!, "100vh", devModel, undefined);
} else {
  if( !!container ) {
    let detailedModelUrl = container.getAttribute( "data-detailed-model-url" );
    let simpleModelUrl = container.getAttribute( "data-simple-model-url" );
    let canvasHeight = container.getAttribute( "canvasHeight" );
    if( !!detailedModelUrl ) {
      fetch( detailedModelUrl ).then( detailedModelResponse => {
        detailedModelResponse.json().then( detailedModel => {
          if( !!simpleModelUrl ) {
            fetch( simpleModelUrl ).then( simpleModelResponse => {
              simpleModelResponse.json().then( simpleModel => {
                init( container!, canvasHeight || "100%", detailedModel, simpleModel );
              } )
            } );
          } else {
            init(container!, canvasHeight || "100%", detailedModel, undefined );
          }
        });
      });
    }
  }
}
