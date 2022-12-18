import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Table from '../Table/Table';
import StartPage from '../Pages/StartPage/StartPage';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import SnowFall from '../Snowfall/SnowFall';
import Header from '../Header/Header';
import WorkPage from '../Pages/WorkPage/WorkPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <SnowFall />
          <StartPage />
        </Route>
        <Route path="/signin">
          <Header>
            <NavLink to="/">
              <button className="header__btn">Выйти</button>
            </NavLink>
          </Header>
          <Login />
        </Route>
        <Route path="/signup">
          <Header>
            <NavLink to="/">
              <button className="header__btn">Выйти</button>
            </NavLink>
          </Header>
          <Register />
        </Route>
        <Route path="/workpage">
          <Header>
            <NavLink to="/">
              <button className="header__btn">Выйти</button>
            </NavLink>
          </Header>
          <WorkPage />
        </Route>
        <Route path='/table'>
          <Table />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
