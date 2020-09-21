import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
// import { Button } from "antd";
// import { Upload, message } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
import Index from "./component/test.jsx";
import Login from "./component/login/login";
import "./App.css";

const App = (data) => {
  return (
    <Router>
      <div>
        <Route path="/login" exact component={Index}></Route>
        <Route path="/" component={Login}></Route>
      </div>
    </Router>
  );
};

export default App;
