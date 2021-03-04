import React from "react";
import User from "../../services/userModel/model/User";
import Tupel from "../molecules/Tupel";
import TableTitle from "./TableTitle";


type textForTable = {
  titles: string[];
  values: User[];
};

export default function Table(props: textForTable) {
  return (
    <table className="table">
      <TableTitle titles={props.titles}></TableTitle>

      {props.values.map((user) => (
        <Tupel value={user}></Tupel>
      ))}
    </table>
  );
}
