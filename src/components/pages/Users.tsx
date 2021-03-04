import { cleanup } from "@testing-library/react";
import React, { useEffect } from "react";
import { useState } from "react";
import User from "../../services/userModel/model/User";
import UserServiceImpl from "../../services/userModel/UserServiceImpl";

export default function Users() {
  const [users, setData] = useState<User[]>([]);
  const userServiceImpl = new UserServiceImpl();

  useEffect(() => {
    userServiceImpl.retrieveAll().then((item) => {
      setData(item);
    });
  }, []);

  return (
    <div className="container">
      <h1>users</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Vorname</th>
            <th scope="col">Nachname</th>
            <th scope="col">Strasse</th>
            <th scope="col">PLZ</th>
            <th scope="col">Ortschaft</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.vorname}</td>
              <td>{item.name}</td>
              <td>{item.strasse}</td>
              <td>{item.plz}</td>
              <td>{item.ort}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
