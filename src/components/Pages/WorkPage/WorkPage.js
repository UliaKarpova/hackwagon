import React from "react";
import { NavLink } from 'react-router-dom';

import "./WorkPage.css";

import SoundContainer from "../../Audio/SoundContainer/SoundContainer";
import { ExportReactCSV } from "../../ExportReactCSV/ExportReactCSV";

function WorkPage({ data }) {

	const dataArr = () => {
		let content = [];

		for (let i = 0; i < data.length; i++) {
			content += data[i].id + ";" + data[i].name+ ";" + data[i].number+ ";" + data[i].year + ";" + 
			data[i].factory+ ";" + data[i].comment + "\n" 
		}
		return content;
	}

	return (
		<div className="work__page">
			<h1 className="w-page__title">Привет! Пора за работу!</h1>
			<NavLink to="#" >
				<button type='button' 
				className='w-page__button'>Загрузить данные</button>
			</NavLink>
			<SoundContainer />
			<NavLink to="/table" >
				<button type='button' 
				className='w-page__button'>Предварительный просмотр</button>
			</NavLink>
			<ExportReactCSV csvData={dataArr()} 
			fileName='Report'/>
		</div>
	);
}

export default WorkPage;