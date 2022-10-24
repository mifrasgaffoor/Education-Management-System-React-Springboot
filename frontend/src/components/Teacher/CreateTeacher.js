import React from "react";

const CreateTeacher = () => {
  return (
    <div>
      <div className="createteacher_container">
        <div>
          <h1>Add Teacher Details</h1>
        </div>
        <label>FirstName</label>
        <input type="text"></input> <br />
        <label>LastName</label>
        <input type="text"></input> <br />
        <label>Subject</label>
        <input type="text"></input> <br />
        <label>Address</label>
        <textarea type="text"></textarea> <br />
        <button className="btn">Add </button>
      </div>
    </div>
  );
};
export default CreateTeacher;
