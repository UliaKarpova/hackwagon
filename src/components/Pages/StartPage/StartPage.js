import React from 'react';
import { NavLink } from 'react-router-dom';
import "./StartPage.css";

function StartPage() {
  return (
    <div className="start-page">
      <div className="page__container">
        <h1 className="page__title">Лесная  инвентаризация</h1>
        <NavLink to="/signup" className="page__link">
          <button className="page__btn" type="button">
            Начать
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default StartPage