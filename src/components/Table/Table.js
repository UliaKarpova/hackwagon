import React from 'react';
import { NavLink } from 'react-router-dom';

import './Table.css';

import EditableTable from "../EditableTable/index";

function Table({ data, saveEdit, deleteProduct }) {
    const columns = [
        { field: 'id', fieldName: 'Номер записи' },
        { field: 'name', fieldName: 'Наименование детали' },
        { field: 'number', fieldName: 'Номер детали' },
        { field: 'year', fieldName: 'Год выпуска' },
        { field: 'factory', fieldName: 'Завод' },
        { field: 'comment', fieldName: 'Комментарий' },
    ];
    
    return (
		<div className="table__container">
			<div className="table__page">
				<h1 className="table__title">Просмотр и редактирование</h1>
				<NavLink to="/workpage">
					<button className="table__btn">Назад</button>
				</NavLink>
			</div>
			<EditableTable deleteProduct={deleteProduct} 
			saveEdit={saveEdit} 
			columns={columns} 
			rows={data} 
			actions />
				
        </div>

      );
}

export default Table;