import React from 'react';
import {
  Layout, Menu, Icon, Modal, Button, Row, Col, Card, Input, Dropdown, message, Tabs
} from 'antd';
import AceEditor from 'react-ace';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import MenuIcon from './svgs/menu.svg';
import './App.css';

const { Header, Sider, Content, Footer } = Layout;
const { TabPane } = Tabs;

const topSider = [
  {
    link: '/attribution',
    type: 'file',
    id: 0,
  },
  {
    link: '/event',
    type: 'compass',
    id: 1,
  },
];

function onChange(newValue) {
  console.log('change',newValue);
}

function App() {
  return (
    <Layout>
      <Sider className='sider' trigger={null}>
        <div className='triggerMenu'>
          <img src={MenuIcon} alt="" />
        </div>
        <Menu
          className="sider-menu top-menu"
          mode="inline"
          defaultSelectedKeys={window.location.pathname === '/event' ? ['1'] : ['0']}
        >
          {topSider.map(({ link, type, id }) => (
            <Menu.Item key={id}>
              <Icon type={type} />
              {/* <Link to={link}>
                <Icon type={type} />
              </Link> */}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        {/* <Header className='ad-targeting-header'>
          <Row>
            <Col span={6}>
              <div className={styles.huluIconWrapper}>
                <img src={HuluOnboardingSVG} alt="hulu" style={{ width: '70px' }} />
              </div>
              <b className={styles.adTargeting}>AD TARGETING</b>
            </Col>
            <Col span={12}>
              <div>
                <Input
                  className="search-all"
                  placeholder="Search here..."
                  style={{ width: 200 }}
                  onChange={(e) => debouncedOnSearch(e.target.value)}
                />
              </div>
            </Col>
            <Col span={6}>
              <Dropdown overlay={userMenu}>
                <Button
                  htmlType="button"
                >
                  {"Wen Luo"}
                  <img src={DropdownMenu} alt="" />
                </Button>
              </Dropdown>
            </Col>
          </Row>
        </Header> */}
        <Content>
          <Tabs size="large">
            <TabPane tab="M1 SEGMENT" key="0">
              <AceEditor
                mode="java"
                theme="github"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
              />
            </TabPane>
            <TabPane tab="M1 SEGMENT" key="1">
              <h1>hellow</h1>
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
