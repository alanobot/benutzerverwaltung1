import React from "react";

type textForList = {
  value: string;
};

export default function ListItem(props: textForList) {
  return <td >{props.value}</td>;
}
