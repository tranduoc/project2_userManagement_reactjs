import React, { Component } from "react";
import DataRow from "./DataRow";

class DataTable extends Component {
  mappingDataUser = () => {
    return this.props.dataUserProps.map((value, key) => (
      <DataRow
        key={key}
        number={key}
        name={value.name}
        password={value.password}
        phone={value.phone}
        authority={value.authority}
      />
    ));
  };

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
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
