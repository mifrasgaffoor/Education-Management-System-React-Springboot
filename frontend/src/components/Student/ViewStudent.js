import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewStudent = () => {
  const [Student, setStudent] = useState([]);

  const viewStudents = () => {
    axios
      .get("http://localhost:8080/api/v1/students")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteStudent = (id) => {
    axios
      .delete("http://localhost:8080/api/v1/students/" + id)
      .then((res) => {
        alert("student deletd");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    viewStudents();
  }, []);

  console.log(Student);
  return (
    <div className="container">
      <h3 className="text-center">Students Details</h3>
      <div className="row">
        <table className="table table-striped table bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          {Student.map((stu) => {
            return (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.firstName}</td>
                <td>{stu.lastName}</td>
                <td>{stu.emailId}</td>
                <td>
                  <Link to={`/editstudent/${stu.id}`}>
                    <button type="button" class="btn btn-primary">
                      Edit Details
                    </button>
                  </Link>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      deleteStudent(stu.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ViewStudent;
