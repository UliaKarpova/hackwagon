import React from "react";
import { NavLink } from 'react-router-dom';
import "./WorkPage.css";
import SoundContainer from "../../Audio/SoundContainer/SoundContainer";

function WorkPage() {
  return (
    <div className="work__page">
      <h1 className="w-page__title">Привет! Пора за работу!</h1>
      <NavLink to="#" >
        <button type='button' className='w-page__button'>Загрузить данные</button>
      </NavLink>
      <SoundContainer />
      <NavLink to="/table" >
        <button type='button' className='w-page__button'>Предварительный просмотр</button>
      </NavLink>
      <NavLink to="#" >
        <button type='button' className='w-page__button'>Скачать отчет</button>
      </NavLink>
    </div>
  );
}
export default WorkPage