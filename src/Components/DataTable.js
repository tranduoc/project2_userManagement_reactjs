import React, { Component } from "react";
import DataRow from "./DataRow";

class DataTable extends Component {
  mappingDataUser = () =>
    this.props.dataUserProps.map((value, key) => (
      <DataRow
        changeEditStatus2={() => this.props.changeEditStatus1()}
        editUser2={() => {
          this.props.editUser1(value);
        }}
        key={key}
        id={value.id}
        number={key}
        name={value.name}
        password={value.password}
        phone={value.phone}
        authority={value.authority}
        deleteUser2={(id) => this.props.deleteUser1(id)}
      />
    ));
  render() {
    return (
      <div className="col">
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
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
