import { useState, useEffect } from "react";

import EditableTable from "../EditableTable/index";
import { getProducts } from '../../utils/MainApi';


function Table() {
  const [data, setData] = useState([]);


    const columns = [
        { field: 'id', fieldName: 'Номер записи' },
        { field: 'name', fieldName: 'Наименование детали' },
        { field: 'number', fieldName: 'Номер детали' },
        { field: 'year', fieldName: 'Год выпуска' },
        { field: 'factory', fieldName: 'Завод' },
        { field: 'comment', fieldName: 'Комментарий' },
      ];
    
      useEffect(() => {
        getAllProducts();
      }, [])
      function getAllProducts () {
        getProducts()
        .then((res) => {
          console.log(res);
          setData(res);
        }).catch((err) => console.log(err))
      }
      /*const data = [
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
      ];*/
    
      return (
          <div className="table__container">
            <div className="start-page">
                <h1 className="page-title">Лесная   инвентаризация</h1>
            </div>
            <EditableTable columns={columns} rows={data} actions />
            
        </div>

      );
}

export default Table;