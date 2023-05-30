import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <h1>로그인</h1>
            <form>
                <input type="text" placeholder="아이디"></input><br/><br/>
                <input type="password" placeholder="비밀번호"></input><br/><br/>
            </form>
            
            <button><Link to={"/login"} style={{ textDecorationLine: 'none', color: 'black'}}>로그인</Link></button>
            <button><Link to={"/signup"} style={{ textDecorationLine: 'none', color: 'black'}}>회원가입</Link></button>
        </div>
    );
}

export default Login;