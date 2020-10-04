import React, { Component } from "react";
import DataUser from "./Data.json";
import "./../css/App.css";
import AddUser from "./AddUser";
import DataTable from "./DataTable";
import Header from "./Header";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      data: DataUser,
      searchText: "",
      editUserStatus: false,
      userEdit: {},
    };
  }

  // checkConnect = () => {
  //   alert("connect ok");
  // };
  changeStatus = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };
  changeEditStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };

  searchResult = (dt) => {
    this.setState({
      searchText: dt,
    });
  };

  getNewUserData = (name, password, phone, authority) => {
    let item = {};
    item.id = uuidv4();
    item.name = name;
    item.password = password;
    item.phone = phone;
    item.authority = authority;

    let users = this.state.data;

    users.push(item);
    console.log(users);
    this.setState({
      data: users,
    });
  };

  getEditUserData = (id, name, password, phone, authority) => {
    this.state.data.forEach((item, index) => {
      if (item.id === id) {
        item.id = id;
        item.name = name;
        item.password = password;
        item.phone = phone;
        item.authority = authority;
      }
    });
  };

  editUser = (user) => {
    this.setState({
      userEdit: user,
    });
  };

  deleteUser = (id) => {
    let data = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: data,
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
          editUserStatus1={this.state.editUserStatus}
          changeEditStatus1={() => {
            this.changeEditStatus();
          }}
          userEdit1={this.state.userEdit}
          getEditUserData1={(id, name, password, phone, authority) => {
            this.getEditUserData(id, name, password, phone, authority);
          }}
        />
        <div className="container">
          <div className="row">
            <DataTable
              dataUserProps={result}
              editUser1={(user) => {
                this.editUser(user);
              }}
              changeEditStatus1={() => {
                this.changeEditStatus();
              }}
              deleteUser1={(id) => this.deleteUser(id)}
            />
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
