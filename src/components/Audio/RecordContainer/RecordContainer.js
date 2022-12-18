import React from 'react';
import './RecordContainer.css';

function RecordContainer() {
  return (
    <div className="rec-cont">
      <h1 className="rec-cont__title">Нажми на кнопку-получишь результат!</h1>
      <button className="rec-cont__btn" type="submit">Начать запись</button>
    </div>
  );
}

export default RecordContainer