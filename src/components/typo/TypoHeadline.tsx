/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export type HeadlineSize = "xs" | "s" | "m" | "l" | "xl" | number;
const headlineSizeMapping = [
  { key: 'xs', val: 0.4 },
  { key: 's', val: 0.8 },
  { key: 'm', val: 1 },
  { key: 'l', val: 1.2 },
  { key: 'xl', val: 2 }
];

export interface Props {
  size?: HeadlineSize;
  margin?: boolean;
  color?: string;
  center?: boolean;
}

const TypoHeadline: React.FC<Props> = props => {

  const size = props.size
    ? typeof props.size !== 'number'
      ? headlineSizeMapping.find( size => size.key === props.size )!.val
      : props.size
    : 1.6;

  const marginBottom = props.margin ? size : 0;

  return (
    <h1 css={theme => ([{
      color: props.color || theme.COLORS.PRIMARY.DEFAULT,
      fontSize: size + "vw",
      fontFamily: "Helvetica",
      fontWeight: 700,
      marginTop: 0,
      marginBottom: marginBottom + "vw",
      textAlign: props.center ? "center": "inherit"
    }])}>
      {props.children}
    </h1>
  )
};

export { TypoHeadline };