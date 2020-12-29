import React, { Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Select } from "antd";

import routers from "../../routers";

// import "../../styles/components/header.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;
class DefaultLayout extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
            location: window.location.pathname,
        };
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed, location } = this.state;
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
                        defaultSelectedKeys={[location]}
                        mode="inline"
                    >
                        {routers.map((menu) =>
                            !menu.children ? (
                                <Menu.Item key={menu.path} icon={menu.icon}>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </Menu.Item>
                            ) : (
                                <SubMenu
                                    key={menu.path}
                                    icon={menu.icon}
                                    title={menu.name}
                                >
                                    {menu.children.map(
                                        (subMenu) =>
                                            !subMenu.hidden && (
                                                <Menu.Item key={subMenu.path}>
                                                    <Link to={subMenu.path}>
                                                        {subMenu.name}
                                                    </Link>
                                                </Menu.Item>
                                            )
                                    )}
                                </SubMenu>
                            )
                        )}
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    >
                        <div id="flex-container">
                            <div className="p-l-sm">
                                <Select
                                    // onChange={onStatusChange}
                                    style={{ width: "100%" }}
                                    defaultValue="en"
                                >
                                    <Option value="en">English</Option>
                                    <Option value="vi">Viet Nam</Option>
                                </Select>
                            </div>
                            <div>MrDat</div>
                        </div>
                    </Header>
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
                                <Suspense fallback={"loading..."}>
                                    {routers.map((menu) => {
                                        return !menu.children ? (
                                            <Route
                                                key={menu.path}
                                                path={menu.path}
                                            >
                                                {menu.component}
                                            </Route>
                                        ) : (
                                            menu.children.map((subMenu) => (
                                                <Route
                                                    key={menu.path}
                                                    path={subMenu.path}
                                                >
                                                    {subMenu.component}
                                                </Route>
                                            ))
                                        );
                                    })}
                                    {/* <Route path="/option1">Option1 content</Route>
                                <Route path="/user/tom">User Tom</Route> */}
                                </Suspense>
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
