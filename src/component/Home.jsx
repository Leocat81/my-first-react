import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Route,Link } from "react-router-dom";
import UserGroup from "./usergroup/UserGroup.jsx";
import  './Home.css';
const { Header, Content, Footer } = Layout;
class Home extends Component {
  state = {
    current: "1",
  };
  handleClick = (e) => {
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[current]}
            onClick={this.handleClick}
          >
            <Menu.Item key="1">
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/home/usergroup">用户组管理</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/home/user">用户管理</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {/* 嵌套路由url必须是接在前一个url后面，例如此处必须写/home/usergroup，不能写为/other/UserGroup */}
            <Route path="/home/usergroup" component={UserGroup} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Home;
