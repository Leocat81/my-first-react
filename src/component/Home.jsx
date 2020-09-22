import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Route,Switch } from "react-router-dom";
import UserGroup from "./usergroup/UserGroup.jsx";
import  './Home.css';
const { Header, Content, Footer } = Layout;
class Home extends Component {
  state = {
    current: "1",
  };
  handleClick = (e) => {
    if(e.key==="2"){
        this.props.history.push("/usergroup");
    }
    console.log(e)
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
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">用户组管理</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            test
            //TODO:待完成嵌套路由
            <Switch>
              <Route path="/usergroup" component={UserGroup}></Route>
            </Switch>
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
