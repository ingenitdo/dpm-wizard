/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { useEffect, useState } from "react";
import { Dialog } from "../../../../components/dialog/Dialog";
import { DialogButtonBar } from "../../../../components/dialog/DialogButtonBar";
import { Button } from "../../../../components/Button";
import { DialogBody } from "../../../../components/dialog/DialogBody";
import { Model } from "../../../../entities/Model";
import { DialogHeader } from "../../../../components/dialog/DialogHeader";
import { ModelViewer } from "../../../../viewer/ModelViewer";
import { InputCheckbox } from "../../../../components/input/InputCheckbox";
import { ButtonContainer } from "../../../../components/layout/ButtonContainer";
import { Icon } from '../../../../components/icon_picker/Icon';

export interface Props {
  simpleModel: Model;
  detailedModel: Model;
  onClose: () => void;
}

const PreviewDialog: React.FC<Props> = props => {

  const [forceShowTutorial, setForceShowTutorial] = useState<boolean>( false );
  return (
    <Dialog size={"fullsize"}>
      <DialogHeader>
        <div css={theme => ([{
          display: "flex",
          justifyContent: "space-between"
        }])}>
          <div css={theme => ([{
            display: "flex",
            flexDirection: "column"
          }])}>
            <div>
              Vorschau
            </div>
            <ButtonContainer>
              <Button onClick={() => {
                setForceShowTutorial( !forceShowTutorial );
              }}>Tutorial anzeigen</Button>
            </ButtonContainer>
          </div>

          <div css={theme => ([{
            width: 1 + "vw",
            height: 1 + "vw",
            cursor: "pointer"
          }])}>
            <Icon name={"close"} onClick={props.onClose}/>
          </div>
        </div>
      </DialogHeader>
      <DialogBody maxHeight={80}>
        <ModelViewer detailedModel={props.detailedModel}
                     simpleModel={props.simpleModel}
                     showDetailedModel={true}
                     canvasHeight={"100%"}
                     isPreviewMode={true}
                     forceShowTutorial={forceShowTutorial}
        />
      </DialogBody>
      <DialogButtonBar>
        <Button onClick={props.onClose}
                type="primary"
        >Ok
        </Button>

      </DialogButtonBar>
    </Dialog>
  )
};

export { PreviewDialog };