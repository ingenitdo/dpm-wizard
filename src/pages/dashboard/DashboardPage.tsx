/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useState } from "react";

import { lightTheme } from "../../styles/light_theme";
import { Language } from "../../entities/Language";
import { dropShadow, fadeIn } from "../../styles/effects";
import { ModelUploadDialog } from "./components/ModelUploadDialog";
import { Model } from "../../entities/Model";
import { Icon } from '../../components/icon_picker/Icon';
import { ModelTemplateDialog } from "./components/ModelTemplateDialog";
import { InstructionDialog } from "./components/InstructionDialog";

export interface Props {
  pathname: string;
  activeLanguage: Language;
  onCreateNewModel: (  ) => void;
  onFile: ( model: Model ) => void;
}

const DashboardPage: React.FC<Props> = props => {
  const [isModelUploadDialogOpen, setIsModelUploadDialogOpen] = useState<boolean>( false );
  const [isModelTemplateDialogOpen, setIsModelTemplateDialogOpen] = useState<boolean>( false );
  const [isInstructionDialogOpen, setIsInstructionDialogOpen] = useState<boolean>( false );

  const renderLink = ( label: string, icon: string, func?: () => void,  href?: string ) => {
    const [isHovering, setIsHovering] = useState<boolean>( false );

    return (
      <a css={theme => (
        [
          {
            border: isHovering ? ("1px solid" + theme.COLORS.PRIMARY.DEFAULT) : ("1px solid" + theme.COLORS.INACTIVE),
            borderRadius: "12px",
            height: 3.2 + "vw",
            minHeight: 40,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            transition: "all 0.5s ease-in-out",
            fontSize: 1 + "vw",
            fontWeight: 700,
            fontFamily: "Helvetica",
            color: isHovering ? theme.COLORS.PRIMARY.DEFAULT : theme.COLORS.INACTIVE,
            textDecoration: "none",
            padding: "0 1.6vw",
            textTransform: "uppercase"
          },
          dropShadow
        ]
      )}
         onClick={func}
         onMouseEnter={() => setIsHovering( true )}
         onMouseLeave={() => setIsHovering( false )}
         href={href}
         target={href && "_blank"}
      >
        <div css={theme => ([{
          width: 1.4 + "vw",
          height: 1.4 + "vw"
        }])}>
          <Icon name={icon} color={isHovering ? lightTheme.COLORS.PRIMARY.DEFAULT : lightTheme.COLORS.INACTIVE}/>
        </div>
        <div css={theme => (
          [
            {
              marginLeft: 1 + "vw"
            }
          ]
        )}>
          {label}
        </div>
      </a>

    );
  };

  return (
    <React.Fragment>
      <div css={theme => (
        [
          {
            margin: "calc( 5vh + " + theme.DIMENSIONS.HEADER.DASHBOARD_HEIGHT + " )  5vw 5vh 5vw",

            minHeight: "calc(100vh - 10vh - " + (props.pathname === "/"
              ? theme.DIMENSIONS.HEADER.DASHBOARD_HEIGHT
              : theme.DIMENSIONS.HEADER.WIZARD_HEIGHT) + " )",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          },
          fadeIn
        ]
      )}>
        <div css={theme => (
          [
            {
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2 + "vw",

              "@media (max-width: 1200px)": {
                flexDirection: "column"
              }
            }
          ]
        )}>
          <div css={theme => (
            [
              {
                width: "40vw",
                marginRight: "10%",
                "@media (max-width: 1200px)": {
                  width: "100%",
                  marginRight: "0",
                }
              }
            ]
          )}>
            <h1 css={theme => (
              [
                {
                  marginTop: 0,
                  fontSize: "1.4vw",
                  fontWeight: 500,
                  fontFamily: "Helvetica",
                  color: theme.COLORS.PRIMARY.DEFAULT,
                  marginBottom: "10px"
                }
              ]
            )}>Wie aus Transparenz Wettbewerbsvorteile werden</h1>
            <h2 css={theme => (
              [
                {
                  fontSize: "1vw",
                  fontFamily: "Helvetica",
                  color: theme.COLORS.TEXT,
                  fontWeight: 500
                }
              ]
            )}>
              Gemeinsam mit der concern GmbH sowie der ingenit GmbH hat die Themenplattform Verbraucherbelange in der Digitalisierung eine Software für mehr Datentransparenz entwickelt: den „Data Process Modeler“.
              <br/><br/>
              Mit Hilfe der Software können Unternehmen auf ihrer Webseite anschaulich visuell darstellen, welche Daten sie für welche Zwecke verarbeiten. Damit gibt die Themenplattform Unternehmen eine Hilfestellung, um freiwillig über die beispielsweise in der DSGVO geforderten Transparenzpflichten hinauszugehen und einen verantwortungsvollen Umgang mit Verbraucherdaten zu kommunizieren.
              <br/><br/>
              Die Software wird Unternehmen kostenfrei und open source zur Verfügung gestellt und ist durch das Bayerische Staatsministerium für Umwelt und Verbraucherschutz gefördert.
              <br/><br/>
              Hintergrundinformationen zu CDR und dem Data Process Modeler finden Sie bei der <a css={theme => ([{
                textDecoration: "none",
                color: "#006BA2"
            }])} href={"https://www.bayern-innovativ.de/netzwerke-und-thinknet/uebersicht-digitalisierung/verbraucherbelange/seite/data-process-modeler"} target={"_blank"}>ZD.B-Themenplattform Verbraucherbelange</a>.
            </h2>
          </div>
          <div css={theme => (
            [
              {
                width: "30vw",
                margin: "0 10% 0 0",
                height: "calc(100% - 52px)",
                "& > *": {
                  marginBottom: "30px"
                },
                "@media (max-width: 1200px)": {
                  width: "100%",
                  marginRight: "0"
                }
              }
            ]
          )}>

            {renderLink( props.activeLanguage.PAGE.DASHBOARD.LINK_1, "new", () => {
              props.onCreateNewModel();
            })}
            {renderLink( props.activeLanguage.PAGE.DASHBOARD.LINK_2, "upload", () => {
              setIsModelUploadDialogOpen( true )
            } )}
            {renderLink(  props.activeLanguage.PAGE.DASHBOARD.LINK_3, "template", () => {
              setIsModelTemplateDialogOpen( true )
            } )}
            {renderLink( props.activeLanguage.PAGE.DASHBOARD.LINK_4, "documentation", () => {
              setIsInstructionDialogOpen(true);
            } )}
          </div>
        </div>
        <div css={theme => (
          [
            {
              display: "flex",
              justifyContent: "space-between",
              "@media (max-width: 1200px)": {
                flexDirection: "column"
              }
            }
          ]
        )}>

          <div css={theme => (
            [
              {
                "@media (max-width: 1200px)": {
                  alignSelf: "flex-end"
                }
              }
            ]
          )}>
            <a href={"https://www.stmuv.bayern.de/"}
               target="_blank"
            >
              <img src="img/stmuv.jpg" css={theme => (
                [
                  {
                    height: "100px",
                    transition: "height 0.5s ease-in-out"
                  }
                ]
              )} alt="gefördert durch Bayerisches Staatrsministerium für Umwelt und Verbraucherschutz"/>
            </a>
          </div>
          <div>
            <div css={theme => (
              [
                {
                  borderBottom: "1px solid " + theme.COLORS.TEXT,

                  fontSize: "0.8vw",
                  fontWeight: 500,
                  fontFamily: "Helvetica",
                  color: theme.COLORS.TEXT,
                  paddingBottom: "10px",
                  marginBottom: "10px",

                  "@media (max-width: 1200px)": {
                    marginTop: "20px"
                  }
                }
              ]
            )}>
              Konzept und Umsetzung durch
            </div>
            <div css={theme => (
              [
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }
              ]
            )}>
              <a href={"https://concern.de/"}
                 target="_blank"
              >
                <img src="img/concern_logo.png"

                     css={theme => (
                       [
                         {
                           height: "40px",
                           transition: "height 0.5s ease-in-out",
                           marginRight: "40px"
                         }
                       ]
                     )} alt="Concern"/>
              </a>
              <a href={"https://ingenit.com/"}
                 target="_blank"
              >
                <img src="img/ingenit.png" css={theme => (
                  [
                    {
                      height: "60px",
                      transition: "height 0.5s ease-in-out"
                    }
                  ]
                )} alt="Ingenit"/>
              </a>
            </div>
          </div>

        </div>

      </div>


      {isModelUploadDialogOpen && (
        <ModelUploadDialog onClose={() => {
          setIsModelUploadDialogOpen( false )
        }}
                           onUploadFile={props.onFile}
        />
      )}
      {isModelTemplateDialogOpen && (
        <ModelTemplateDialog onClose={() => {
          setIsModelTemplateDialogOpen( false )
        }}
                             onTemplateFile={props.onFile}
        />
      )}

      {isInstructionDialogOpen && (
        <InstructionDialog onClose={() => {
          setIsInstructionDialogOpen( false )
        }}
                             onInstructionFile={props.onFile}
        />
      )}

    </React.Fragment>
  )
};

export { DashboardPage };