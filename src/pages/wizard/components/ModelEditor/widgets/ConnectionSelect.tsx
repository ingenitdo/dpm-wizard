/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { createRef, useState } from "react";
import { Icon, IconName } from "../../../../../components/Icon";
import { getAbsoluteValue } from "../../../../../viewer/utils/LayoutCalc";
import { HEADER_MARGIN_BOTTOM, HEADER_MARGIN_TOP } from "../../../../../viewer/Constants";
import { useTheme } from "emotion-theming";
import {
  getIdByProcessedItem,
  getPositionByY,
  getPositionEndByProcessedItem,
  getPositionRangeByProcessedItem,
  getPositionStartByProcessedItem,
  isDataPurpose,
  isDataSource
} from "../ProcessingUtils";
import _ = require("lodash");
import { RowHeight } from "../../../../../entities/RowHeight";
import { ProcessedCase } from "../../../../../entities/ProcessedCase";
import { ProcessedDataSource } from "../../../../../entities/ProcessedDataSource";
import { ProcessedAction } from "../../../../../entities/ProcessedAction";
import { ProcessedDataPurpose } from "../../../../../entities/ProcessedDataPurpose";

interface Props {
  canvasWidth: number;
  canvasX: number;
  canvasY: number;
  canvasPadding: number;
  baseYScrollOffset: number
  rowHeights: RowHeight[];
  connectionGapHeights: any;
  processedCase: ProcessedCase;
  processedItem: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose;
  onUpdate: ( sourceId: string, destinationId: string, positionStart: number, positionEnd: number ) => void;

  headerPadding: number;
}

