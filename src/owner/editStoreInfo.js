import React, { useState } from 'react';
import './editStoreInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function EditStoreInfo() {
    return (
        <div style={{ width: '100vw'}}> 
            <div className='backBar'>
                <a href='www.naver.com'><FontAwesomeIcon icon={faArrowLeft} /></a>
            </div>
            <br /><br />
            <h1>식당 정보 수정</h1>
            
            <table>
                <tr>
                    <th>
                        <h3>점포명</h3>
                    </th>
                    <td>
                        <input type="text" placeholder="점포명" disabled></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>대표자명</h3>
                    </th>
                    <td>
                        <input type="text" placeholder="대표자명" disabled></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>주소</h3>
                    </th>
                    <td>
                        <input type="text" placeholder='주소' disabled></input>
                        {/*
                        &nbsp;
                        <button type="button" onClick={openPostCode}>주소 검색</button>
                        */}
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>식당 <br/>전화번호</h3>
                    </th>
                    <td>
                        <input type="tel" placeholder="식당 전화번호" disabled></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>사업자 <br/>등록 번호</h3>
                    </th>
                    <td>
                        <input type="text" placeholder='사업자 등록 번호' disabled></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>식당 <br/>여는 시간</h3>
                    </th>
                    <td>
                        <input type="time" ></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>식당 <br/>마감 시간</h3>
                    </th>
                    <td>
                        <input type="time" ></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>휴무일</h3>
                    </th>
                    <td>
                        <input type="checkbox" name="day" value="mon" />월&nbsp;
                        <input type="checkbox" name="day" value="tue" />화&nbsp;
                        <input type="checkbox" name="day" value="wed" />수&nbsp;
                        <input type="checkbox" name="day" value="thu" />목&nbsp;
                        <input type="checkbox" name="day" value="fri" />금&nbsp;
                        <input type="checkbox" name="day" value="sat" />토&nbsp;
                        <input type="checkbox" name="day" value="sun" />일&nbsp;
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>총 테이블</h3>
                    </th>
                    <td>
                        <input type="number" placeholder="총 테이블 수"></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>테이블 당 최대 인원</h3>
                    </th>
                    <td>
                        <input type="number" placeholder="한 테이블의 최대 인원"></input>
                    </td>
                </tr>
            </table>
            <h3>시그니처 메뉴</h3>
            <div className='signatureMenu'>
                <h3>1. &nbsp;<input type="text" placeholder="메뉴명"></input></h3>
                    <input type="file" className='fileInput'></input><br /><br />
                <h3>2. &nbsp;<input type="text" placeholder="메뉴명"></input></h3>
                    <input type="file" className='fileInput'></input><br /><br />
                <h3>3. &nbsp;<input type="text" placeholder="메뉴명"></input></h3>
                    <input type="file" className='fileInput'></input>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <input type="submit" value={"저장"}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br /><footer>ⓒ TableBook.</footer>
            <br/><br/>
        </div>
    );
}

export default EditStoreInfo;
