import React, { useState } from 'react';
import './storeInfo.css';

function StoreInfo() {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
    return (
        <div>
            <h1>식당 정보</h1>
            <table>
                <tr>
                    <th>
                        <h3>점포명</h3>
                    </th>
                    <td>점포명</td>
                </tr>
                <tr>
                    <th>
                        <h3>주소</h3>
                    </th>
                    <td>주소</td>
                </tr>
                <tr>
                    <th>
                        <h3>대표자명</h3>
                    </th>
                    <td>대표자명</td>
                </tr>
                <tr>
                    <th>
                        <h3>식당 전화번호</h3>
                    </th>
                    <td>식당 전화번호</td>
                </tr>
                <tr>
                    <th>
                        <h3>식당 영업 시간대</h3>
                    </th>
                    <td>식당 영업 시간대</td>
                </tr>
                <tr>
                    <th>
                        <h3>휴무일</h3>
                    </th>
                    <td>휴무일</td>
                </tr>
                <tr>
                    <th>
                        <h3>시그니처 메뉴</h3>
                    </th>
                    <td>시그니처 메뉴</td>
                </tr>
                <tr>
                    <th>
                        <h3>총 테이블 수</h3>
                    </th>
                    <td>총 테이블 수</td>
                </tr>
                <tr>
                    <th>
                        <h3>최대 예약/수용 가능 인원</h3>
                    </th>
                    <td>최대 n명</td>
                </tr>
            </table>
            <br /><br />
            <input type="button" value={"정보 수정"}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value={"삭제"}/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default StoreInfo;