import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Main(){
    return(
        <div>
            Welcome!
            <br/>
            <button>
                <Link to={"/login"} style={{ textDecorationLine: 'none', color: 'black' }}>로그인</Link>
            </button>
        </div>
    )
}

export default Main;