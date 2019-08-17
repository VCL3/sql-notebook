import React from 'react';
import {
  Layout, Menu, Icon, Modal, Button, Row, Col, Card, Input, Dropdown, message, Tabs
} from 'antd';
import logo from './logo.svg';
import MenuIcon from './svgs/menu.svg';
import './App.css';
import styles from './App.less';
import './App.less';


const { Header, Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Sider className='sider' trigger={null}>
        <div className={styles.triggerMenu}>
          <img src={MenuIcon} alt="" />
        </div>
        <Menu
          className="sider-menu top-menu"
          mode="inline"
          defaultSelectedKeys={window.location.pathname === '/event' ? ['1'] : ['0']}
        >
          {/* {topSider.map(({ link, type, id }) => (
            <Menu.Item key={id}>
              <Link to={link}>
                <Icon type={type} />
              <   /Link>
            </Menu.Item>
          ))} */}
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <h1>Hello</h1>
        </Header>
        <Content>
          <h2>world</h2>
        </Content>
      </Layout>
    </Layout>
  );

}

export default App;
