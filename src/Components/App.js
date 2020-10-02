import React, { Component } from "react";

import "./../css/App.css";
import AddUser from "./AddUser";
import DataTable from "./DataTable";
import Header from "./Header";
import Search from "./Search";

class App extends Component {
  showComponent = () => {
    console.log("wo");
  };
  render() {
    return (
      <div>
        <Header />
        <Search connectComponent={() => this.showComponent()} />
        <div className="container">
          <div className="row">
            <DataTable />
            <AddUser />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
