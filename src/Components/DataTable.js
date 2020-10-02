import React, { Component } from "react";

class DataTable extends Component {
  render() {
    return (
      <div className="col-9">
        <table className="table table-striped table-hover table-inverse ">
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Authority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>An Binh</td>
              <td>0978</td>
              <td>admin</td>
              <td>
                <div className="btn-group">
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
