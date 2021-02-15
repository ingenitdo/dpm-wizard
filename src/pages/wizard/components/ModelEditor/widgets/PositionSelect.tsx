/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { createRef, useState } from "react";
import { Icon } from "../../../../../components/Icon";
import { getAbsoluteValue } from "../../../../../viewer/utils/LayoutCalc";
import { useTheme } from "emotion-theming";

interface Props {
  canvasX: number;
  canvasY: number;
  canvasWidth: number;

  x: number;
  y: number;
  rowHeights: any;
  connectionGapHeights: any;
  startPosition: number;
  width: number;
  onUpdate: ( position: number ) => void;
}

const PositionSelect: React.FunctionComponent<Props> = props => {

  const theme = useTheme<any>();
  const ref = createRef<HTMLDivElement>();
  const [isClick, setIsClick] = useState<boolean>( false );
  const [newPos, setNewPos] = useState<number | null>( null );
  const [selectorPosition, setSelectorPosition] = useState( { x: 0, y: 0 } );

  const padding = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.OVERLAY_PADDING_SIZE );
  const size = getAbsoluteValue( props.canvasWidth, theme.DIMENSIONS.EDIT_BUTTON_SIZE );
  return (
    <div ref={ref}
         css={theme => ([{
           position: "absolute",
           top: props.y,
           left: props.x - padding / 2
         }])}
         onMouseMove={( e ) => {
           if( isClick ) {
             setSelectorPosition( {
               x: e.clientX - ref.current.getBoundingClientRect().x,
               y: e.clientY - ref.current.getBoundingClientRect().y
             } );
           }
         }}
         onMouseUpCapture={() => {
           setIsClick( false );
           props.onUpdate( newPos );
           setSelectorPosition( { x: 0, y: 0 } );
         }}
    >
      <div css={theme => ([{
        position: "absolute",
        top: selectorPosition.y,
        left: selectorPosition.x,
        width: size,
        minHeight: size,
        backgroundColor: theme.COLORS.EDIT.PRIMARY.DEFAULT,
        borderRadius: "25px",
        transition: "background-color 0.5s ease-in-out",

        ":hover": {
          cursor: "pointer"
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }])}
           onMouseDownCapture={() => {
             setIsClick( true )
           }}
      >
        <Icon name={"hand"}
              color={theme.COLORS.EDIT.SECONDARY.DEFAULT}
              size={size * 0.6}
        />
      </div>

      {isClick && (
        <div css={theme => ([{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw"
        }])}/>
      )}

      {isClick && props.rowHeights.map( ( a: any, index: number ) => {

        const left = -props.x + padding / 2;

        const topTemp = props.rowHeights.filter( ( b: any ) => b.pos < a.pos ).map( ( b: any ) => b.value )
            .reduce( ( acc: number, current: number, i: number ) => {
              return (acc + current)
            }, 0 )
          + props.connectionGapHeights.filter( ( b: any ) => b.pos < a.pos ).map( ( b: any ) => b.value )
            .reduce( ( acc: number, current: number, i: number ) => {
              return (acc + current)
            }, 0 );

        const offset = props.rowHeights.filter( ( b: any ) => b.pos < props.startPosition )
            .map( ( b: any ) => b.value ).reduce( ( acc: number, current: number, i: number ) => {
              return (acc + current)
            }, 0 )
          + props.connectionGapHeights.filter( ( b: any ) => b.pos < props.startPosition )
            .map( ( b: any ) => b.value ).reduce( ( acc: number, current: number, i: number ) => {
              return (acc + current)
            }, 0 );

        const top = topTemp - offset - props.y + padding / 2;

        const connectionGapHeight = props.connectionGapHeights.find( ( b: any ) => {
          return b.pos === a.pos
        } );

        if( a.pos !== props.startPosition ) {

          return (
            <React.Fragment key={Math.random()}>
              <div css={theme => ([{
                position: "absolute",
                zIndex: 20,
                width: props.width + padding,
                height: a.value + padding,
                top: top,
                left: left,
                border: "3px " + theme.COLORS.EDIT.PRIMARY.DEFAULT + " dashed",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                fontWeight: 800,
                backgroundColor: "rgba(0,0,0,0.3)",
                color: theme.COLORS.EDIT.PRIMARY.DEFAULT,
                "&:hover": {
                  backgroundColor: "rgba(255,189,76,0.5)",
                }
              }])}
                   onMouseEnter={() => {
                     if( newPos !== a.pos ) {
                       setNewPos( a.pos );
                     }
                   }}

                   onMouseLeave={() => {
                     if( newPos !== null ) {
                       setNewPos( null );
                     }
                   }}
              >{index}
              </div>
              {index === props.rowHeights.length - 1 && (
                <div css={theme => ([{
                  position: "absolute",
                  zIndex: 20,
                  width: props.width + padding,
                  height: a.value + padding,
                  top: top + a.value + connectionGapHeight.value,
                  left: left,
                  border: "3px " + theme.COLORS.EDIT.PRIMARY.DEFAULT + " dashed",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: 800,
                  backgroundColor: "rgba(0,0,0,0.3)",
                  color: theme.COLORS.EDIT.PRIMARY.DEFAULT,
                  "&:hover": {
                    backgroundColor: "rgba(255,189,76,0.5)",
                  }
                }])}

                     onMouseEnter={() => {
                       if( newPos !== a.pos + 1 ) {
                         setNewPos( a.pos + 1 );
                       }
                     }}

                     onMouseLeave={() => {
                       if( newPos !== null ) {
                         setNewPos( null );
                       }
                     }}>{index + 1}</div>

              )}
            </React.Fragment>
          );
        }
        else if( index === (props.rowHeights.length - 1) ) {
          return (
            <div key={Math.random()}
                 css={theme => ([{
                   position: "absolute",
                   zIndex: 20,
                   width: props.width + padding,
                   height: a.value + padding,
                   top: top + a.value + connectionGapHeight.value,
                   left: left,
                   border: "3px " + theme.COLORS.EDIT.PRIMARY.DEFAULT + " dashed",
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   fontSize: "20px",
                   fontWeight: 800,
                   backgroundColor: "rgba(0,0,0,0.3)",
                   color: theme.COLORS.EDIT.PRIMARY.DEFAULT,
                   "&:hover": {
                     backgroundColor: "rgba(255,189,76,0.5)",
                   }
                 }])}

                 onMouseEnter={() => {
                   if( newPos !== a.pos + 1 ) {
                     setNewPos( a.pos + 1 );
                   }
                 }}

                 onMouseLeave={() => {
                   if( newPos !== null ) {
                     setNewPos( null );
                   }
                 }}>{index + 1}</div>
          )
        }
      } )}
    </div>

  )
};

export { PositionSelect };


