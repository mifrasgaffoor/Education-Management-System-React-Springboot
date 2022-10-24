import React from "react";
import { Link } from "react-router-dom";
const Student = () => {
  return (
    <div>
      <div className="home">
        <div className="education">
          <div className="student">
            <Link
              to="/createstudent"
              type="button"
              className="btn btn-outline-primary"
            >
              <h3>Add-Student</h3>
            </Link>

            <Link
              to="/viewstudent"
              type="button"
              className="btn btn-outline-primary"
            >
              <h3>View-Student</h3>
            </Link>
          </div>

          <Link className="btn btn-outline-primary" type="button" to="/">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Student;
