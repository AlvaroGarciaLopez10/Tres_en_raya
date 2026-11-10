import Square from './Square';

export default function Board(props){

   return <div> 
        {
          values.map((rowValues, index)=>{
            let row = rowValues.map((value, columnIndex)=>{
              return <square key={index + "-" + columnIndex} value={value}/>
            })
            return <div key={"row" + index}>{row}</div>

          })
        }
        </div>
}