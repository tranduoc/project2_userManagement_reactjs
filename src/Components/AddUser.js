import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  checkStatus = () => {
    if (this.props.showForm === true) {
      return (
        <div className="col-12">
          <div
            className="card text-white bg-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="User name"
                  aria-describedby="helpId"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  aria-describedby="helpId"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phonenumber"
                  className="form-control"
                  placeholder="Phone number"
                  aria-describedby="helpId"
                />
              </div>
              <div className="form-group">
                <select className="custom-select custom-select-sm">
                  <option defaultValue={"Authority"}>Authority</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Staff</option>
                  <option value={3}>Intern</option>
                </select>
              </div>
              <div className="form-group text-center">
                <button type="button" className="btn btn-warning ">
                  Add user
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return <div>{this.checkStatus()}</div>;
  }
}

export default AddUser;
