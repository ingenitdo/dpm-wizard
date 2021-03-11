/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { FixedLabels } from "../../entities/FixedLabels";
import imgZdb from "../../../../../../assets/img/Zentrum-Digitalisierung.Bayern.jpg";
import imgConcern from "../../../../../../assets/img/concern.png";
import imgIngenit from "../../../../../../assets/img/ingenit.png";
import imgStMUV from "../../../../../../assets/img/StMUV.jpg";
import imgGithub from "../../../../../../assets/img/github.png";

interface Props {
  onClose: () => void;
  canvasHeight: number;
  canvasWidth: number;
  canvasX: number;
  canvasY: number;
  isDialogFullsize: boolean;
  onLegalNoticeClick: () => void;
  fixedLabels: FixedLabels;
  language: FixedLabels;
}

const CreditsDialog: React.FunctionComponent<Props> = props => {
  return (

    <div css={theme => ([{
      position: props.isDialogFullsize ? "fixed" : "absolute",
      top: props.isDialogFullsize ? 0 : props.canvasY,
      left: props.isDialogFullsize ? 0 : props.canvasX,
      width: props.isDialogFullsize ? '100%' : props.canvasWidth,
      height: props.isDialogFullsize ? '100%' : props.canvasHeight,
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: props.isDialogFullsize ? 100000 : 'initial',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }])}>

      <div css={theme => ({
        width: "80vw",
        "@media (min-width: 800px)": {
          width: "65vw",
        },
        "@media (min-width: 1100px)": {
          width: "50vw",
        },
        "@media (min-width: 1400px)": {
          width: "30vw",
        },
        height: "auto",
        maxHeight: "90%",
        overflow: "auto",
        backgroundColor: "white",
        webkitBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
        mozBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
        boxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
        display: "flex",
        flexDirection: "column"
      })}
      >

        <div css={theme => ([{
          margin: '5%'
        }])}>
          <div css={theme => ([{
            width: '50%'
          }])}>
            <a href={"https://www.bayern-innovativ.de/netzwerke-und-thinknet/uebersicht-digitalisierung/verbraucherbelange"} target={"_blank"}>
              <img alt={"Zentrum Digitalisierung.Bayern"} width={"100%"} src={"img/zdb_logo.jpg"}/>
            </a>
          </div>


          <div>
            <h1 css={theme => ([{
              fontSize: "calc(24px + 0.4vw)",
              color: '#006ba2'
            }])}>
              Data Process Modeler
            </h1>
            <h2 css={theme => ([{
              fontSize: "calc(12px + 0.4vw)",

            }])}>
              {props.fixedLabels.toolDescription || props.language.toolDescription!}:
            </h2>
          </div>


          <div css={theme => ([{
            display: 'flex',
            marginTop: '5%',
            flexDirection: 'column'
          }])}>
              <h2 css={theme => ([{
                fontSize: "calc(12px + 0.4vw)",
              }])}>
                {props.fixedLabels.implementationBy || props.language.implementationBy!}:
              </h2>
            <div css={theme => ([{
              display: 'flex',
              alignItems: "center",
              flexDirection: 'row'
            }])}>
              <a style={{width:"50%"}} href={"https://www.concern.de/"} target={"_blank"}>
                <img alt={"concern"} width={'70%'} src={"img/concern_logo.png"}/>
              </a>
              <a style={{width:"50%"}} href={"https://www.ingenit.com/"} target={"_blank"}>
                <img alt={"ingenit"} width={'70%'} src={"img/ingenit.png"}/>
              </a>
            </div>

            <h2 css={theme => ([{
              fontSize: "calc(12px + 0.4vw)",
            }])}>
              {props.fixedLabels.sponsoredBy || props.language.sponsoredBy!}:
            </h2>
                      
            <a css={theme => ([{}])} href={"https://www.stmuv.bayern.de/"} target={"_blank"}>
              <img alt={"Bayrisches Staatsministerium für Umwelt und Verbraucherschutz"} width={'100%'} src={"img/stmuv.jpg"}/>
            </a>

          </div>
          <div css={theme => ([{
            marginTop: '5%',
            paddingTop: '1%',
            display: 'flex',
            justifyContent: 'spaceing-around',
            alignItems: 'center',
            borderTop: '1px solid'
          }])}>
          {props.language.legalDisclaimer!}   
          </div>
          <div css={theme => ([{
            marginTop: '5%',
            paddingTop: '1%',
            display: 'flex',
            justifyContent: 'spaceing-around',
            alignItems: 'center',
            borderTop: '1px solid'
          }])}>
            <a href={"https://github.com/ingenitdo/dpm-wizard"} target={"_blank"}>
              <img alt={"github DPM repository"} width={'100%'} src={"img/github.png"}/>
            </a>

            <h2 css={theme => ([{
              fontSize: "calc(12px + 0.2vw)",
              margin: '0 2%'
            }])}>
              &#9679;
            </h2>

            <h2 id={"btn-legalnotice"}
                css={theme => ([{
              fontSize: "calc(12px + 0.2vw)",
              cursor: 'pointer',
              transition: 'color 0.5s ease-in-out',
              '&:hover': {
                color: 'gray'
              }
            }])}
            onClick={props.onLegalNoticeClick}>
              {props.fixedLabels.legalNoticeLabel || props.language.legalNoticeLabel!}
            </h2>

          </div>

        </div>


        <div css={theme => ({
          flex: "1 0 30px",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%"
        })}>


          <button css={theme => ({
            width: 80,
            height: 30,
            margin: 10,
            webkitAppearance: "none",
            mozAppearance: "none",
            border: '1px black solid',
            cursor: "pointer"
          })}
                  onClick={props.onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )

};

export { CreditsDialog };
