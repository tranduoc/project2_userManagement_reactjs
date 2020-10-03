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

  getNewUserData = (name, password, phone, authority) => {
    let item = {};
    item.id = "";
    item.name = name;
    item.password = password;
    item.phone = phone;
    item.authority = authority;

    let users = this.state.data;

    users.push(item);
    this.setState({
      data: users,
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
            <AddUser
              showForm={this.state.showForm}
              getNewUserData1={(name, password, phone, authority) =>
                this.getNewUserData(name, password, phone, authority)
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
