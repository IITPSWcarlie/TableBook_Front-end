//import { useState, useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../App.css';

function Signup(props) {
    const [type, setType] = useState("customer");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");
    const [img, setImg] = useState("");

    const setTypeHandler = (event) => {
        setType(event.currentTarget.value);
    }
    const setIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const setPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const setPassword2Handler = (event) => {
        setPassword2(event.currentTarget.value);
    }
    const setNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    const setPhoneHandler = (event) => {
        setPhone(event.currentTarget.value);
    }
    const setEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const setBirthHandler = (event) => {
        setBirth(event.currentTarget.value);
    }
    const setImgHandler = (event) => {
        setImg(event.currentTarget.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(password !== password2){
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }
    }
    
//alignItems: 'center', 
    return ( 
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80vw', height: 'auto', margin: '2vh' }}>          
            <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                <label>구분</label>
                <div style={{ display: 'inline', textAlign: 'left'}}>
                    <input type="radio" name="type" value="customer" onClick={setTypeHandler} checked />
                    <label>고객</label>
                    <br/>
                    <input type="radio" name="type" value="owner" onClick={setTypeHandler} />
                    <label>사장님</label>
                </div>

                <label>아이디</label>
                <input type="text" value={id} placeholder="아이디" onChange={setIdHandler}></input>

                <label>비밀번호</label>
                <input type="password" value={password} placeholder="비밀번호" onChange={setPasswordHandler}></input>

                <label>비밀번호 확인</label>
                <input type="password" value={password2} placeholder="비밀번호 확인" onChange={setPassword2Handler}></input>
                
                <label>이름</label>
                <input type="text" value={name} placeholder="이름" onChange={setNameHandler}></input>
                
                <label>전화번호</label>
                <input type="text" value={phone} placeholder="전화번호" onChange={setPhoneHandler}></input>
                
                <label>이메일</label>
                <input type="text" value={email} placeholder="이메일" onChange={setEmailHandler}></input>
                
                <label>생년월일</label>
                <input type="date" value={birth} placeholder="생년월일" onChange={setBirthHandler}></input>

                <label className={type}>사업자등록증</label>
                <input type="file" className={type} value={img} placeholder="사업자등록증" onChange={setImgHandler}></input>

                <button formAction=''>회원가입</button>
            </form>
            <div>
                <Link to={"/login"} style={{ width: '100%', textDecorationLine: 'none', color: 'rgb(200,200,200)' }}>로그인 페이지로 돌아가기</Link>
            </div>
        </div>
    )
}

export default Signup;
