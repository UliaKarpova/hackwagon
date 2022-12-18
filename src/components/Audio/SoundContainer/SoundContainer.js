import React from 'react';
// import { NavLink } from 'react-router-dom';
import "./SoundContainer.css";
import Sound from "../Sound/Sound"

function SoundContainer() {
  return (
    <div className="sound-container">
      <h2 className="sound-cont__title">Добавленные файлы</h2>
      {/* <p className="sound-cont__text">Нет добавленных файлов</p> */}
      <ul>
        <Sound />
      </ul>
      <button 
        className="sound-clean__btn"
        type="reset">
          Очистить
      </button>
    </div>
  );
}

export default SoundContainer