import React from "react";

type textForTitle = {
  title: string;
};

export default function ColTitle(props: textForTitle) {
  return <th scope="col">{props.title}</th>;
}
