
import { Header } from 'antd/es/layout/layout';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { header, logo, menu, menuItem, link } from './style.ts';
import Link from 'antd/es/typography/Link';

function _Header() {
  return (
    <>
      <Header style={header}>
        <div>
          <a style={logo} href={'#'}>
            <h2> Daga Chat App </h2>
          </a>
        </div>
        <Menu theme="dark" mode="horizontal" style={menu} defaultSelectedKeys={['']}>
          <Menu.Item key="1" icon={<HomeOutlined />} style={menuItem}>
            <Link style={link}>Home</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
}

export default _Header;