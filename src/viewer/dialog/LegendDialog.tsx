/** @jsx jsx */
import { jsx } from '@emotion/core'

import * as React from "react";
import { CONNECTION_ARROW_SIZE } from "../Constants";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import { CustomSymbol } from "../../entities/CustomSymbol";
import { ConnectionType } from "../../entities/ConnectionType";
import { FixedLabels } from "../../entities/FixedLabels";
import { BoxType } from "../../entities/BoxType";
import { SourceInformation } from "../../entities/SourceInformation";
import { RevisionHistory } from "../../entities/RevisionHistory";
import { Colors } from "../../entities/Colors";

interface Props {
  html: string | null;
  title: string[] | null;
  onClose: () => void;
  canvasHeight: number;
  canvasWidth: number;
  canvasX: number;
  canvasY: number;
  isDialogFullsize: boolean;
  fixedLabels: FixedLabels;
  language: FixedLabels;
  connectionTypes: ConnectionType[];
  boxTypes: BoxType[];
  isLowMode: boolean;
  onShowInfoText: ( title: string[] | undefined, content: string | undefined ) => void;
  onCreditsClick: () => void;
  onTutorialClick: () => void;
  hasTutorial: boolean;
  sourceInformation?: SourceInformation;
  revisionHistory?: RevisionHistory;
  colors: Colors;
  customSymbols: CustomSymbol[];
}

