import * as React from "react";
import { SVGText } from "./SVGText";
import {
  ACTION_PADDING_LEFT,
  ACTION_PADDING_RIGHT, DATASOURCE_AND_DATAPURPOSE_WIDTH
} from "../Constants";
import { SVGShortInfo } from "./SVGShortInfo";
import { getAbsoluteValue } from "../utils/LayoutCalc";
import { SVGItemSymbol } from "./SVGItemSymbol";
import { ItemSymbol } from "../../entities/ItemSymbol";
import { CustomSymbol } from "../../entities/CustomSymbol";
import { BoxType } from "../../entities/BoxType";
import { ProcessedAction } from "../../entities/ProcessedAction";
import { ProcessedParticipant } from "../../entities/ProcessedParticipant";
import { FixedLabels } from "../../entities/FixedLabels";
import { Colors } from "../../entities/Colors";

interface Props {
  processedAction: ProcessedAction;
  boxTypes: BoxType[];
  processedParticipants: ProcessedParticipant[];
  activeObjects: string[];
  canvasWidth: number;
  onShowInfoText: ( title: string[] | undefined, text: string | undefined ) => void;
  onItemSymbolClick: ( isDialog: boolean, title: string, text: string, x: number, y: number ) => void;
  onClick: () => void;
  infoIconSize: number;
  showDetailedModel: boolean;
  fixedLabels: FixedLabels;
  language: FixedLabels;
  isLowMode: boolean;
  colors: Colors;
  isPreview?: boolean;
  predefinedAndCustomSymbols: CustomSymbol[];
}

