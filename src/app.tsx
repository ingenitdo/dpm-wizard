/** @jsx jsx */
import { Global, jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import * as React from "react";
import { useEffect, useState } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { WizardPage } from "./pages/wizard/wizard.page";
import { Header } from "./components/Header";
import { LanguageIdentifier } from "./entities/LanguageIdentifier";
import { Language } from "./entities/Language";
import { lightTheme } from "./styles/light_theme";
import { globals } from "./styles/globals";
import { hashHistory } from "./uitls/hashHistory";
import { Model } from "./entities/Model";
import { simpleBaseModel } from "./template_models/SimpleBaseModel";
import { detailedBaseModel } from "./template_models/DetailedBaseModel";
import { useLocation } from "react-use";
import { Case } from "./entities/Case";
import { DataPurpose } from "./entities/DataPurpose";
import { Position } from "./entities/Position";
import { Action } from "./entities/Action";
import { DataSource } from "./entities/DataSource";

export interface Props {

}

const App: React.FC<Props> = props => {

  const [activeLanguageIdentifier, setActiveLanguageIdentifier] = useState<LanguageIdentifier>( "de" );
  const [activeLanguage, setActiveLanguage] = useState<Language>( undefined );
  const [activeTheme, setActiveTheme] = useState( lightTheme );
  const [simpleModel, setSimpleModel] = useState( simpleBaseModel );
  const [detailedModel, setDetailedModel] = useState( detailedBaseModel );
  const [showDetailedModel, setShowDetailedModel] = useState<boolean>( true );

  const fetchLanguage = () => {
    fetch( "i18n/" + activeLanguageIdentifier + ".json" )
      .then( res => res.json() )
      .then(
        ( result ) => {
          setActiveLanguage( result );
        },
        ( error ) => {
          alert( error );
        }
      )
  };

  useEffect( () => {
    fetchLanguage();
  }, [activeLanguageIdentifier] );

  const handleCreateNewModel = () => {
    setDetailedModel( detailedBaseModel );
    hashHistory.push( "/wizard" );
  }

  const checkHealthModel = ( model: Model ) => {

    const getCheckedPosition = ( position: Position ) => {
      return position.end < position.start ? { ...position, end: position.start } : position;
    };
    const checkedModel = {
      ...model,
      cases: model.cases.map( ( c: Case ) => {
        return {
          ...c,
          dataSources: c.dataSources.map( ( dS: DataSource ) => {
            return { ...dS, position: getCheckedPosition( dS.position ) }
          } ),
          dataPurposes: c.dataPurposes.map( ( dP: DataPurpose ) => {
            return { ...dP, position: getCheckedPosition( dP.position ) }
          } ),
          actions: c.actions.map( ( a: Action ) => {
            return { ...a, position: getCheckedPosition( a.position ) }
          } )
        }
      } )
    }
    return checkedModel;
  };

  const handleUploadModel = ( uploadedModel: Model ) => {
    const checkedModel = checkHealthModel( uploadedModel );
    setSimpleModel( checkedModel );
    setDetailedModel( checkedModel );
    hashHistory.push( "wizard" );
  }

  //needed for routing animations
  const location = useLocation();

  return (
    !!activeLanguage && (

      <ThemeProvider theme={activeTheme}>
        <Global styles={globals}/>
        <Router history={hashHistory}>
          <div>
            <Header pathname={hashHistory.location.pathname}
                    language={activeLanguage}
            />

            <Switch>
              <Route path="/wizard">
                <WizardPage simpleModel={simpleModel}
                            detailedModel={detailedModel}
                            activeLanguage={activeLanguage}
                            theme={activeTheme}
                            onChangeTheme={( theme: any ) => {
                              setActiveTheme( theme )
                            }}
                            showDetailedModel={showDetailedModel}
                            setShowDetailedModel={( value: boolean ) => {
                              setShowDetailedModel( value )
                            }}
                />
              </Route>
              <Route path="/">
                <DashboardPage pathname={hashHistory.location.pathname}
                               activeLanguage={activeLanguage}
                               onCreateNewModel={handleCreateNewModel}
                               onUploadFile={( uploadedModel: Model ) => {
                                 handleUploadModel( uploadedModel );
                               }}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    )

  )

};

export { App };