const LegendDialog: React.FunctionComponent<Props> = props => {

  const conTypes = props.connectionTypes.filter( item => item.legend );
  const bTypes = props.boxTypes.filter( item => item.legend );
  const cSymbols = props.customSymbols.filter( item => item.legend );

  const itemSize = getAbsoluteValue( props.canvasWidth, 1.6 );
  const itemWidth = getAbsoluteValue( props.canvasWidth, 1.6 ) * 3;

  return (

    <div css={theme => ([{
      position: props.isDialogFullsize ? "fixed" : "absolute",
      top: props.isDialogFullsize ? 0 : props.canvasY,
      left: props.isDialogFullsize ? 0 : props.canvasX,
      width: props.isDialogFullsize ? '100%' : props.canvasWidth,
      height: props.isDialogFullsize ? '100%' : props.canvasHeight,
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: props.isDialogFullsize ? 100000 : 'initial'

    }])}>
      <div css={theme => ({
        width: "100%",
        height: "100%",
        overflowY: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "5%",
        paddingBottom: "5%",
        msOverflowStyle: 'none',
        '::-webkit-scrollbar': {
          display: 'none'
        }
      })}>
        <div css={theme => ({
          width: "90%",
          "@media (min-width: 800px)": {
            width: "75vw",
            padding: "auto"
          },
          "@media (min-width: 1100px)": {
            width: "60vw",
          },
          "@media (min-width: 1400px)": {
            width: "40vw",
          },
          margin: "auto",
          backgroundColor: "white",
          webkitBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
          mozBoxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
          boxShadow: "3px 3px 6px 0px rgba(0,0,0,0.75)",
        })}
        >

          <div css={theme => ({
            margin: "20px 20px 0 20px",
            fontWeight: "bold",
            position: 'relative'
          })}>
            <div css={theme => ({
              position: "absolute",
              left: 'calc(100% - 10px)',
              cursor: 'pointer'
            })} onClick={props.onClose}>
              X
            </div>
            <div css={theme => ({
              marginRight: "20px",
            })}>
              {props.title}
            </div>
          </div>
          <table css={theme => ([{
            margin: "20px",
            width: "calc(100% - 20px)",

          }])}>
            <tbody css={theme => ([{
              "& > tr": {
                height: itemSize * 2 + "px",
              }
            }])}>

            {
              conTypes.map( ( conType: ConnectionType, index: number ) => {

                const arrowSize = getAbsoluteValue( props.canvasWidth, CONNECTION_ARROW_SIZE ) / 2;
                return (
                  <tr key={index}>
                    <td>
                      <svg height={itemSize} width={itemWidth}>
                        <g>
                          <line x1={0}
                                y1={itemSize / 2 + (props.isLowMode ? 0 : 2)}
                                x2={itemWidth - arrowSize}
                                y2={itemSize / 2 - (props.isLowMode ? 0 : 2)}
                                stroke={conType.color}
                                filter={props.isLowMode ? '' : "url(#shadow)"}
                                strokeDasharray={!!conType.strokeDasharray ? conType.strokeDasharray : "1, 0"}
                                strokeWidth={(props.isLowMode ? 4 : 10)}
                          />
                          <path
                            transform={"translate(" + (itemWidth - arrowSize) + "," + (itemSize / 2 - arrowSize / 2)
                            + ")"}
                            d={"M0 0 L0 " + arrowSize + " L"
                            + arrowSize + " " + arrowSize / 2 + " Z"}
                            fill={conType.color}
                          />
                        </g>
                      </svg>

                    </td>
                    <td css={theme => ([{
                      padding: "0 1.4vw"
                    }])}>{!!conType.legendLabel ? [conType.legendLabel] : []}</td>
                  </tr>
                )
              } )
            }

            {bTypes.map( ( boxType: BoxType, index: number ) => {
              return (
                <tr key={boxType.id}>
                  <td>
                    <svg height={itemSize} width={itemWidth}>
                      <rect x={0}
                            y={0}
                            width={itemWidth}
                            height={itemSize}
                            fill={boxType.colorInactive}>
                      </rect>
                    </svg>

                  </td>
                  <td css={theme => ([{
                    padding: "0 1.4vw"
                  }])}>{!!boxType.legendLabel ? [boxType.legendLabel] : []}</td>
                </tr>
              )
            } )
            }

            {cSymbols.map( ( customSymbol: CustomSymbol, index: number ) => {
              return (
                <tr key={customSymbol.id}>
                  <td css={theme => ([{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }])}>
                    <svg height={itemSize} width={itemWidth}>
                      <title>{customSymbol.title}</title>
                      <image width="1.2vw" height="100%" x={"0%"} y={"0%"} href={customSymbol.icon.dataUri}/>
                    </svg>
                  </td>
                  <td css={theme => ([{
                    padding: "0 1.4vw"
                  }])}>{!!customSymbol.legendLabel ? [customSymbol.legendLabel] : [customSymbol.title]}</td>
                </tr>
              )
            } )
            }
            </tbody>
          </table>

          <div css={theme => ([{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            p: {
              margin: 0,
              cursor: "pointer",
              fontWeight: "bold",
              ":hover": {
                color: props.colors.controlsBackground
              }
            }
          }])}>
            {/*{props.sourceInformation && (*/}
            {/*  <React.Fragment>*/}
            {/*    <p id={"btn-sourceinformation"}*/}
            {/*       onClick={() => {*/}
            {/*         props.onShowInfoText( [(props.fixedLabels.listOfSources || props.language.listOfSources!)],*/}
            {/*           props.sourceInformation?.info );*/}
            {/*       }}>{props.fixedLabels.listOfSources || props.language.listOfSources}</p>*/}
            {/*    &emsp;&#8226;&emsp;*/}
            {/*  </React.Fragment>*/}
            {/*)}*/}
            {/*{props.revisionHistory && (*/}
            {/*  <React.Fragment>*/}
            {/*    <p id={"btn-revisionhistory"}*/}
            {/*       onClick={() => {*/}
            {/*         props.onShowInfoText( [(props.fixedLabels.revisionHistory || props.language.revisionHistory!)],*/}
            {/*           props.revisionHistory?.info );*/}
            {/*       }}>{props.fixedLabels.revisionHistory || props.language.revisionHistory}</p>*/}
            {/*    &emsp;&#8226;&emsp;*/}
            {/*  </React.Fragment>*/}
            {/*)}*/}

            <p id={"btn-credits"}
               onClick={() => {
                 props.onCreditsClick()
               }}>{props.fixedLabels.credits || props.language.credits!}</p>
            {props.hasTutorial && (
              <React.Fragment>
                &emsp;&#8226;&emsp;
                <p id={"btn-tutorial"}
                   onClick={() => {
                     props.onTutorialClick()
                   }}>Tutorial anzeigen</p>
              </React.Fragment>
            )}

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
    </div>
  );

};

export { LegendDialog };