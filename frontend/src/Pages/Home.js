import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Home = () => {
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
        <div className="student">
          <Link to="/createstudent">
            <h3>Add-Student</h3>
          </Link>

          <Link to="/viewstudent">
            <h3>View-Student</h3>
          </Link>
        </div>
        <div className="classroom">
          <Link to="/createclass">
            <h3>Add-ClassRoom</h3>
          </Link>
          <Link to="/viewclass">
            <h3>View-ClassRoom</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
