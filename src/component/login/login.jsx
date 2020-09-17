import React from "react";
import "./login.css";
class login extends React.Component {
  state = {};
  render() {
    return (
      <div className="body">
        <div className="login-container">
          <div className="left-container">
            <div className="title">
              <span>登录</span>
            </div>
            <div className="input-container">
              <input type="text" name="username" />
              <input type="password" name="password" />
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
              <span>提交</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
