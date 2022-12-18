import React, { useState } from 'react';
import { Form, Table } from "react-bootstrap";
import { PencilFill, Save, Trash, XSquare } from 'react-bootstrap-icons';
import { ExportReactCSV } from '../ExportReactCSV/ExportReactCSV';
import { getProducts, getProductsCSV } from '../../utils/MainApi';

import './EditableTable.css';


const EditableTable = ({ columns, rows, actions, getProducts }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [rowsState, setRowsState] = useState(rows);
  const [editedRow, setEditedRow] = useState();

  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  }

  const handleRemoveRow = (rowID) => {
    const newData = rowsState.filter(row => {
      return row.id !== rowID ? row : null
    });

    setRowsState(newData);
  }

  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target;

    setEditedRow({
      id: rowID,
      [fieldName]: value
    })
  }

  const handleCancelEditing = () => {
    setIsEditMode(false);
    setEditedRow(undefined);
  }

  const handleSaveRowChanges = () => {
    setTimeout(() => {
      setIsEditMode(false);

      const newData = rowsState.map(row => {
        if (row.id === editedRow.id) {
          if (editedRow.name) row.name = editedRow.name;
          if (editedRow.number) row.number = editedRow.number;
          if (editedRow.year) row.year = editedRow.year;
          if (editedRow.factory) row.factory = editedRow.factory;
          if (editedRow.comment) row.comment = editedRow.comment;

        }
        return row;
      })

      setRowsState(newData);
      setEditedRow(undefined)
    }, 1000)
  }




  const dataArr = () => {
    let content = [];
    for (let i = 0; i < rowsState.length; i++) {
      content += rowsState[i].id + ";" + rowsState[i].name+ ";" + rowsState[i].number+ ";" + rowsState[i].year + ";" + 
      rowsState[i].factory+ ";" + rowsState[i].comment + "\n" 
  }
  return content;
}

  return (
    <>
    <Table striped bordered hover>
      <thead>
      <tr>
        {columns.map((column) => {
          return <th key={column.field}>{ column.fieldName }</th>
        })}
      </tr>
      </thead>
      <tbody>
      {rowsState.map((row) => {
        return <tr key={row.id}>
          <td>
            {row.id}
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Form.Control
                className='form'
                type='text'
                defaultValue={editedRow ? editedRow.name : row.name}
                id={row.id}
                name='name'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.name
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Form.Control
              className='form'
                type='text'
                defaultValue={editedRow ? editedRow.number : row.number}
                id={row.id}
                name='number'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.number
            }
          </td>
          <td>
          { isEditMode && rowIDToEdit === row.id
              ? <Form.Control
              className='form'

                type='text'
                defaultValue={editedRow ? editedRow.year : row.year}
                id={row.id}
                name='year'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.year
            }
          </td>
          <td>
          { isEditMode && rowIDToEdit === row.id
              ? <Form.Control
                type='text'
                className='form'

                defaultValue={editedRow ? editedRow.factory : row.factory}
                id={row.id}
                name='factory'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.factory
            }
          </td>
          <td>
          { isEditMode && rowIDToEdit === row.id
              ? <Form.Control
                type='text'
                className='form'

                defaultValue={editedRow ? editedRow.comment : row.comment}
                id={row.id}
                name='comment'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.comment
            }
          </td>
          {actions &&
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={ () => handleSaveRowChanges() } className='custom-table__action-btn' disabled={!editedRow}>
                <Save />
              </button>
              : <button  onClick={ () => handleEdit(row.id) } className='custom-table__action-btn'>
                <PencilFill />
              </button>
            }

            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={() => handleCancelEditing()} className='custom-table__action-btn'>
                <XSquare />
              </button>
              : <button onClick={() => handleRemoveRow(row.id)} className='custom-table__action-btn'>
                <Trash />
              </button>
            }
          </td>
          }
        </tr>
      })}
      </tbody>
    </Table>
    <div className='tible__buttons'>
    <button type='submit' className='table__save'>Сохранить изменения</button>


    <div className="col-md-4 center">
        <ExportReactCSV csvData={dataArr()} fileName='Report'/>
    </div>  
</div>
</>
  );
};


export default EditableTable;