/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from "react";
import { TITLE_LABEL_SIZE } from "../Constants";
import { filter_blur } from "../style/style";

interface Props {
  title: string;
  height: number;
  marginBottom: number;
  isInfoDialogBlurred?: boolean;
}

const Title: React.FunctionComponent<Props> = props => {

  return (

    <div css={theme => ([{
      minHeight: props.height,
      marginBottom: props.marginBottom
    }, props.isInfoDialogBlurred && filter_blur])}>
      <h1 css={theme => ([{
        fontSize: TITLE_LABEL_SIZE + "vw",
        margin: 0
      }])}>{props.title}</h1>
    </div>
  );

};

export { Title };
