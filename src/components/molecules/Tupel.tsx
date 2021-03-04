import React from "react";
import User from "../../services/userModel/model/User";
import ListItem from "../atoms/ListItem";

type textForTupel = {
  value: User;
};

export default function Tupel(props: textForTupel) {
  return (
    <tbody>
      <tr>
        <ListItem value={props.value.id}></ListItem>
        <ListItem value={props.value.vorname}></ListItem>
        <ListItem value={props.value.name}></ListItem>
        <ListItem value={props.value.strasse}></ListItem>
        <ListItem value={props.value.plz}></ListItem>
        <ListItem value={props.value.ort}></ListItem>
      </tr>
    </tbody>
  );
}
