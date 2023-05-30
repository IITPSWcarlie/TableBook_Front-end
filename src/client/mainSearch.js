import React from 'react';
import KakaoMap from './kakaoMap';
import './mainSearch.css';
function MainSearch() {
    return (
        <div>
            <KakaoMap />
            <div className="searchBar" >
                <input type="text" placeholder="식당 검색"></input>
                &nbsp;&nbsp;&nbsp;
                <input type="submit" value="검색"></input>
            </div>
            <br /><br />
            {/*}
            <div className="navBar" >
                <a href='www.naver.com'><h2>회원정보</h2></a>
                <a href='www.naver.com'><h2>중식</h2></a>
                <a href='www.naver.com'><h2>일식</h2></a>
                <a href='www.naver.com'><h2>양식</h2></a>
            </div>
            */}
        </div>
    );
}

export default MainSearch;