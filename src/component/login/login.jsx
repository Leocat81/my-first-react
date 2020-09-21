import React from "react";
import "./login.css";
import request from "../../common/request.js";
import db from "../../common/db.js";
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  async submit(event) {
    let { username, password } = this.state;
    console.log(username, password);
    let res1 = await request
      .post("/login", {
        username: username,
      })
      .catch((err) => {
        console.log(err);
      });
    debugger;
    if (res1.data.token) {
      db.save("token", res1.data.token);
    }
  }
  render() {
    return (
      <div className="body">
        <div className="login-container">
          <div className="left-container">
            <div className="title">
              <span>登录</span>
            </div>
            <div className="input-container">
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
              />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            <div className="message-container">
              <span>忘记密码</span>
            </div>
          </div>
          <div className="right-container">
            <div className="register-container">
              <span className="register">注册</span>
            </div>
            <div className="action-container">
              <span
                onClick={() => {
                  this.submit();
                }}
              >
                提交
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
