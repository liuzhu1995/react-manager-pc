import React from 'react';
import './style.less';
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-menu">
      Sidebar Left
      <div>
        <Link to="/dashboard/home">home</Link>
      </div>
      <div>
        <Link to="/user/login">login</Link>
      </div>
    </div>
  )
};

export default Sidebar;
