import React from "react";
import ColTitle from "../atoms/ColTitle";

type textForTitle = {
  titles: string[];
};

export default function TableTitle(props: textForTitle) {
  return (
    <thead>
      <tr>
        {props.titles.map((item) => (
          <ColTitle title={item}></ColTitle>
        ))}
      </tr>
    </thead>
  );
}
