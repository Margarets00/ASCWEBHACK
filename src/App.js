
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
    <div className="App flex flex-center">
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
