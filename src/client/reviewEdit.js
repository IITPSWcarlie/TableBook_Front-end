import React, { useState } from 'react';
import './reviewEdit.css';

function ReviewEdit() {
    return (
        <div>
            <h1>식당 이름</h1>
            <hr/>
            <h3>리뷰</h3>
            <textarea class="reviewTxt" type="text" placeholder="리뷰를 입력하세요." defaultValue={"abc"}/>
            <br /><br />
            <input type="button" value={"수정"}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value={"삭제"}/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default ReviewEdit;