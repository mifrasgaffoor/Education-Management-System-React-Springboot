import React from "react";
import "../../App.css";
const ViewClassRoom = () => {
  return (
    <div className="viewclassroom">
      <table>
        <tr>
          <th>ClassNo</th>
          <th>Decription</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>01</td>
          <td>Maria Anders</td>
          <td>
            <button className="viewclassroombtn1">Edit</button>
            <button className="viewclassroombtn2">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ViewClassRoom;
