import React from "react";

const ViewTeacher = () => {
  return (
    <div>
      <div className="viewsteacher">
        <table>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Subject</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Mifras</td>
            <td>Gaffoor</td>
            <td>Maths</td>
            <td>Ampara</td>
            <td>
              <button className="viewstudentroombtn1">Edit</button>
              <button className="viewstudentroombtn2">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ViewTeacher;
