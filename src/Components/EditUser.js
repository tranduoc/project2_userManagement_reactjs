import React, { Component } from "react";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userEdit2.id,
      name: this.props.userEdit2.name,
      password: this.props.userEdit2.password,
      phone: this.props.userEdit2.phone,
      authority: this.props.userEdit2.authority,
    };
  }
  ischangeUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  editUser = () => {
    this.props.changeEditStatus2();

    this.props.getEditUserData2(
      this.state.id,
      this.state.name,
      this.state.password,
      this.state.phone,
      this.state.authority
    );
  };
  render() {
    return (
      <div className="col">
        <div className="card text-white bg-warning mb-3">
          <div className="card-body">
            <form>
              <div className="form-group">
                <input
                  defaultValue={this.props.userEdit2.name}
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
                  defaultValue={this.props.userEdit2.password}
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
                  defaultValue={this.props.userEdit2.phone}
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
                  defaultValue={this.props.userEdit2.authority}
                  className="custom-select custom-select-sm"
                  name="authority"
                  onChange={(e) => this.ischangeUser(e)}
                >
                  <option>Authority</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Staff</option>
                  <option value={3}>Intern</option>
                </select>
              </div>
              <div className="form-group text-center">
                <button
                  type="reset"
                  className="btn btn-danger "
                  onClick={() => this.editUser()}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
