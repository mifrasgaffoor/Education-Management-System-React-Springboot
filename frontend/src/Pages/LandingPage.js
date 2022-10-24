import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1 className="text-center">Welcome to Education Management System !</h1>
      <div className="landing_container">
        <Link to="/teacher">
          <div className="landing1">
            <img
              className="image"
              src="https://thumbs.dreamstime.com/b/portrait-young-male-teacher-background-school-blackboard-teacher-s-day-knowledge-day-back-to-school-study-159722312.jpg"
              alt=""
            />
            <h2>Teacher </h2>
          </div>
        </Link>

        <Link to="/student">
          {" "}
          <div className="landing1">
            <img
              className="image"
              src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?w=2000"
              alt=""
            />
            <h2>Student </h2>
          </div>
        </Link>

        <Link to="/class">
          <div className="landing1">
            <img
              className="image"
              src="https://static.vecteezy.com/system/resources/previews/003/303/818/original/empty-classroom-scene-with-interior-decoration-and-objects-free-vector.jpg"
              alt=""
            />
            <h2>ClassRoom </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
