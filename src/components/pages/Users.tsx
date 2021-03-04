import { cleanup } from "@testing-library/react";
import React, { useEffect } from "react";
import { useState } from "react";
import User from "../../services/userModel/model/User";
import UserServiceImpl from "../../services/userModel/UserServiceImpl";
import Table from "../organisms/Table";

export default function Users() {
  const [users, setData] = useState<User[]>([]);
  const userServiceImpl = new UserServiceImpl();
  const titles = ["#", "Vorname", "Nachname", "Strasse", "PLZ", "Ortschaft"];
  useEffect(() => {
    userServiceImpl.retrieveAll().then((item) => {
      setData(item);
    });
  }, []);

  return (
    <div className="container">
      <h1>users</h1>
      <Table values={users} titles={titles}></Table>
    </div>
  );
}
