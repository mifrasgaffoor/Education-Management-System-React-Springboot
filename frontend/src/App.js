import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Routes, Route } from "react-router-dom";
import CreateClassRoom from "./components/ClassRoom/CreateClassRoom";
import EditClassRoom from "./components/ClassRoom/EditClassRoom";
import ViewClassRoom from "./components/ClassRoom/ViewClassRoom";
import CreateTeacher from "./components/Teacher/CreateTeacher";
import EditTeacher from "./components/Student/EditStudent";
import CreateStudent from "./components/Student/CreateStudent";
import EditStudent from "./components/Student/EditStudent";
import ViewStudent from "./components/Student/ViewStudent";
import ViewTeacher from "./components/Teacher/ViewTeacher";

import LandingPage from "./Pages/LandingPage";
import Student from "./Pages/Student";
import Teacher from "./Pages/Teacher";
import ClassRoom from "./Pages/ClassRoom";
const App = () => {
  return (
    <Routes>
      <Route path="/createclass" element={<CreateClassRoom />} exact />
      <Route path="/editclass" element={<EditClassRoom />} exact />
      <Route path="/viewclass" element={<ViewClassRoom />} exact />
      <Route path="/createteacher" element={<CreateTeacher />} exact />
      <Route path="/editteacher" element={<EditTeacher />} exact />
      <Route path="/viewteacher" element={<ViewTeacher />} exact />
      <Route path="/createstudent" element={<CreateStudent />} exact />
      <Route path="/editstudent/:id" element={<EditStudent />} exact />
      <Route path="/viewstudent" element={<ViewStudent />} exact />
      <Route path="/student" element={<Student />} exact />
      <Route path="/teacher" element={<Teacher />} exact />
      <Route path="/class" element={<ClassRoom />} exact />
      <Route path="/" element={<LandingPage />} exact />
    </Routes>
  );
};

export default App;
