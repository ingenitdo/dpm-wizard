/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useEffect, useState } from "react";
import { Dialog } from "../../../../components/dialog/Dialog";
import { DialogButtonBar } from "../../../../components/dialog/DialogButtonBar";
import { Button } from "../../../../components/Button";
import { DialogSidebar } from '../../../../components/dialog/dialog_sidebar/DialogSidebar';
import { DialogSidebarHeader } from "../../../../components/dialog/dialog_sidebar/DialogSidebarHeader";
import { DialogSidebarItem } from "../../../../components/dialog/dialog_sidebar/DialogSidebarItem";
import { DialogBody } from "../../../../components/dialog/DialogBody";

import { TabConnection } from "./TabConnection";
import { useModelState } from "../useModelState";
import { Model } from '../../../../entities/Model';
import { CaseTab } from "./TabCase";
import { TabBoxTypes } from "./TabBoxTypes";
import { Language } from "../../../../entities/Language";
import { TabItemSymbols } from "./TabItemSymbols";
import { TabTitleAndControls } from "./TabTitleAndControls";
import { TabProcess } from "./TabProcess";
import { TabMasterData } from "./TabMasterData";
import { TabLegend } from "./TabLegend";
import { TabParticipants } from "./TabParticipants";
import { TabGlossary } from "./TabGlossary";
import { TabTutorial } from "./TabTutorial";

type SettingsTabType =
  "master-data"
  | "title-and-controls"
  | "box-types"
  | "process"
  | "participants"
  | "case"
  | "data"
  | "connection"
  | "item-symbols"
  | "glossary"
  | "legend"
  | "tutorial";

export interface Props {
  model: Model;
  activeLanguage: Language;
  showDetailedModel: boolean;

  onClose: () => void;
  onSave: ( model: Model ) => void;
}

const SettingsDialog: React.FC<Props> = props => {

  const [activeTab, setActiveTab] = useState<SettingsTabType>( "master-data" );

  const {
    model: tempModel,
    updateModel: updateTempModel,
    replaceModel: replaceTempModel
  } = useModelState( props.model );

  // initialize local dialog state with global model when opening
  useEffect( () => {
    replaceTempModel( props.model );
  }, [] );

  const handleAbortion = () => {
    props.onClose();
  };

  const handleSave = () => {
    props.onSave( tempModel );
  };

  return (
    <Dialog size={"fullsize"} hasSideBar>
      <DialogSidebar>
        <DialogSidebarHeader>Einstellungen</DialogSidebarHeader>
        <div css={theme => ([{
          height: "calc(100% - 5vw)",
          overflow: "auto"
        }])}>
          <DialogSidebarItem onClick={() => {
            setActiveTab( "master-data" )
          }}
                             isActive={activeTab === "master-data"}
          >
            Stammdaten
          </DialogSidebarItem>
          <DialogSidebarItem onClick={() => {
            setActiveTab( "title-and-controls" )
          }}
                             isActive={activeTab === "title-and-controls"}
          >
            Titel & Steuerelemente
          </DialogSidebarItem>
          <DialogSidebarItem onClick={() => {
            setActiveTab( "process" )
          }}
                             isActive={activeTab === "process"}
          >
            Kopfzeile Datenkategorien und Verwendungszweck
          </DialogSidebarItem>
          <DialogSidebarItem onClick={() => {
            setActiveTab( "participants" )
          }}
                             isActive={activeTab === "participants"}
          >
            Prozessbeteiligte
          </DialogSidebarItem>
          <DialogSidebarItem onClick={() => {
            setActiveTab( "case" )
          }}
                             isActive={activeTab === "case"}
          >
            Kapitel
          </DialogSidebarItem>
          <DialogSidebarItem onClick={() => {
            setActiveTab( "box-types" )
          }}
                             isActive={activeTab === "box-types"}
          >
            Datenkategorien, Prozessschritte & Verwendungszwecke
          </DialogSidebarItem>
          <DialogSidebarItem onClick={() => {
            setActiveTab( "item-symbols" )
          }}
                             isActive={activeTab === "item-symbols"}
          >
            Symbole
          </DialogSidebarItem>
          <DialogSidebarItem onClick={() => {
            setActiveTab( "connection" )
          }}
                             isActive={activeTab === "connection"}
          >
            Pfeile
          </DialogSidebarItem>

          <DialogSidebarItem onClick={() => {
            setActiveTab( "glossary" )
          }}
                             isActive={activeTab === "glossary"}
          >
            Glossar
          </DialogSidebarItem>

          <DialogSidebarItem onClick={() => {
            setActiveTab( "legend" )
          }}
                             isActive={activeTab === "legend"}
          >
            Legende
          </DialogSidebarItem>

          <DialogSidebarItem onClick={() => {
            setActiveTab( "tutorial" )
          }}
                             isActive={activeTab === "tutorial"}
          >
            Tutorial
          </DialogSidebarItem>
        </div>
      </DialogSidebar>
      <DialogBody>
        {activeTab === "master-data" && (
          <TabMasterData modelState={tempModel} originalModel={props.model} onUpdateTempModel={updateTempModel}/>
        )}
        {activeTab === "title-and-controls" && (
          <TabTitleAndControls modelState={tempModel} onUpdateTempModel={updateTempModel}/>
        )}
        {activeTab === "process" && (
          <TabProcess modelState={tempModel}
                      activeLanguage={props.activeLanguage}
                      showDetailedModel={props.showDetailedModel}
                      onUpdateTempModel={updateTempModel}
          />
        )}
        {activeTab === "participants" && (
          <TabParticipants modelState={tempModel}
                           showDetailedModel={props.showDetailedModel}
                           onUpdateTempModel={updateTempModel}
          />
        )}
        {activeTab === "case" && (
          <CaseTab modelState={tempModel}
                   activeLanguage={props.activeLanguage}
                   showDetailedModel={props.showDetailedModel}
                   onUpdateTempModel={updateTempModel}
          />
        )}
        {activeTab === "box-types" && (
          <TabBoxTypes modelState={tempModel}
                       activeLanguage={props.activeLanguage}
                       showDetailedModel={props.showDetailedModel}
                       onUpdateTempModel={updateTempModel}
          />
        )}
        {activeTab === "connection" && (
          <TabConnection modelState={tempModel}
                         showDetailedModel={props.showDetailedModel}
                         onUpdateTempModel={updateTempModel}
          />
        )}
        {activeTab === "item-symbols" && (
          <TabItemSymbols modelState={tempModel}
                          onUpdateTempModel={updateTempModel}
          />
        )}
        {activeTab === "glossary" && (
          <TabGlossary modelState={tempModel}
                       onUpdateTempModel={updateTempModel}
          />
        )}
        {activeTab === "legend" && (
          <TabLegend modelState={tempModel}
                     showDetailedModel={props.showDetailedModel}
                     onUpdateTempModel={updateTempModel}
          />
        )}
        {activeTab === "tutorial" && (
          <TabTutorial modelState={tempModel}
                       onUpdateTempModel={updateTempModel}
          />
        )}
      </DialogBody>
      <DialogButtonBar hasSideBar>

        <Button onClick={() => {
          handleAbortion()
        }}>Abbrechen</Button>

        <Button onClick={() => {
          handleSave()
        }} type={"primary"}>Speichern</Button>

      </DialogButtonBar>
    </Dialog>

  )
};

export { SettingsDialog };