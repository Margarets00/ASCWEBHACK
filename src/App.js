
import './App.css';
import Main from './components/Main';
import React,{useState} from 'react';
import Problems from './components/Problem';

function App() {
  const [page,setPage]=useState(0);

  function changePage(e){
    setPage(page+e);
  }
  
  return (
    <div className="App flex column flex-center">
      <div className="select flex row">
        <ul className="flex row">
          <li><a onClick={()=>setPage(0)}>home</a></li>
          <li><a onClick={()=>setPage(1)}>#0</a></li>
          <li><a onClick={()=>setPage(2)}>#1</a></li>
          <li><a onClick={()=>setPage(3)}>#2</a></li>
          <li><a onClick={()=>setPage(4)}>#3</a></li>
        </ul>
      </div>
      <header className="App-header flex column">
      {page===0?
        <Main setPage={changePage}/>
        :
        <Problems number={page-1}  setPage={changePage}/>
      }
      </header>
    </div>
  );
}

export default App;
