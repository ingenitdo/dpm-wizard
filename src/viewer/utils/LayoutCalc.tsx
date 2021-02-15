export const getAbsoluteValue = ( width: number, value: number ) => {
  const res = width / 100 * value;
  return res < 0 ? 0 : res;
};

export const changeColor = ( dataUri: string, color: string ) => {
  const btob = dataUri.substring( dataUri.indexOf( "," ) + 1 );
  const atob = window.atob( btob );
  if( atob.includes( "fill" ) ) {
    const str = atob.replace( new RegExp( /#[0-9a-f]{6}|#[0-9a-f]{3}/, 'gi' ), color);
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