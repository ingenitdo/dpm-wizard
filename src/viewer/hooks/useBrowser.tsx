import { useEffect, useState } from "react";

export const useBrowser = () => {

  let nAgt = navigator.userAgent;
  let nameOffset, verOffset;
  const [browserName, setBrowsername] = useState<string>( "" );
  const [fullVersion, setFullVersion] = useState<string>("");
  const [majorVersion, setMajorVersion] = useState<string>("");

  useEffect( () => {
    // In Opera, the true version is after "Opera" or after "Version"
    if( (verOffset = nAgt.indexOf( "Opera" )) !== -1 ) {
      setBrowsername( "Opera" );
      setFullVersion(nAgt.substring( verOffset + 6 ));
      if( (verOffset = nAgt.indexOf( "Version" )) !== -1 )
        setFullVersion(nAgt.substring( verOffset + 8 ));
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if( (verOffset = nAgt.indexOf( "Edge" )) !== -1 ) {
      setBrowsername( "Edge" );
      setFullVersion(nAgt.substring( verOffset + 5 ));
    }
    // In Chrome, the true version is after "Chrome"
    else if( (verOffset = nAgt.indexOf( "Chrome" )) !== -1 ) {
      setBrowsername( "Chrome" );
      setFullVersion(nAgt.substring( verOffset + 7 ));
    }
    // In Safari, the true version is after "Safari" or after "Version"
    else if( (verOffset = nAgt.indexOf( "Safari" )) !== -1 ) {
      setBrowsername( "Safari" );
      setFullVersion(nAgt.substring( verOffset + 7 ));

      if( (verOffset = nAgt.indexOf( "Version" )) !== -1 )
        setFullVersion(nAgt.substring( verOffset + 8 ));
    }
    // In Firefox, the true version is after "Firefox"
    else if( (verOffset = nAgt.indexOf( "Firefox" )) !== -1 ) {
      setBrowsername( "Firefox" );
      setFullVersion(nAgt.substring( verOffset + 8 ));
    }
    // In most other browsers, "name/version" is at the end of userAgent
    else if( (nameOffset = nAgt.lastIndexOf( ' ' ) + 1) <
      (verOffset = nAgt.lastIndexOf( '/' )) ) {
      setBrowsername( nAgt.substring( nameOffset, verOffset ) );
      setFullVersion(nAgt.substring( verOffset + 1 ));
      if( browserName.toLowerCase() === browserName.toUpperCase() ) {
        setBrowsername( navigator.appName );
      }
    }

  }, [] );

  useEffect( () => {
    setMajorVersion(fullVersion.substring(0, fullVersion.indexOf(".")));
  },[fullVersion]);

  return  [browserName, fullVersion, majorVersion];
};
