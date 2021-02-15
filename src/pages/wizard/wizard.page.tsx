/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { Fragment, useState } from "react";
import { Icon, IconName } from "../../components/Icon";
import { lightTheme } from "../../styles/light_theme";
import { Language } from "../../entities/Language";
import { fadeIn } from "../../styles/effects";
import { SettingsDialog } from "./components/SettingsDialog/SettingsDialog";
import { NavigationDialog } from "./components/NavigationDialog";
import { Canvas } from "./components/Canvas";
import { useModelState } from "./components/useModelState";
import { Model } from "../../entities/Model";
import { PreviewDialog } from "./components/PreviewDialog/PreviewDialog";
import { darkTheme } from "../../styles/dark_theme";
import { ThemeToggle } from "./components/ThemeToggle";
import { ViewerModeToggle } from "./components/ViewerModeToggle";

export interface Props {
  activeLanguage: Language;
  simpleModel: Model;
  detailedModel: Model;

  theme: any;
  onChangeTheme: ( theme: any ) => void;

  showDetailedModel: boolean;
  setShowDetailedModel: ( value: boolean ) => void;
}

const WizardPage: React.FC<Props> = props => {

  const [isLightTheme, setIsLightTheme] = useState<boolean>( true );

  const [showSettingsDialog, setShowSettingsDialog] = useState<boolean>( false );
  const [showPreviewDialog, setShowPreviewDialog] = useState<boolean>( false );
  const simpleModel = useModelState( props.simpleModel );
  const detailedModel = useModelState( props.detailedModel );

  const renderDivider = () => {
    return (
      <div css={theme => ([{
        height: "32px",
        width: "1px",
        backgroundColor: theme.COLORS.INACTIVE,
        margin: "0 20px"
      }])}/>
    )
  };

  const renderButton = ( func: () => void, label: string, icon: IconName ) => {
    const [isHovering, setIsHovering] = useState<boolean>( false );

    return (
      <div css={theme => (
        [
          {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            transition: "all 0.5s ease-in-out",
            fontSize: "0.8vw",
            fontWeight: 700,
            fontFamily: "Helvetica",
            color: isHovering ? theme.COLORS.PRIMARY.DEFAULT : theme.COLORS.INACTIVE,
            textDecoration: "none",
            textTransform: "uppercase",
            height: "1.2vw"
          }
        ]
      )}
           onMouseEnter={() => setIsHovering( true )}
           onMouseLeave={() => setIsHovering( false )}
           onClick={func}
      >
        <div css={theme => (
          [
            {
              marginRight: "20px"
            }
          ]
        )}>
          {label}
        </div>
        <Icon name={icon} color={isHovering ? lightTheme.COLORS.PRIMARY.DEFAULT : lightTheme.COLORS.INACTIVE}/>
      </div>

    );
  };

  return (
    <Fragment>
      <div css={theme => (
        [
          {
            margin: "calc( 5vh + " + theme.DIMENSIONS.HEADER.WIZARD_HEIGHT + " ) 5vw 5vh 5vw"
          },
          fadeIn
        ]
      )}>
        <div css={theme => (
          [
            {
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2.5%",
              alignItems: "center"
            }
          ]
        )}>
          <div css={theme => (
            [
              {
                color: theme.COLORS.PRIMARY.DEFAULT,
                fontSize: "1.2vw",
                fontFamily: "Helvetica",
                fontWeight: 700
              }
            ]
          )}>{props.showDetailedModel ? detailedModel.model.masterData.title : simpleModel.model.masterData.title}
          </div>
          <div css={theme => (
            [
              {
                display: "flex",
                alignItems: "center"
              }
            ]
          )}>
            {renderButton( () => {
              setShowSettingsDialog( true )
            }, props.activeLanguage.PAGE.WIZARD.BUTTON_1, "cog" )}
            {renderDivider()}
            {renderButton( () => {
              setShowPreviewDialog( true )
            }, props.activeLanguage.PAGE.WIZARD.BUTTON_2, "desktop" )}
            {renderDivider()}
            {renderButton( () => {
              props.showDetailedModel ? detailedModel.saveModel() : simpleModel.saveModel()
            }, props.activeLanguage.PAGE.WIZARD.BUTTON_3, "harddrive" )}
            {renderDivider()}
            {renderButton( () => {
                props.showDetailedModel ? detailedModel.exportModel() : simpleModel.exportModel();
              },
              props.activeLanguage.PAGE.WIZARD.BUTTON_4, "share" )}
          </div>
        </div>

        <ViewerModeToggle showDetailedModel={props.showDetailedModel}
                          onChange={( value ) => {
                            props.setShowDetailedModel( value );
                          }}
        />
        <ThemeToggle label={"Farbschema"} isActive={isLightTheme} onClick={() => {
          if( isLightTheme ) {
            setIsLightTheme( false );
            props.onChangeTheme( darkTheme );
          }
          else {
            setIsLightTheme( true );
            props.onChangeTheme( lightTheme );
          }
        }}/>


        <Canvas detailedModel={detailedModel.model}
                simpleModel={simpleModel.model}
                onUpdateModel={props.showDetailedModel ? detailedModel.updateModel : simpleModel.updateModel}
                activeLanguage={props.activeLanguage}
                showDetailedModel={props.showDetailedModel}
        />

      </div>

      {
        showSettingsDialog && (
          <SettingsDialog model={props.showDetailedModel ? detailedModel.model : simpleModel.model}
                          activeLanguage={props.activeLanguage}
                          showDetailedModel={props.showDetailedModel}
                          onClose={() => {
                            setShowSettingsDialog( false )
                          }}
                          onSave={model => {
                            props.showDetailedModel ?
                              detailedModel.replaceModel( model ) :
                              simpleModel.replaceModel( model );
                            setShowSettingsDialog( false )
                          }}
          />
        )
      }

      {
        showPreviewDialog && (
          <PreviewDialog simpleModel={simpleModel.model}
                         detailedModel={detailedModel.model}
                         onClose={() => {
                           setShowPreviewDialog( false )
                         }}
          />
        )
      }

      <NavigationDialog isOpen={detailedModel.hasChanged || simpleModel.hasChanged}/>

    </Fragment>
  )
};

export { WizardPage };