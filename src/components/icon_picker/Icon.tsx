/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { icons } from "./Icons";
import { IconType } from "../../entities/IconType";

export interface Props {
  name?: string;
  color?: string;
  icon?: IconType;
  size?: string;
  onClick?: () => void;
  onHover?: () => void;
}

const Icon: React.FC<Props> = props => {

  const img = icons.find( ( icon: any ) => {
    return icon.id === props.name;
  } );

  const color = props.color ? props.color : "#000000";

  const size = props.size ? props.size : "100%";

  const changeColor = ( dataUri: string, color: string ) => {
    const btob = dataUri.substring( dataUri.indexOf( "," ) + 1 );
    const atob = window.atob( btob );
    if( atob.includes( "fill" ) ) {
      const str = atob.replace( new RegExp( /#[0-9a-f]{6}|#[0-9a-f]{3}/, 'gi' ), color );
      const b = window.btoa( str );

      return "data:image/svg+xml;base64," + b;
    }
    else {
      const startIndex = atob.indexOf( "<svg" ) + 4;
      const prefix = atob.substring( 0, startIndex );
      const suffix = atob.substring( startIndex );
      const str = prefix + ' fill="' + color + '" ' + suffix;
      const b = window.btoa( str );

      return "data:image/svg+xml;base64," + b;
    }

  };

  return (
    <svg width={size} height={size}
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         onClick={props.onClick}
    >

      <image width="100%" height="100%" style={{ fill: "red" }}
             href={props.icon ? changeColor( props.icon.dataUri, color ) : changeColor( img.dataUri, color )}/>

    </svg>
  )
};

export { Icon };