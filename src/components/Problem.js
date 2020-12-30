import Nav from './Nav';
const problems = [
    {header:'비밀번호를 알아내자',hint:'정답은 언제나 문제 속에 있습니다',contents:'ASCWEBHACK의 주최자 정진우는 평소 개인정보보호에 관심이 많은 편입니다. 이번 대회의 첫번째 입장 비밀번호를 정하기 위해 많은 고민을 한 결과, 대회 입장 비밀번호를 어떠한 ‘비밀번호’로 설정하였습니다. 개인정보보호에 관심이 많은 진우는 과연 어떤 비밀번호를 고안하였을까요?'},
    {header:'/*Password*/',hint:'F12를 눌러보세요',contents:'기억력이 나쁜 블랑카는 언제나 주석으로 비밀번호를 적어두는 습관이 있습니다...'},
    {header:'',contents:''},
    {header:'',contents:''},
]

function Problems({number,setPage}){


    return (
        <>
        <div className="header baseline flex column">
        <p>
          Problem {number}. {problems[number].header}
        </p>
        </div>
        <div className="contents flex flex-center">
        <p className='sm-font'>
            {problems[number].contents}
        </p>
        </div>
        <div className="hint">
            <p>Hint?</p>
            <span>{problems[number].hint}</span>
        </div>
        
        <Nav number={number} setPage={setPage}/>
        </>
    )

}

export default Problems;