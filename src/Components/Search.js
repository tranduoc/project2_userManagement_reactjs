import React, { Component } from "react";

class Search extends Component {
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
  render() {
    return (
      <div className="searchForm container">
        <div className="row">
          <div className="col-9">
            <form className="form-inline">
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="search"
                  placeholder="Username"
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Search
              </button>
            </form>
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
