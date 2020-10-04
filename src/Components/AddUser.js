import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      password: "",
      phone: "",
      authority: "",
    };
  }
  ischangeUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  checkStatus = () => {
    if (this.props.showForm === true) {
      return (
        <div className="col-12">
          <div
            className="card text-white bg-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    onChange={(e) => this.ischangeUser(e)}
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="User name"
                    aria-describedby="helpId"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(e) => this.ischangeUser(e)}
                    type="text"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    aria-describedby="helpId"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(e) => this.ischangeUser(e)}
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone number"
                    aria-describedby="helpId"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select custom-select-sm"
                    name="authority"
                    onChange={(e) => this.ischangeUser(e)}
                  >
                    <option defaultValue={"Authority"}>Authority</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Staff</option>
                    <option value={3}>Intern</option>
                  </select>
                </div>
                <div className="form-group text-center">
                  <button
                    type="reset"
                    className="btn btn-warning "
                    onClick={(name, password, phone, authority) =>
                      this.props.getNewUserData1(
                        this.state.name,
                        this.state.password,
                        this.state.phone,
                        this.state.authority
                      )
                    }
                  >
                    Add user
                  </button>
                </div>
              </form>
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
