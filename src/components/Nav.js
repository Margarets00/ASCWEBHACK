
function Nav({number,value,setPage}) {
    function nextPage(e) {
        setPage(e);
    }
    function checkAnswer(value) {
        if(value==='\'어떠한\' 비밀번호'){
            setPage(1);
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
          <a
            className="App-link"
            onClick={()=>checkAnswer(value)}
            rel="noopener noreferrer"
          >
            Next
          </a>
        </div>
    )
}

export default Nav;