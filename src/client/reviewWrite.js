import React, { useState } from 'react';
import './reviewWrite.css';

function ReviewWrite() {
    return (
        <div style={{ width: '100vw', marginTop:'10px'}}> 
            <h1>식당 이름</h1>
            <hr/>
            <h3>리뷰</h3>
            <textarea class="reviewTxt" type="text" placeholder="리뷰를 입력하세요." />
            <br /><br />
            <input type="button" value={"리뷰 등록"}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value={"취소"}/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default ReviewWrite;