/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useEffect, useState } from "react";
import { Model } from "../../entities/Model";
import { Icon } from "../Icon";
import { TypoLabel } from "../typo/TypoLabel";
import { lightTheme } from "../../styles/light_theme";

export interface Props {
  onUploadFile: ( model: Model ) => void;
}

const DragAndDrop: React.FC<Props> = props => {

  const [file, setFile] = useState<Model | undefined>( undefined );
  const [filename, setFilename] = useState<string>( "" );
  const [isDragging, setIsDragging] = useState<boolean>( false );

  useEffect( () => {
    window.addEventListener( "dragover", ( e ) => {
      e.preventDefault();
    } );
    window.addEventListener( "drop", ( e ) => {
      e.preventDefault();
    } );

    return () => {
      window.removeEventListener( "dragover", () => {
      } );
      window.removeEventListener( "drop", () => {
      } );
    }
  }, [] );

  useEffect( () => {
    if( !!file ) {
      props.onUploadFile( file );
    }
  }, [file] );

  const uploadFile = ( file: any ) => {
    setFilename( file.name );
    const reader = new FileReader();
    reader.onload = ( e ) => {
      const newModel = reader.result;

      if( typeof newModel === "string" ) {
        const parsedModel = JSON.parse( newModel );

        setFile( parsedModel );
      }
    };
    reader.readAsText( file );
  };

  const onDrop = ( event: any ) => {
    uploadFile( event.dataTransfer.files[0] );
  };

  const onChange = ( event: any ) => {
    uploadFile( event.target.files[0] );
  };

  return (
    <div css={theme => ([{
      display: "flex"
    }])}>

      <input css={theme => ([{
        display: "none",
        width: "100%",
        height: "100%",
      }])}
             id={"img"}
             type="file"
             accept={"application/json"}
             name="file"
             onChange={onChange}
      />

      <label css={theme => ([{
        backgroundColor: isDragging ? "#dddddd" : "#f3f3f3",
        width: "100%",
        minHeight: "300px",
        border: "1px black dashed",

        cursor: "pointer",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }
      ])}
             htmlFor={"img"}
             onDragEnter={() => {
               setIsDragging( true )
             }}
             onDragLeave={() => {
               setIsDragging( false )
             }}
             onDrop={onDrop}

      >
        {!!file ? (
            <React.Fragment>
              <Icon name={"file"}
                    size={"xl"}
                    color={lightTheme.COLORS.TEXT}/>
              <TypoLabel>
                {filename}
              </TypoLabel>
            </React.Fragment>
          )
          : (
            <TypoLabel size={"s"}>
              Datei auswählen
            </TypoLabel>
          )}

      </label>
    </div>
  )
};

export { DragAndDrop };

