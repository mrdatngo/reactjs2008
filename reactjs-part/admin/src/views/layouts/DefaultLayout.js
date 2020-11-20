import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

import routers from "../../routers";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        {routers.map((menu) =>
                            !menu.children ? (
                                <Menu.Item key="1" icon={<PieChartOutlined />}>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </Menu.Item>
                            ) : (
                                <SubMenu
                                    key={menu.path}
                                    icon={<UserOutlined />}
                                    title={menu.name}
                                >
                                    {menu.children.map((subMenu) => (
                                        <Menu.Item key={subMenu.path}>
                                            <Link to={subMenu.path}>
                                                {subMenu.name}
                                            </Link>
                                        </Menu.Item>
                                    ))}
                                </SubMenu>
                            )
                        )}
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    />
                    <Content style={{ margin: "0 16px" }}>
                        {/* <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            <Switch>
                                {routers.map((menu) => {
                                    return !menu.children ? (
                                        <Route path={menu.path}>
                                            {menu.component}
                                        </Route>
                                    ) : (
                                        menu.children.map((subMenu) => (
                                            <Route path={subMenu.path}>
                                                {subMenu.component}
                                            </Route>
                                        ))
                                    );
                                })}
                                {/* <Route path="/option1">Option1 content</Route>
                                <Route path="/user/tom">User Tom</Route> */}
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2020 Mr Dat
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default DefaultLayout;
