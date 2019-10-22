import React from 'react';
import {Switch, Route, Redirect,} from 'react-router-dom';
import {view as Login} from '../pages/login';
import Home from '../pages/home';
import BasicLayout from '../layouts/BasicLayout';



const Router = () => {
  return (
    <Switch>
      <Route path="/user" render={() =>
        <Route path="/user/login"  component={Login}/>
      }/>
      <Route path="/"  render={() =>
        <BasicLayout>
          <Route path="/dashboard/home" component={Home}/>
        </BasicLayout>
      }/>
      Router Page
    </Switch>
  )
};


export default Router;
