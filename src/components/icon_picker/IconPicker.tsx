/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useState } from "react";
import { TypoLabel } from "../typo/TypoLabel";
import { IconPickerDialog } from "./IconPickerDialog";
import { IconType as IconType } from "../../entities/IconType";
import { Icon } from "./Icon";

export interface Props {
    label?: string;
    value: IconType;
  onChange:(icon: IconType) => void;
}

const IconPicker: React.FC<Props> = props => {

  const [showIconPickerDialog, setShowIconPickerDialog] = useState<boolean>( false );
  const [selectedIcon, setSelectedIcon] = useState<IconType>( props.value );

  return (
    <div css={theme => ([{
      margin: "0.6vw 0"
    }])}>
      {props.label && (
        <TypoLabel size={"xs"} margin={true}>{props.label}</TypoLabel>
      )}
      <div css={theme => ([{
        height: "2vw",
        width: "2vw",
        padding: "0.4vw",
        borderColor: theme.INPUT.BORDER_COLOR,
        borderWidth: theme.INPUT.BORDER_WIDTH,
        borderRadius: theme.INPUT.BORDER_RADIUS,
        borderStyle: theme.INPUT.BORDER_STYLE,
        "&:hover": {
          cursor: "pointer"
        }
      }])
      }
           onClick={() => {
             setShowIconPickerDialog( true );
           }}
      >
        <Icon icon={selectedIcon}/>
      </div>
      {showIconPickerDialog && (
        <IconPickerDialog icon={selectedIcon} onClose={() => {
          setShowIconPickerDialog( false );
        }}
                          onUpdate={( icon: IconType ) => {
                            props.onChange(icon);
                            setSelectedIcon( icon );
                            setShowIconPickerDialog( false );
                          }}
        />
      )}
    </div>
  )
};

export { IconPicker };