/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { Link } from "react-router";
import { Layout, Menu, Dropdown, Icon } from "antd";
import Login from "../containers/login/index";
import "./index.less";

const { Header, Content, Sider } = Layout;
const {SubMenu} = Menu;
class App extends React.Component {
  componentWillMount() {
    if (!sessionStorage.getItem("access_token")) {
      window.location.hash = "login";
    } else {
      window.location.hash = "#";
    }
  }

  handleMenuClick = e => {
    if (e.key === "exit") {
      sessionStorage.removeItem("access_token");
      window.location.hash = "login";
    }
  };

  renderMainPage() {
    let selectMenu = window.location.hash.split("/")[1]
      ? window.location.hash.split("/")[1]
      : "homePage";

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="exit">exit</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Layout>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["homePage"]}
            style={{ lineHeight: "64px" }}
            selectedKeys={[selectMenu]}
          >
            <Menu.Item key="homePage">
              <Link to="/">HomePage</Link>
            </Menu.Item>
            <Menu.Item key="subPage">
              <Link to="/subPage">SubPage</Link>
            </Menu.Item>
            <Menu.Item key="Animation">
              <Link to="/animation">Animation</Link>
            </Menu.Item>

            <Menu.Item key="user" style={{ float: "right" }}>
              <Dropdown overlay={menu} onClick={this.handleMenuClick}>
                <a className="ant-dropdown-link">
                  Guest<Icon type="down" />
                </a>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Header>
          <Layout>
          <Sider width = {200} style = {{background: '#fff'}}>
          <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
          </Sider>
          <Content className="main-layout-content">{this.props.children}</Content>

          </Layout>
        </Layout> 
       

        
      </div>
    );
  }

  render() {
    const isAuthenticated = sessionStorage.getItem("access_token");
    return <div>{isAuthenticated ? this.renderMainPage() : <Login />}</div>;
  }
}

export default App;
