import React, {useState} from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    HeartOutlined,
    CalendarOutlined,
    WomanOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Link, Outlet} from "react-router-dom";


const App =() => {

    const { Header, Content, Footer, Sider } = Layout;

    return (
        <div>
            <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"> <Link to="/"> Home </Link> </Menu.Item>
                        <Menu.Item key="3"> <Link to="/Ballmassagen">Ballmassagen</Link> </Menu.Item>
                        <Menu.Item key="4"> <Link to="/Hahnmassagen">Hahnmassagen</Link> </Menu.Item>
                    </Menu>
                </Header>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content>
                        <Outlet />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}></Footer>
                </Layout>

            </Layout>


        </div>
    );
}

export default App
