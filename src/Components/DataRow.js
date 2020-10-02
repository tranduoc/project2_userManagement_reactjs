import React, { Component } from "react";

class DataRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.number + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.authority}</td>
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
    );
  }
}

export default DataRow;
