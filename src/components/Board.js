import Square from './Square';

export default function Board(props){

   return <div> 
        {
          values.map((rowValues, rowIndex)=>{
            let row = rowValues.map((value, columnIndex)=>{
              return <Square rowIndex={rowIndex} columnIndex={columnIndex} boardClick={props.appClick} key={rowIndex + "-" + columnIndex} value={value}/>
            })
            return <div key={"row" + rowIndex}>{row}</div>

          })
        }
        </div>
}