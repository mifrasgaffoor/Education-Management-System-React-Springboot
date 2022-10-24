import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
const CreateStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [emailId, setEmail] = useState("");

  const saveStudent = (e) => {
    e.preventDefault();
    const student = { firstName, lastName, emailId };
    console.log(student);
    console.log(student.email);
    axios
      .post("http://localhost:8080/api/v1/students", student)
      .then((res) => {
        console.log(res.data);
        message.success("Students Details Filled Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Pleae Fill this form only For Students</h2>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 ">
          <div className="Card">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">FirstName</label>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Enter your FirstName"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">LastName</label>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Enter your LastName"
                  className="form-control"
                  onChange={(e) => setLasttName(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">LastName</label>
                <input
                  type="text"
                  value={emailId}
                  placeholder="Enter your Email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={(e) => saveStudent(e)}
              >
                Add Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
