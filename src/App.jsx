import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
// import { Button } from "antd";
// import { Upload, message } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
import Home from "./component/Home.jsx";
import Login from "./component/login/login";
import "./App.css";

const App = (data) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
    </Router>
  );
};

export default App;
