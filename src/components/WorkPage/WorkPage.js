import React from "react";
import { NavLink } from 'react-router-dom';
import "./WorkPage.css";

function WorkPage() {
  return (
    <div className="work__page">
      <NavLink to="#" >
        <button type='button' className='w-page__button'>Загрузить данные</button>
      </NavLink>
      <NavLink to="#" >
        <button type='button' className='w-page__button'>Предварительный просмотр</button>
      </NavLink>
      <NavLink to="#" >
        <button type='button' className='w-page__button'>Скачать отчет</button>
      </NavLink>
    </div>
  );
}
export default WorkPage;