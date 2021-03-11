/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from "react";
import { drop_shadow, filter_blur } from "../style/style";
import { Icon } from "../Icon";
import { Colors } from "../../entities/Colors";
import { FixedLabels } from "../../entities/FixedLabels";

interface Props {
  height: number;

  showDetailedModel: boolean;

  zoomFactor: number;
  onZoomIn: () => void;
  onZoomOut: () => void;

  showModeToggle: boolean;
  showLegend: boolean;
  showFullscreen: boolean;
  showZoom: boolean;

  toggleMode: () => void;
  toggleLegend: () => void;

  colors: Colors;
  labelSize: number;

  controlsHeight: number;
  fixedLabels: FixedLabels;
  language: FixedLabels;

  onFullscreen: () => void;
  isFullscreen: boolean;
  isInfoDialogBlurred?: boolean;
}

const Controls: React.FunctionComponent<Props> = props => {

  return (

    <div css={theme => ([{
      minHeight: props.height,
      zIndex: 1
    }, props.isInfoDialogBlurred && filter_blur])}>
      <div css={theme => ([{
        display: 'flex',
        flexDirection: 'row',
        minHeight: props.height
      }])}>

        {/*{props.showModeToggle && (*/}
        {/*  <div id={"btn-mode"}*/}
        {/*       css={theme => ([{*/}
        {/*         width: '25%',*/}
        {/*         marginRight: '47%',*/}
        {/*         border: 'none',*/}
        {/*         backgroundColor: props.colors.controlsBackground,*/}
        {/*         color: 'white',*/}
        {/*         fontSize: props.labelSize,*/}
        {/*         outline: 'none',*/}
        {/*         transition: 'background-color 0.3s ease-in-out',*/}
        {/*         display: 'flex',*/}
        {/*         justifyContent: 'center',*/}
        {/*         alignItems: 'center',*/}
        {/*         ':hover': {*/}
        {/*           backgroundColor: props.colors.controlsBackgroundHover,*/}
        {/*           cursor: 'pointer'*/}
        {/*         },*/}
        {/*         ':focus': {*/}
        {/*           outline: 'none'*/}
        {/*         }*/}
        {/*       }, drop_shadow])}*/}
        {/*       onClick={props.toggleMode}*/}
        {/*  >*/}
        {/*    {props.showDetailedModel ?*/}
        {/*      (props.fixedLabels.simpleModel || props.language.simpleModel) :*/}
        {/*      (props.fixedLabels.detailedModel || props.language.detailedModel)}*/}
        {/*  </div>*/}
        {/*)}*/}
        {/*{!props.showModeToggle && (*/}
          <div css={theme => ([{width: "25%", marginRight: "47%"}])}/>
{/*        )}*/}

        {props.showLegend && (
          <div id={"btn-legend"}
               css={theme => ([{
                 width: '10%',
                 marginRight: '1%',
                 border: 'none',
                 backgroundColor: props.colors.controlsBackground,
                 color: 'white',
                 outline: 'none',
                 fontSize: props.labelSize,
                 transition: 'background-color 0.3s ease-in-out',
                 height: props.controlsHeight,
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 ':hover': {
                   backgroundColor: props.colors.controlsBackgroundHover,
                   cursor: 'pointer'
                 },
                 ':focus': {
                   outline: 'none'
                 }
               }, drop_shadow])}
               onClick={props.toggleLegend}
          >
            {props.fixedLabels.legend || props.language.legend}
          </div>
        )}

        {props.showFullscreen && (
          <div id={"btn-fullscreen"}
               css={theme => ([{
                 width: '5%',
                 border: 'none',
                 marginRight: '1%',
                 backgroundColor: props.colors.controlsBackground,
                 color: 'white',
                 outline: 'none',
                 fontSize: props.labelSize,
                 transition: 'background-color 0.3s ease-in-out',
                 height: props.controlsHeight,
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 ':hover': {
                   backgroundColor: props.colors.controlsBackgroundHover,
                   cursor: 'pointer'
                 },
                 ':focus': {
                   outline: 'none'
                 }
               }, drop_shadow])}
               onClick={props.onFullscreen}
          >
            {props.isFullscreen && (
              <Icon name={"leave-fullscreen"} size={props.labelSize}/>

            )}
            {!props.isFullscreen && (
              <Icon name={"enter-fullscreen"} size={props.labelSize}/>

            )}
          </div>
        )}

        {props.showZoom && (
          <React.Fragment>
            <div id={"btn-zoom-out"}
                 css={theme => ([{
                   width: '5%',
                   border: 'none',
                   marginRight: '1%',
                   backgroundColor: props.colors.controlsBackground,
                   color: 'white',
                   outline: 'none',
                   fontSize: props.labelSize,
                   transition: 'background-color 0.3s ease-in-out',
                   height: props.controlsHeight,
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   ':hover': {
                     backgroundColor: props.colors.controlsBackgroundHover,
                     cursor: 'pointer'
                   },
                   ':focus': {
                     outline: 'none'
                   }
                 }, drop_shadow])}
                 onClick={props.onZoomOut}
            >
              <Icon name={"minus"} size={props.labelSize}/>
            </div>

            <div id={"btn-zoom-in"}
                 css={theme => ([{
                   width: '5%',
                   border: 'none',
                   backgroundColor: props.colors.controlsBackground,
                   color: 'white',
                   outline: 'none',
                   fontSize: props.labelSize,
                   transition: 'background-color 0.3s ease-in-out',
                   height: props.controlsHeight,
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   ':hover': {
                     backgroundColor: props.colors.controlsBackgroundHover,
                     cursor: 'pointer'
                   },
                   ':focus': {
                     outline: 'none'
                   }
                 }, drop_shadow])}
                 onClick={props.onZoomIn}
            >
              <Icon name={"plus"} size={props.labelSize}/>

            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );

};

export { Controls };
