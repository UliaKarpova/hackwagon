import React from 'react';
import { CSVLink } from 'react-csv'
import Button from 'react-bootstrap/Button';

export const ExportReactCSV = ({csvData, fileName}) => {
    return (
        <Button variant="warning" className='download'>
            <CSVLink data={csvData} className='download__link' filename={fileName}>Скачать файл</CSVLink>
        </Button>
    )
}