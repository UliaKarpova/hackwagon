import React from 'react';
import "./StartPage.css";

function StartPage() {
  return (
    <div className="start-page">
      <div className="page-container">
        <h1 className="page-title">Лесная   инвентаризация</h1>
        <button className="page-but" type="button">
          Начать
        </button>
      </div>
    </div>
  );
}

export default StartPage