const SVGAction: React.FunctionComponent<Props> = props => {

  const boxType = props.boxTypes.find( item => item.id === props.processedAction.action.typeId );
  if( !boxType ) {
    throw new Error( "Cannot find box type: " + props.processedAction.action.typeId );
  }

  // selection state
  const selected = props.activeObjects.indexOf( props.processedAction.action.id ) === 0;
  const related = props.activeObjects.includes( props.processedAction.action.id );

  // box styling
  const boxFill = related ? boxType.color : boxType.colorInactive;
  const boxFilter = selected ? "url(#highlight)" : "url(#shadow)";
  const boxTextColor = related ? boxType.textColor : boxType.textColorInactive;

  // short info color
  const shortInfoFill = (related ? boxType.shortInfoActiveBackground : boxType.shortInfoBackground) || "pink";
  const shortInfoTextColor = related ? boxType.textColor : boxType.textColorInactive;

  return (
    <g cursor={"pointer"}>

      {props.showDetailedModel && (
        <g>
          {/* Box */}
          <rect name={"source"}
                x={props.processedAction.x}
                y={props.processedAction.y}
                width={props.processedAction.width}
                height={props.processedAction.height}
                fill={boxFill}
                filter={props.isLowMode ? '' : boxFilter}
                onClick={props.onClick}
          />

          {/* Box Text */}
          <SVGText x={props.processedAction.x + getAbsoluteValue( props.canvasWidth, ACTION_PADDING_LEFT )}
                   y={props.isLowMode ? props.processedAction.y + 10 : props.processedAction.y}
                   height={props.processedAction.height}
                   width={props.processedAction.width - getAbsoluteValue( props.canvasWidth, ACTION_PADDING_LEFT )
                   - getAbsoluteValue( props.canvasWidth, ACTION_PADDING_RIGHT )}
                   canvasWidth={props.canvasWidth}
                   str={props.processedAction.action.label}
                   textSize={boxType.labelSize}
                   fontWeight={'normal'}
                   color={boxTextColor}
                   textAnchor={"middle"}
                   onClick={props.onClick}
                   colors={props.colors}
          />

          {/*RENDER CUSTOM SYMBOL*/}
          {props.processedAction.action.itemSymbols && props.processedAction.action.itemSymbols.map(
            ( itemSymbol: ItemSymbol ) => {

                return (
                  <SVGItemSymbol key={Math.random()}
                                 itemX={props.processedAction.x}
                                 itemY={props.processedAction.y}
                                 itemWidth={props.processedAction.width}
                                 itemHeight={props.processedAction.height}
                                 size={props.infoIconSize}
                                 color={(related ? boxType.infoIconActiveBackground : boxType.infoIconBackground)
                                 || "pink"}
                                 iconColor={related ? boxType.color : boxType.colorInactive}
                                 itemSymbols={props.processedAction.action.itemSymbols}
                                 itemSymbol={itemSymbol}
                                 onClick={(isDialog: boolean, x: number, y: number) => {
                                   props.onItemSymbolClick(
                                     isDialog,
                                     itemSymbol.title,
                                     itemSymbol.text,
                                     x,
                                     y
                                   );
                                 }}
                                 predefinedAndCustomSymbols={props.predefinedAndCustomSymbols}
                  />
                )

            } )}

          {/* Short info */}
          {!!props.processedAction.action.shortInfo && (
            <SVGShortInfo shortInfo={props.processedAction.action.shortInfo}
                          x={props.processedAction.x + props.processedAction.width - props.canvasWidth * 0.04}
                          y={props.processedAction.y + props.processedAction.height - props.canvasWidth * 0.015}
                          width={!props.isPreview ?
                            getAbsoluteValue( props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_WIDTH ) * 0.4 :
                            props.processedAction.width * 0.5}
                          canvasWidth={props.canvasWidth}
                          fill={shortInfoFill}
                          textColor={shortInfoTextColor}
                          colors={props.colors}
                          textSize={boxType.shortInfoLabelSize}
            />
          )}

        </g>
      )}
      {!props.showDetailedModel && (
        <g>
          <rect name={"source"}
                x={props.processedAction.x}
                y={props.processedAction.y}
                width={props.processedAction.width}
                height={props.processedAction.height}
                fill={boxFill}
                filter={props.isLowMode ? '' : boxFilter}
                onClick={props.onClick}
          />
          <SVGText x={props.processedAction.x + getAbsoluteValue( props.canvasWidth, ACTION_PADDING_LEFT )}
                   y={props.processedAction.y}
                   height={props.processedAction.height}
                   width={props.processedAction.width - getAbsoluteValue( props.canvasWidth, ACTION_PADDING_LEFT )
                   - getAbsoluteValue( props.canvasWidth, ACTION_PADDING_RIGHT )}
                   canvasWidth={props.canvasWidth}
                   str={props.processedAction.action.label}
                   textSize={boxType.labelSize}
                   fontWeight={'bolder'}
                   color={boxTextColor}
                   textAnchor={"middle"}
                   onClick={props.onClick}
                   colors={props.colors}
          />

          {/*/!* Info icon on the top right *!/*/}
          {/*{!!props.processedAction.action.info && (*/}
          {/*  renderInfoButton(*/}
          {/*    props.processedAction.x + props.processedAction.width * 0.98,*/}
          {/*    props.processedAction.y + props.processedAction.width * 0.02,*/}
          {/*    props.infoIconSize,*/}
          {/*    (related ? boxType.infoIconActiveBackground : boxType.infoIconBackground) || "pink",*/}
          {/*    related ? boxType.color : boxType.colorInactive,*/}
          {/*    () => props.onShowInfoText( props.processedAction.action.label, props.processedAction.action.info ),*/}
          {/*    (props.fixedLabels.info || props.language.info!), props.isLowMode )*/}
          {/*)}*/}

          {/* Short info */}
          {!!props.processedAction.action.shortInfo && (
            <SVGShortInfo shortInfo={props.processedAction.action.shortInfo}
                          x={props.processedAction.x + props.processedAction.width * 0.8}
                          y={props.processedAction.y + props.processedAction.height * 0.8}
                          width={!props.isPreview ?
                            getAbsoluteValue( props.canvasWidth, DATASOURCE_AND_DATAPURPOSE_WIDTH ) * 0.4 :
                            props.processedAction.width * 0.5}
                          canvasWidth={props.canvasWidth}
                          fill={shortInfoFill}
                          textColor={shortInfoTextColor}
                          colors={props.colors}
                          textSize={boxType.shortInfoLabelSize}
            />
          )}

          {/*{(!!props.processedAction.action.erasurePolicy || !!props.processedAction.action.storagePolicy) && (*/}
          {/*  <SVGPolicyTrigger erasurePolicy={props.processedAction.action.erasurePolicy}*/}
          {/*                    storagePolicy={props.processedAction.action.storagePolicy}*/}
          {/*                    x={props.processedAction.x + props.processedAction.width * 0.02}*/}
          {/*                    y={props.processedAction.y + props.processedAction.height - props.processedAction.width*/}
          {/*                    * 0.02 - props.infoIconSize}*/}
          {/*                    size={props.infoIconSize}*/}
          {/*                    color={(related ? boxType.color : boxType.colorInactive) || "pink"}*/}
          {/*                    textColor={(related ? boxType.policyIconActiveBackground : boxType.policyIconBackground)*/}
          {/*                    || "pink"}*/}
          {/*                    onClick={() => props.onPolicyClick( props.processedAction.action.erasurePolicy,*/}
          {/*                      props.processedAction.action.storagePolicy,*/}
          {/*                      props.processedAction.x + props.processedAction.width * 0.1,*/}
          {/*                      props.processedAction.y + props.processedAction.height - props.processedAction.width*/}
          {/*                      * 0.1 )}*/}
          {/*                    fixedLabels={props.fixedLabels}*/}
          {/*                    language={props.language}*/}
          {/*  />*/}
          {/*)}*/}
        </g>
      )}
    </g>
  );
};

export { SVGAction };