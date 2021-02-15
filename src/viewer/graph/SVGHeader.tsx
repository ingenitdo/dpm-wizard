import * as React from "react";
import { renderIconProcess } from "./SVGIcons";
import {
  HEADER_HEIGHT,
  HEADER_MARGIN_BOTTOM,
  HEADER_MARGIN_TOP,
  HEADER_WIDTH,
  PARTICIPANTS_SIZE
} from "../Constants";
import { getAbsoluteValue } from "../utils/LayoutCalc";

import { HeaderType } from "../../entities/HeaderType";
import { SVGIcon } from "./SVGIcon";
import { Dimensions } from "../../entities/Dimensions";
import { Colors } from "../../entities/Colors";

interface Props {
  header: HeaderType;
  height: number;
  canvasWidth: number;
  factorizedCanvasWidth: number;
  showDetailedModel: boolean;
  yScrollOffset: number;
  colors: Colors;
  dimensions: Dimensions;
  isLowMode: boolean;
  isPreview?: boolean;
  isEditorMode?: boolean;
}

const SVGHeader: React.FunctionComponent<Props> = props => {

  const headerMarginTop = getAbsoluteValue( props.factorizedCanvasWidth, HEADER_MARGIN_TOP );
  const headerMarginBottom = getAbsoluteValue( props.factorizedCanvasWidth, HEADER_MARGIN_BOTTOM );
  const headerHeight = !props.isPreview ?
    getAbsoluteValue( props.factorizedCanvasWidth, HEADER_HEIGHT ) :
    getAbsoluteValue( props.factorizedCanvasWidth, HEADER_HEIGHT * 2 );
  const headerY = headerMarginTop + props.yScrollOffset - 8;
  const headerWidth = !props.isPreview ?
    getAbsoluteValue( props.factorizedCanvasWidth, HEADER_WIDTH ) :
    getAbsoluteValue( props.factorizedCanvasWidth, HEADER_WIDTH * 2 );
  const headerArrowSize = props.factorizedCanvasWidth * 0.03;
  const headerIconHeight = headerHeight * 0.7;
  const headerIconWidth = headerWidth * 0.4;
  const headerPaddingLeft = headerWidth * 0.05;

  const actionHeaderX = props.factorizedCanvasWidth * 0.3;
  const actionHeaderWidth = getAbsoluteValue( props.factorizedCanvasWidth, (PARTICIPANTS_SIZE - 10) );

  return (
    <g>
      {/*BACKGROUND BLUR*/}
      {!props.isEditorMode && (
        <rect x={0}
              y={props.yScrollOffset - 8}
              width={props.factorizedCanvasWidth}
              height={headerMarginTop + headerHeight + headerMarginBottom}
              fill={'url(#white_gradient)'}
        />
      )}


      <g filter={props.isLowMode ? '' : 'url(#shadow)'}>
        <g fill={props.colors.headerSourceBackground}>
          <rect x={0}
                y={headerY}
                width={headerWidth + (props.showDetailedModel ? headerArrowSize : 0)}
                height={headerHeight}
          />
          {!props.showDetailedModel && (
            <path
              transform={"translate(" + headerWidth + "," + headerY + ")"}
              d={"M0 0 L0 " + headerHeight + " L" + headerArrowSize + " " + headerHeight / 2 + " Z"}
              fill={props.colors.headerSourceArrowBackground}
            />
          )}

        </g>
        {props.header && props.header.sourceLabel && (
          <text x={headerPaddingLeft}
                y={headerY + headerHeight * 0.8}
                fill={props.colors.headerSourceLabel}
                fontSize={!props.isPreview ?
                  getAbsoluteValue( props.factorizedCanvasWidth, props.dimensions.headerLabelSize ) :
                  getAbsoluteValue( props.factorizedCanvasWidth, props.dimensions.headerLabelSize * 2 )}
                fontVariant={'all-small-caps'}
          >
            {props.header.sourceLabel}
          </text>
        )}

        {props.header && props.header.sourceIcon && (
          <SVGIcon x={headerPaddingLeft}
                   y={headerY}
                   size={headerIconHeight}
                   color={props.colors.headerSourceIcon}
                   dataUri={props.header.sourceIcon.dataUri}/>
        )}

      </g>


      {!props.isPreview && (
        <g>
          {/* SIMPLE VIEW ACTION HEADER*/}
          {!props.showDetailedModel && (
            <g filter={props.isLowMode ? '' : 'url(#shadow)'}>
              <g>
                <g fill={props.colors.headerProcessArrowLeftBackground}
                   transform={"translate(" + (actionHeaderX - headerArrowSize) + ","
                   + headerY + ")"}
                >
                  <path d={"M0 0 L" + headerArrowSize + " " + headerHeight / 2 + " L" + headerArrowSize + " 0 Z"}/>
                  <path
                    d={"M" + headerArrowSize + " " + headerHeight / 2 + " L0 " + headerHeight + " L" + headerArrowSize
                    + " "
                    + headerHeight + " Z"}/>
                </g>

                <rect x={actionHeaderX}
                      y={headerY}
                      width={actionHeaderWidth}
                      height={headerHeight}
                      fill={props.colors.headerProcessBackground}
                />

                <path fill={props.colors.headerProcessArrowRightBackground}
                      transform={"translate(" + (actionHeaderX + actionHeaderWidth) + "," + headerY + ")"}
                      d={"M0 0 L0 " + headerHeight + " L" + headerArrowSize + " " + headerHeight / 2 + " Z"}
                />
              </g>
              {props.header && props.header.processLabel && (

                <text x={headerPaddingLeft * 2 + actionHeaderX}
                    y={headerY + headerHeight * 0.8}
                    fill={props.colors.headerProcessLabel}
                    fontSize={getAbsoluteValue( props.factorizedCanvasWidth, props.dimensions.headerLabelSize )}
                    fontVariant={'all-small-caps'}
              >
                {props.header.processLabel}
              </text>
              )}
              {renderIconProcess( headerPaddingLeft * 2 + actionHeaderX, headerY + headerHeight * 0.25, headerIconWidth,
                props.colors.headerProcessIcon,
                props.colors.headerProcessLabel, () => {
                }, null )}
            </g>
          )}


          <g filter={props.isLowMode ? '' : 'url(#shadow)'}>
            <g fill={props.colors.headerPurposeBackground}>
              <rect x={getAbsoluteValue( props.factorizedCanvasWidth,
                (100 - HEADER_WIDTH - (props.showDetailedModel ? 3 : 0)) )}
                    y={headerY}
                    width={headerWidth + (props.showDetailedModel ? headerArrowSize : 0)}
                    height={headerHeight}
              />

              {!props.showDetailedModel && (
                <g transform={"translate(" + ((getAbsoluteValue( props.factorizedCanvasWidth, (100 - HEADER_WIDTH) )
                  - headerArrowSize)) + ","
                + headerY + ")"}
                >
                  <path d={"M0 0 L" + headerArrowSize + " " + headerHeight / 2 + " L" + headerArrowSize + " 0 Z"}
                        fill={props.colors.headerPurposeArrowBackground}/>
                  <path
                    d={"M" + headerArrowSize + " " + headerHeight / 2 + " L0 " + headerHeight + " L" + headerArrowSize
                    + " "
                    + headerHeight + " Z"}
                    fill={props.colors.headerPurposeArrowBackground}
                  />
                </g>
              )}
            </g>

            {props.header && props.header.purposeLabel && (

            <text x={getAbsoluteValue( props.canvasWidth, (100 - HEADER_WIDTH) - (props.showDetailedModel ? 2 : 0) )
            + headerPaddingLeft}
                  y={headerY + headerHeight * 0.8}
                  fontSize={getAbsoluteValue( props.canvasWidth, props.dimensions.headerLabelSize )}
                  fill={props.colors.headerPurposeLabel}
                  fontVariant={'all-small-caps'}
            >
              {props.header.purposeLabel}
            </text>
            )}

            {props.header && props.header.purposeIcon && (
              <SVGIcon x={(getAbsoluteValue( props.factorizedCanvasWidth,
                (100 - HEADER_WIDTH) - (props.showDetailedModel ? 2 : 0) )) + headerPaddingLeft/2}
                       y={headerY}
                       size={headerIconHeight}
                       color={props.colors.headerPurposeIcon}
                       dataUri={props.header.purposeIcon.dataUri}/>
            )}

          </g>
        </g>
      )}


    </g>
  );

};

export { SVGHeader };