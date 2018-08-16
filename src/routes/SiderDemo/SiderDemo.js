import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import style from './SiderDemo.less'
import Desktop from '../Desktop/Desktop'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed, type) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible={true}
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className={style.logo} />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="desktop" />
                            <span>资源管理器</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="setting" />
                            <span>格式转换工厂</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '0 16px',background:'white' }}>
                        <Desktop/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        window系统在线资源管理器
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo