import React from "react";
import { Link } from "react-router-dom";
const Teacher = () => {
  return (
    <div className="home">
      <div className="education">
        <div className="teacher">
          <Link to="/createteacher">
            <h3>Add- Teacher</h3>
          </Link>
          <Link to="/viewteacher">
            <h3>View- Teacher</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
