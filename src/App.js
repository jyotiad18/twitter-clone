import React from "react";
import Sidebar from "./Sidebar";
//import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      <Sidebar />
      <Widgets />
      {/*<Feed />
       
      */}
    </div>
  );
}

export default App;
