/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { Dialog } from "../dialog/Dialog";
import { DialogBody } from "../dialog/DialogBody";
import { DialogButtonBar } from "../dialog/DialogButtonBar";
import { Button } from "../Button";
import { useState } from "react";
import { TypoHeadline } from "../typo/TypoHeadline";
import { icons } from "./Icons";
import { IconType as IconType } from "../../entities/IconType";
import { Icon } from "./Icon";
import { v4 as uuidv4 } from 'uuid';
import { changeColor } from "../../viewer/utils/LayoutCalc";

export interface Props {
  icon: IconType;
  onUpdate: ( icon: IconType ) => void;
  onClose: () => void;
}

const IconPickerDialog: React.FC<Props> = props => {

  const [color, setColor] = useState<string>( "#000000" );

  const [selectedIcon, setSelectedIcon] = useState<IconType>( props.icon );


  const onChange = ( event: any ) => {

    const reader = new FileReader();

    reader.onload = ( event: ProgressEvent<FileReader> ) => {
      setSelectedIcon({id: uuidv4(), dataUri: changeColor(event.target.result.toString(), color)})
    };
    reader.readAsDataURL( event.target.files[0] );
  };

  return (
    <Dialog>
      <DialogBody>
        <TypoHeadline>Icon auswählen</TypoHeadline>

        <div css={theme => ([{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: 10
        }])}>
          <svg width="140" height="140"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg">

            <image width="100" height="100" style={{ fill: "red" }} href={selectedIcon.dataUri}/>

          </svg>
        </div>


        {/*ICON GRID*/}
        <div css={theme => ([{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"

        }])}>
          {icons.map( ( icon: any ) => {
            return (
              <div key={icon.id}
                   css={theme => ([{
                     flex: "1 0 12.5%",
                     maxWidth: "calc(12.5% - 2px - 4%)",
                     maxHeight: "3vw",
                     padding: "2%",

                     border: "1px solid black",
                     backgroundColor: selectedIcon.id === icon.id ? "orange" : "none",

                     "&:last-of-type": {
                       marginRight: "auto"
                     },
                     "&:hover": {
                       backgroundColor: selectedIcon.id !== icon.id ? "#f2f2f2" : "orange",
                       cursor: "pointer"
                     }
                   }])}
                   onClick={() => {
                     setSelectedIcon( icon );
                   }}
              >
                <Icon name={icon.id}/>
              </div>
            )
          } )
          }
        </div>
      </DialogBody>

      <DialogButtonBar hasDelete={true}>
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
                 name="file"
                 onChange={onChange}
          />
          <label htmlFor={"img"}><Button onClick={() => {}}>Eigenes hochladen</Button></label>
        </div>

        <Button onClick={props.onClose}>Schließen</Button>
        <Button type={"primary"}
                onClick={() => {
                  props.onUpdate( selectedIcon )
                }}
        >
          Auswählen
        </Button>
      </DialogButtonBar>
    </Dialog>
  )
};

export { IconPickerDialog };