import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h4 className="display-4">User Management</h4>
          <p className="lead">Use data json</p>
          <hr className="my-2" />
        </div>
      </div>
    );
  }
}

export default Header;
