import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import StartPage from '../StartPage/StartPage';
import Login from '../Login/Login';
import SnowFall from '../Snowfall/SnowFall';
import Header from '../Header/Header';
import WorkPage from '../WorkPage/WorkPage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <SnowFall />
        <StartPage />
      </Route>
      <Route path="/signin">
        <Header />
        <Login />
      </Route>
      <Route path="/workpage">
        <Header>
          <NavLink to="/">
            <button className="header__btn">Назад</button>
          </NavLink>
        </Header>
        <WorkPage />
      </Route>
    </Switch>
  ); 
}

export default App;
