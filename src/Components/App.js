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
      searchText: "",
    };
  }

  checkConnect = () => {
    alert("connect ok");
  };
  changeStatus = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  searchResult = (dt) => {
    this.setState({
      searchText: dt,
    });
  };
  render() {
    let result = [];

    this.state.data.forEach((item, index) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    });
    return (
      <div>
        <Header />
        <Search
          connectComponent={() => this.changeStatus()}
          showForm={this.state.showForm}
          searchResult1={(dt) => this.searchResult(dt)}
          checkConnect={() => this.checkConnect()}
        />
        <div className="container">
          <div className="row">
            <DataTable dataUserProps={result} />
            <AddUser showForm={this.state.showForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
