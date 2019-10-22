import React, {Component} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
// import Footer from '../components/Footer';



import { Row, Col, Layout, Menu, Icon  } from 'antd';
import './style_basic.less';

class BasicLayout extends Component {
  render() {
    return (
      <div className="basic-layout">
        <div className="layout-left">
          <Sidebar/>
        </div>
        <div className="layout-right">
          <div className="layout-header">
            <Header/>
          </div>
          <div className="layout-content">{this.props.children}</div>
        </div>
      </div>
    )
  }
}
export default BasicLayout;
