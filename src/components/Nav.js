
import React,{useState,useEffect} from 'react';

function Nav({number,setPage}) {
    const answers = [
      {solve:'어떠한',code:'Password'},
      {solve:'1q2w3e4r',code:'Comments'},
      {solve:'새해복많이받으세요',code:'HappYear'},
      {solve:'baNaNa',code:'WellDone'},
    ]
    const [value,setValue]=useState('');
    const [correct,setCorrect]=useState(false);
    useEffect(() => {
        setValue('');
        setCorrect(false);
    }, [number])

    function nextPage(e) {
        setPage(e);
        setValue('');
        setCorrect(false);
    }
    function checkAnswer(value) {
        if(value===answers[number].solve){
            setCorrect(true);
        }

    }
    return (
        <div className="Nav flex row">
          <a
            className="App-link"
            onClick={()=>nextPage(-1)}
            rel="noopener noreferrer"
          >
            Back
          </a>
          <div className="flex row input-form">
            {!correct?
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="put answer here"/>
              :
              <p className="App-link">Correct! FLAG : {answers[number].code}</p>
            }
        </div>
        {!correct?
          <a
            className="App-link"
            onClick={()=>checkAnswer(value)}
            rel="noopener noreferrer"
          >
            Okay
          </a>
          :
          (number !==answers.length-1) &&
          <a
            className="App-link"
            onClick={()=>nextPage(1)}
            rel="noopener noreferrer"
          >
            Next
          </a>
          
        }
        </div>
    )
}

export default Nav;