const ConnectionSelect: React.FunctionComponent<Props> = props => {

  const theme = useTheme<any>();
  const ref = createRef<HTMLDivElement>();
  const [isClick, setIsClick] = useState<string | null>( null );
  const [selectorPosition, setSelectorPosition] = useState(
    { x: null, y: null } );

  const [sourceId, setSourceId] = useState<string | null>( getIdByProcessedItem( props.processedItem ) );
  const [destinationId, setDestinationId] = useState<string | null>( null );

  const [positionStart, setPositionStart] = useState<number | null>( null );
  const [positionEnd, setPositionEnd] = useState<number | null>( null );

  const [sourcePositionRange, setSourcePositionRange] = useState<number>(
    getPositionRangeByProcessedItem( props.processedItem ) );

  const padding = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.OVERLAY_PADDING_SIZE );

  const buttonSize = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.EDIT_BUTTON_SIZE );

  const renderItems = () => {
    const items = [...props.processedCase.actions, ...props.processedCase.dataSources,
      ...props.processedCase.dataPurposes];

    return (
      items.map( ( item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose ) => {
        const top = getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_TOP )
          + getAbsoluteValue( props.canvasWidth, HEADER_MARGIN_BOTTOM )
          + props.canvasPadding;

        if( item !== props.processedItem ) {
          return (
            <div key={Math.random()}
                 css={theme => ([{
                   position: "fixed",
                   zIndex: 200,
                   width: item.width,
                   height: item.height,
                   top: props.canvasY + top + item.y,
                   left: props.canvasX + item.x + props.canvasPadding,
                   backgroundColor: "rgba(0,0,0,0.2)",
                   "&:hover": {
                     backgroundColor: "rgba(255,189,76,0.5)"
                   }
                 }])}
                 onMouseEnter={() => {
                   setDestinationId( getIdByProcessedItem( item ) );
                 }}
                 onMouseLeave={() => {
                   setDestinationId( null );
                 }}
            />
          )
        }
      } )
    );
  };

  const renderEditButtons = () => {

    const renderButton = ( top: number, left: number, width: number, height: number, borderRadius: string,
      icon: IconName, indicator: string ) => {

      return (
        <div key={Math.random()}
             css={theme => ([{
               position: "absolute",
               top: top,
               left: left,
               width: width + "px",
               height: height + "px",
               backgroundColor: theme.COLORS.EDIT.PRIMARY.DEFAULT,
               borderRadius: borderRadius,
               transition: "background-color 0.5s ease-in-out",

               ":hover": {
                 cursor: "pointer"
               },
               display: "flex",
               justifyContent: "center",
               alignItems: "center"
             }])}
             onMouseDownCapture={( e ) => {
               setIsClick( indicator );

               const yVal = e.clientY - props.canvasY - props.headerPadding - props.canvasPadding
                 - props.processedCase.y - buttonSize;
               setPositionStart( getPositionByY( yVal, props.canvasWidth, props.processedCase, props.rowHeights,
                 props.connectionGapHeights, buttonSize ) );
             }}
        >
          <Icon name={icon}
                color={theme.COLORS.EDIT.SECONDARY.DEFAULT}
                size={width > height ? width * 0.6 : height * 0.6}
          />
        </div
        >)
    };

    const buttonTop = renderButton(
      isClick === "top" ? selectorPosition.y : -padding,
      isClick === "top" ? selectorPosition.x : props.processedItem.width / 2,
      buttonSize,
      buttonSize / 2,
      buttonSize / 2 + "px " + buttonSize / 2 + "px 0 0",
      "arrow-up",
      "top" );

    const buttonsRight = _.times( sourcePositionRange, ( index: number ) => {

      const startPos = getPositionStartByProcessedItem( props.processedItem );
      const endPos = startPos + index;

      const top = [
          ...props.rowHeights.filter( ( a: RowHeight ) => {
            return a.pos >= startPos && a.pos <= endPos;
          } ),
          ...props.connectionGapHeights.filter( ( a: RowHeight ) => {
            return a.pos >= startPos && a.pos < endPos;
          } ),
        ]
          .map( ( a: any ) => a.value )
          .reduce( ( accumulator: number, currentValue: number ) => {
            return accumulator + currentValue;
          }, 0 )
        - props.rowHeights.filter( ( a: RowHeight ) => {
          return a.pos === endPos;
        } )
          .map( ( a: any ) => {
            return a.value
          } )
          .reduce( ( accumulator: number, currentValue: number ) => {
            return accumulator + currentValue;
          }, 0 ) / 2;

      return (
        renderButton( isClick === "right-" + index ? selectorPosition.y - buttonSize / 2 : top,
          isClick === "right-" + index ?
            selectorPosition.x - buttonSize / 4 :
            props.processedItem.width + padding,
          buttonSize / 2,
          buttonSize,
          "0 " + buttonSize / 2 + "px " + buttonSize / 2 + "px 0",
          "arrow-right",
          "right-" + index )
      );
    } );

    const buttonsLeft = _.times( sourcePositionRange, ( index: number ) => {
      const startPos = getPositionStartByProcessedItem( props.processedItem );
      const endPos = startPos + index;
      const top = [
          ...props.rowHeights.filter( ( a: RowHeight ) => {
            return a.pos >= startPos && a.pos <= endPos;
          } ),
          ...props.connectionGapHeights.filter( ( a: RowHeight ) => {
            return a.pos >= startPos && a.pos < endPos;
          } ),
        ]
          .map( ( a: any ) => a.value )
          .reduce( ( accumulator: number, currentValue: number ) => {
            return accumulator + currentValue;
          }, 0 )
        - props.rowHeights.filter( ( a: RowHeight ) => {
          return a.pos === endPos;
        } )
          .map( ( a: any ) => {
            return a.value
          } )
          .reduce( ( accumulator: number, currentValue: number ) => {
            return accumulator + currentValue;
          }, 0 ) / 2;

      return (
        renderButton( isClick === "left-" + index ? selectorPosition.y - buttonSize / 2 : top,
          isClick === "left-" + index ? selectorPosition.x - buttonSize / 4 : -padding,
          buttonSize / 2,
          buttonSize,
          buttonSize / 2 + "px 0 0 " + buttonSize / 2 + "px",
          "arrow-left",
          "left-" + index )
      );
    } );

    const buttonBottom = renderButton(
      isClick === "bottom" ?
        selectorPosition.y - buttonSize / 4 :
        props.processedItem.height + padding,
      isClick === "bottom" ? selectorPosition.x - buttonSize / 2 : props.processedItem.width / 2,
      buttonSize,
      buttonSize / 2,
      "0 0 " + buttonSize / 2 + "px " + buttonSize / 2 + "px",
      "arrow-down",
      "bottom"
    );

    return (
      <React.Fragment key={Math.random()}>
        {getPositionStartByProcessedItem( props.processedItem ) != 0 && buttonTop}
        {!isDataPurpose( props.processedItem ) && buttonsRight}
        {!isDataSource( props.processedItem ) && buttonsLeft}
        {getPositionEndByProcessedItem( props.processedItem ) < (props.rowHeights.length - 1) && buttonBottom}
      </React.Fragment>
    )
  };

  return (
    <React.Fragment>
      <div ref={ref}
           css={theme => ([{
             position: "absolute",
           }])}
           onMouseMove={( e ) => {
             if( isClick ) {
               setSelectorPosition( {
                 x: e.clientX - ref.current.getBoundingClientRect().x,
                 y: e.clientY - ref.current.getBoundingClientRect().y
               } );
               const yVal = e.clientY - props.canvasY - props.headerPadding - props.canvasPadding
                 - props.processedCase.y;

               setPositionEnd( getPositionByY( yVal, props.canvasWidth, props.processedCase, props.rowHeights,
                 props.connectionGapHeights, buttonSize ) );
             }
           }}
           onMouseDownCapture={( e ) => {
             setSelectorPosition( {
               x: e.clientX - ref.current.getBoundingClientRect().x,
               y: e.clientY - ref.current.getBoundingClientRect().y
             } );
           }}
           onMouseUpCapture={() => {
             setIsClick( null );

             setSelectorPosition( { x: null, y: null } );
             if( sourceId && destinationId && positionStart != null && positionEnd != null ) {
               props.onUpdate( sourceId, destinationId, positionStart, positionEnd );
             }
           }}
      >


        {renderEditButtons()}

        {isClick
        && (<div css={theme => ([{
          position: "fixed",
          zIndex: 199,
          height: "100vh",
          width: "100vw",
          top: 0,
          left: 0,
        }])
        }/>)
        }
        {isClick && renderItems()}
      </div>


    </React.Fragment>
  )

};

export { ConnectionSelect };


