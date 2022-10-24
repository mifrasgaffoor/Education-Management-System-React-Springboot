import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditStudent = () => {
  let { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [emailId, setEmail] = useState("");

  const getStudentById = (id) => {
    axios
      .get("http://localhost:8080/api/v1/students/" + id)
      .then((res) => {
        console.log(res.data);
        setFirstName(res.data.firstName);
        setLasttName(res.data.lastName);
        setEmail(res.data.emailId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateStudent = (e) => {
    e.preventDefault();
    const student = { firstName, lastName, emailId };
    axios
      .put("http://localhost:8080/api/v1/students/" + id, student)
      .then((res) => {
        alert("update ok ");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudentById(id);
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Update Students Details</h2>
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
                className="btn btn-primary"
                onClick={(e) => {
                  updateStudent(e);
                }}
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

export default EditStudent;
