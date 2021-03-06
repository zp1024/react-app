/**
 * @file Sider-Header-Content-Footer 式页面级整体布局
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Layout } from 'antd';
import React from 'react';
import Content from './content/Content';
import Footer from './footer/Footer';
import { SHCFHeader } from './header';
import Sider from './sider/Sider';
import './SHCFLayout.less';

class SHCFLayout extends React.PureComponent {
  render() {
    return (
      <Layout className="ant-layout-has-sider">
        <Sider />
        <Layout>
          <SHCFHeader />
          <Content type="SHCF">
            {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
export default SHCFLayout;
