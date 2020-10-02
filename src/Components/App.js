import React, { Component } from "react";
import DataUser from "./Data.json";
import "./../css/App.css";
import AddUser from "./AddUser";
import DataTable from "./DataTable";
import Header from "./Header";
import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      data: DataUser,
    };
  }

  changeStatus = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Search
          connectComponent={() => this.changeStatus()}
          showForm={this.state.showForm}
        />
        <div className="container">
          <div className="row">
            <DataTable dataUserProps={this.state.data} />
            <AddUser showForm={this.state.showForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
