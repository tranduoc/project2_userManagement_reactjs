import React from "react";

import "./../css/App.css";
import AddUser from "./AddUser";
import DataTable from "./DataTable";
import Header from "./Header";
import Search from "./Search";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <div className="container">
        <div className="row">
          <DataTable />
          <AddUser />
        </div>
      </div>
    </div>
  );
}

export default App;
