import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="searchForm container">
        <div className="row">
          <div className="col-12">
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
        </div>
      </div>
    );
  }
}

export default Search;
