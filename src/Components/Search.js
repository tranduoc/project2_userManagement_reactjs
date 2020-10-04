import React, { Component } from "react";
import EditUser from "./EditUser";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
    };
  }
  isChange = (event) => {
    this.setState({
      tempValue: event.target.value,
    });
    this.props.searchResult1(this.state.tempValue);
  };

  showBottom = () => {
    if (this.props.showForm === true) {
      return (
        <div className="col-12 text-center">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.connectComponent()}
          >
            Close
          </button>
        </div>
      );
    } else {
      return (
        <div className="col-12 text-center">
          <button
            type="button"
            className="btn btn-primary container mb-2"
            onClick={() => this.props.connectComponent()}
          >
            Add User
          </button>
        </div>
      );
    }
  };

  showEditUser = () => {
    if (this.props.editUserStatus1 === true) {
      return (
        <div className="row">
          <EditUser
            changeEditStatus2={() => this.props.changeEditStatus1()}
            userEdit2={this.props.userEdit1}
            getEditUserData2={(id, name, password, phone, authority) => {
              this.props.getEditUserData1(id, name, password, phone, authority);
            }}
          />
        </div>
      );
    }
  };
  render() {
    return (
      <div className="searchForm container">
        {this.showEditUser()}
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={(event) => this.isChange(event)}
                />
              </div>
              <div className="col-3">
                <button
                  className="btn btn-primary mb-2"
                  onClick={(datatext) =>
                    this.props.searchResult1(this.state.tempValue)
                  }
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">{this.showBottom()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
