import EditableTable from "../EditableTable/index";
import { ExportReactCSV } from '../ExportReactCSV/ExportReactCSV';

function Table() {
    const columns = [
        { field: 'id', fieldName: 'Номер записи' },
        { field: 'nameOfProduct', fieldName: 'Наименование детали' },
        { field: 'number', fieldName: 'Номер детали' },
        { field: 'year', fieldName: 'Год выпуска' },
        { field: 'factory', fieldName: 'Завод' },
        { field: 'comments', fieldName: 'Комментарий' },
      ];
    
      const data = [
        { id: 1, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 2, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 3, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 4, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 5, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 6, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 7, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 8, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 9, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 10, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 11, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 12, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 13, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 14, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 15, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 16, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 17, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 18, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 19, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 20, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 21, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 22, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 23, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 24, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 25, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 26, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 27, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 28, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 29, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
        { id: 30, nameOfProduct: 'колёсная пара', number: '123456', year: '1994', factory: '05', comments: 'брак'},
      ];

      const dataArr = () => {
          let content = [];
          for (let i = 0; i < data.length; i++) {
            content += data[i].id + ";" + data[i].nameOfProduct+ ";" + data[i].number+ ";" + data[i].year + ";" + data[i].factory+ ";" + data[i].comments + "\n" 
        }
        return content;
    }
    
      return (
          <>
            <div className="start-page">
                <h1 className="page-title">Лесная   инвентаризация</h1>
            </div>
            <EditableTable columns={columns} rows={data} actions />
            <div className='tible__buttons'>
                <button type='submit' className='table__save'>Сохранить изменения</button>
                <div className="col-md-4 center">
                    <ExportReactCSV csvData={dataArr()} fileName='Report'/>
                </div>           
            </div>
        </>

      );
}

export default Table;