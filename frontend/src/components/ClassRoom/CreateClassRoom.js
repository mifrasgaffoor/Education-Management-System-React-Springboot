import React, { useState } from "react";

const AddClassRoom = () => {
  const [classroom, setClassroom] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="container">
      <h2 className="text-center">Create ClassRoom Details </h2>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 ">
          <div className="Card">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">ClassName</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Grade-01</option>
                  <option>Grade-02</option>
                  <option>Grade-03</option>
                  <option>Grade-04</option>
                  <option>Grade-05</option>
                  <option>Grade-06</option>
                  <option>Grade-07</option>
                  <option>Grade-08</option>
                  <option>Grade-09</option>
                  <option>Grade-10</option>
                  <option>Grade-11</option>
                </select>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Description</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="button" className="btn btn-success">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClassRoom;
