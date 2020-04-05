import React , {useState ,useEffect} from 'react';
import './App.css';

import InitHeader from "./Componets/InitHeader"
import InitList from "./Componets/InitList"

const data=[

]

function App() 
{
  const [list,setList] = useState(data);
  
  function addCreature()
  {
    setList(prev=>{
      let copy = [...list]
      let _id = (copy.length + 1).toString();
      copy.push({id:_id,text:"Player one"})
      return copy
    })
  }  
  
  return (
    <div className="App">
      <InitHeader addCreature={addCreature} />
      <InitList list={list} setList={setList} />
    </div>
  );
}

export default App;
