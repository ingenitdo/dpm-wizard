/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from "react";
import { SUBTITLE_LABEL_SIZE } from "../Constants";
import { filter_blur } from "../style/style";

interface Props {
  subtitle: string;
  height: number;
  marginBottom: number;
  isInfoDialogBlurred?: boolean;
}

const SubTitle: React.FunctionComponent<Props> = props => {

  return (
    <div css={theme => ([{
      transition: '* 0.5s ease-in',
      height: props.height,
      marginBottom: props.marginBottom
    }, props.isInfoDialogBlurred && filter_blur])}>
      <h1 css={theme => ([{
        fontSize: SUBTITLE_LABEL_SIZE + "vw",
        margin: 0,
        opacity: props.height > 0 ? 1 : 0
      }])}>{props.subtitle}</h1>
    </div>
  );

};

export { SubTitle };
