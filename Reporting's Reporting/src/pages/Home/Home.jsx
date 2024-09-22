import React from 'react'
import { Layout } from 'antd';
import Nav from '../../components/layout/navbar/Nav'
import Sidebar from '../../components/layout/sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/Store';

const { Content } = Layout;

function Home() {
  return (
    <div>
    <Layout>
      <Nav />
      <Layout>
        <Sidebar />
        <Content className="bg-[#EAF5FF] p-[20px]">
          <Provider store={store}>
            <Outlet/>
          </Provider>
        </Content>
      </Layout>
    </Layout>
    </div>
  )
}

export default Home;
