/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";

export type LabelSize = "xs" | "s" | "m" | "l" | "xl" | number;
const labelSizeMapping = [
  { key: 'xs', val: 0.6 },
  { key: 's', val: 0.8 },
  { key: 'm', val: 1.2 },
  { key: 'l', val: 1.6 },
  { key: 'xl', val: 2 }
];

export interface Props {
  size?: LabelSize;
  margin?: boolean;
}

const TypoLabel: React.FC<Props> = props => {

  const size = props.size
    ? typeof props.size !== 'number'
      ? labelSizeMapping.find( size => size.key === props.size )!.val
      : props.size
    : 1.2;

  const marginBottom = props.margin ? size / 3 : 0;

  return (
    <h1 css={theme => ([{
      color: theme.COLORS.TEXT,
      fontSize: size + "vw",
      fontFamily: "Helvetica",
      fontWeight: 700,
      marginBottom: marginBottom + "vw"
    }])}>
      {props.children}
    </h1>
  )
};

export { TypoLabel };