import React from 'react';
import { NavLink } from 'react-router-dom';
import './Table.css';
import EditableTable from "../EditableTable/index";

function Table() {
    const columns = [
        { field: 'id', fieldName: 'Номер записи' },
        { field: 'name', fieldName: 'Наименование детали' },
        { field: 'number', fieldName: 'Номер детали' },
        { field: 'year', fieldName: 'Год выпуска' },
        { field: 'factory', fieldName: 'Завод' },
        { field: 'comment', fieldName: 'Комментарий' },
      ];
    
      const data = [
        { id: 1, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 2, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 3, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 4, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 5, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 6, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 7, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 8, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 9, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 10, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 11, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 12, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 13, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 14, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 15, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 16, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 17, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 18, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 19, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 20, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 21, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 22, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 23, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 24, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 25, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 26, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 27, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 28, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 29, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
        { id: 30, name: 'колёсная пара', number: '123456', year: '1994', factory: '05', comment: 'брак'},
      ];
    
      return (
        <>
          <div className="table__page">
            <h1 className="table__title">Просмотр и редактирование</h1>
            <NavLink to="/">
              <button className="table__btn">Назад</button>
            </NavLink>
          </div>
          <EditableTable columns={columns} rows={data} actions />
            
        </>

      );
}

export default Table;