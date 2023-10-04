import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import Menu from 'antd/es/menu'
import {FC} from 'react';
import styles from './layout.module.css'
import {Outlet} from 'react-router-dom'
const navLink = ['Home', 'Add task']


const LayoutApp:FC = () => {
  return (
    <Layout style={{height:'100vh'}}>
      <Sider breakpoint='lg'collapsedWidth={0} width={300}>
        <div className={styles.logo}>Todo List</div>
        <Menu 
          theme='dark'
          mode='inline'
          items={
            navLink.map(
              (nav, index)=> ({
                key:String(nav+index),
                label:nav,
                
              }))
          }
        />
      </Sider>
      <Layout>
          <Content style={{padding:'24px'}}>
            {<Outlet/>}
          </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;