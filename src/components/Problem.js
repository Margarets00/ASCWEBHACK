import Nav from './Nav';
import React,{useState,useEffect} from 'react';
const problems = [
    {header:'비밀번호를 알아내자',contents:'ASCWEBHACK의 주최자 정진우는 평소 개인정보보호에 관심이 많은 편입니다. 이번 대회의 첫번째 입장 비밀번호를 정하기 위해 많은 고민을 한 결과, 대회 입장 비밀번호를 어떠한 ‘비밀번호’로 설정하였습니다. 개인정보보호에 관심이 많은 진우는 과연 어떤 비밀번호를 고안하였을까요?'},
    {header:'',contents:''},
    {header:'',contents:''},
    {header:'',contents:''},
]

function Problems({number,setPage}){
    const [value,setValue]=useState('');

    useEffect(() => {
        setValue('');
    }, [number])

    return (
        <>
        <div className="header baseline flex column">
        <p>
          Problem{number}. {problems[number].header}
        </p>
        </div>
        <div className="contents flex flex-center">
        <p className='sm-font'>
            {problems[number].contents}
        </p>
        </div>
        <div className="input-form">
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="put answer here"/>
        </div>
        <Nav numbers={number} value={value} setPage={setPage}/>
        </>
    )

}

export default Problems;