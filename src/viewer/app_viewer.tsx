import * as React from "react";
import { Global, jsx } from "@emotion/core";
import { globals } from "../styles/globals";
import { ModelViewer } from "./ModelViewer";
import { useState } from "react";
import { lightTheme } from "../styles/light_theme";
import { ThemeProvider } from "emotion-theming";

interface Props {
  detailedModel: any;
  simpleModel?: any;
  canvasHeight: string;
}

const AppViewer: React.FunctionComponent<Props> = props => {

  const [activeTheme, setActiveTheme] = useState( lightTheme );


  return (
    <>
      <Global styles={globals}/>
      <ThemeProvider theme={activeTheme}>

      <ModelViewer detailedModel={props.detailedModel}
                   simpleModel={props.simpleModel ? props.simpleModel : {}}
                   showDetailedModel={true}
                   canvasHeight={props.canvasHeight}
      />
      </ThemeProvider>
    </>
  );
};

export default AppViewer;
