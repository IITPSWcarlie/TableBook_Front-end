import React, { useState } from 'react';
import './addStore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function AddStore() {
    return (
        <div style={{ width: '100vw'}}> 
            <div className='backBar'>
                <a href='www.naver.com'><FontAwesomeIcon icon={faArrowLeft} /></a>
            </div><br /><br />
            <h1>식당 등록</h1>
            <table>
                <tr>
                    <th>
                        <p>점포명</p>
                    </th>
                    <td>
                        <input type="text" placeholder="점포명"></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>대표자명</p>
                    </th>
                    <td>
                        <input type="text" placeholder="대표자명"></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>주소</p>
                    </th>
                    <td>
                        <input type="text" placeholder='주소'></input>
                        {/*
                        &nbsp;
                        <button type="button" onClick={openPostCode}>주소 검색</button>
                        */}
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>식당 <br/>전화번호</p>
                    </th>
                    <td>
                        <input type="tel" placeholder="식당 전화번호"></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>사업자 <br/>등록 번호</p>
                    </th>
                    <td>
                        <input type="text" placeholder='사업자 등록 번호'></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>식당 <br/>여는 시간</p>
                    </th>
                    <td>
                        <input type="time" ></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>식당 <br/>마감 시간</p>
                    </th>
                    <td>
                        <input type="time" ></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>휴무일</p>
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
                        <p>총 테이블</p>
                    </th>
                    <td>
                        <input type="number" placeholder="총 테이블 수"></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>테이블 당 최대 인원</p>
                    </th>
                    <td>
                        <input type="number" placeholder="한 테이블의 최대 인원"></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>식당 <br />내외부 사진</p>
                    </th>
                    <td>
                        <input type="file" className='fileInput' multiple></input>
                    </td>
                </tr>
            </table>            
            <br /><br />
            <input type="submit" value={"식당 등록"}/>
            <br/>
            <br/>
            <br />
            <br />
            <br/>
            <br/><br /><footer>ⓒ TableBook.</footer>
            <br/><br/>
        </div>
    );
}

export default AddStore;
