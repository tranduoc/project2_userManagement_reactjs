import React, { Component } from "react";

class DataRow extends Component {
  setAuthority = () => {
    if (this.props.authority === 1) {
      return "Admin";
    } else if (this.props.authority === 2) {
      return "Staff";
    } else {
      return "Intern";
    }
  };
  editUserClick = () => {
    this.props.changeEditStatus2();
    this.props.editUser2();
  };

  render() {
    return (
      <tr>
        <td>{this.props.number + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.phone}</td>
        <td>{this.setAuthority()}</td>
        <td>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.editUserClick();
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteUser2(this.props.id);
              }}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default DataRow;
