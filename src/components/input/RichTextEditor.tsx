/** @jsx jsx */
import { jsx } from '@emotion/core'
import ReactQuill, { Quill } from "react-quill";
import * as React from "react";
import { useState } from "react";
import { TypoLabel } from "../typo/TypoLabel";
import htmlEditButton from "quill-html-edit-button";

interface Props {
  value: string;
  label?: string;
  onChange: ( value: string ) => void;
}

const toolbar = [
  [{ 'size': ['small', false, 'large', 'huge'] }],
  ["bold", "italic", "underline", "strike"],
  //  [{ "align": [] }],
  [{ list: "bullet" }, { list: "ordered" }],
  ["link"],
  ["image"],
  ["video"],
  ["clean"]
];

Quill.register({
  "modules/htmlEditButton": htmlEditButton
});

const RichTextEditor = ( props: Props ) => {

  const [value, setValue] = useState<string>(props.value);
  return (
    <div css={theme => ([{
      backgroundColor: "#fff",
      borderRadius: 10,
      margin: "0.6vw 0"
    }])}>
      {props.label && (
        <TypoLabel size={"xs"} margin={true}>{props.label}</TypoLabel>
      )}
      <ReactQuill
        value={value}
        modules={
          { toolbar: toolbar,
            htmlEditButton: {}
          }
        }
        onChange={(val: string) => {
          setValue(val);
          props.onChange(val);
        }}
      />
    </div>
  );
};

export { RichTextEditor };