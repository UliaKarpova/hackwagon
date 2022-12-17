import React, { useState } from 'react';
import { Form, Table } from "react-bootstrap";
import { PencilFill, Save, Trash, XSquare } from 'react-bootstrap-icons';
import './EditableTable.css';


const EditableTable = ({ columns, rows, actions }) => {
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
          if (editedRow.nameOfProduct) row.nameOfProduct = editedRow.nameOfProduct;
          if (editedRow.number) row.number = editedRow.number;
          if (editedRow.year) row.year = editedRow.year;
          if (editedRow.factory) row.factory = editedRow.factory;
          if (editedRow.comments) row.comments = editedRow.comments;

        }

        return row;
      })

      setRowsState(newData);
      setEditedRow(undefined)
    }, 1000)
  }

  return (
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
                defaultValue={editedRow ? editedRow.nameOfProduct : row.nameOfProduct}
                id={row.id}
                name='nameOfProduct'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.nameOfProduct
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

                defaultValue={editedRow ? editedRow.comments : row.comments}
                id={row.id}
                name='comments'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.comments
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
  );
};

export default EditableTable;