import './storeDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function StoreDetail() {
    return (
        <div style={{ width: '100vw'}}> 
            <div className='backBar'>
                <a href='www.naver.com'><FontAwesomeIcon icon={faArrowLeft} /></a>
            </div>
            <h1>가게 이름</h1>
            <div className="imgSlides" style={{ height: '210px'}}>
                <div className="sampleImg">
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70%" ></img>
                </div>
            </div>
            <hr />
            <div className="detailInfo">
                    <h2>★ 4.8</h2>
                    <table>
                        <tr>
                            <th>
                                <h3>주소</h3>
                            </th>
                            <td>
                                <h4>서울시 강남구 테헤란로 427</h4>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <h3>전화번호</h3>
                            </th>
                            <td>
                                <h4>02-123-4567</h4>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <h3>영업 시간</h3>
                            </th>
                            <td>
                                <h4>00:00 ~ 00:00</h4>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <h3>휴무일</h3>
                            </th>
                            <td>
                                <h4>없음</h4>
                            </td>
                        </tr>
                        {/*
                        <tr>
                            <th>
                                <h3>메뉴</h3>
                            </th>
                            <td>
                                <h4>메뉴1, 메뉴2, 메뉴3, 메뉴4, 메뉴5, 메뉴6, 메뉴7, 메뉴8, 메뉴9, 메뉴10</h4>
                            </td>
                        </tr>
                        */}
                    </table>
                </div>
            <hr />
                <details>
                    <summary className='title'>메뉴</summary>
                    <div className="menuListBox">
                        <div className="menuListItem">
                            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70px" height="70px"></img>
                            <div className="menuContent">
                                <h4>메뉴 이름</h4>
                                <h5>설명</h5>
                            </div>
                        </div>
                        <div className="menuListItem">
                            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70px" height="70px"></img>
                            <div className="menuContent">
                                <h4>메뉴 이름</h4>
                                <h5>설명</h5>
                            </div>
                        </div>
                        <div className="menuListItem">
                            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70px" height="70px"></img>
                            <div className="menuContent">
                                <h4>메뉴 이름</h4>
                                <h5>설명</h5>
                            </div>
                        </div>
                    </div>
                </details>
            <hr />
            <details>
                <summary className='title'>리뷰</summary>
                <div className="reviewListSector">
                    <div className="reviewListSectorItem">
                        <h3>작성자</h3>
                        <h4>★ 4.8</h4>
                        <h5>리뷰 내용 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        <div className="reviewBtn">
                            <button>답글</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>신고</button>
                        </div>
                    </div>
                    <br />
                    <div className="reviewListSectorItem">
                        <h3>작성자</h3>
                        <h4>★ 4.8</h4>
                        <h5>리뷰 내용 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        <div className="reviewBtn">
                            <button>답글</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>신고</button>
                        </div>
                    </div>
                    <br />
                    <div className="reviewListSectorItem">
                        <h3>작성자</h3>
                        <h4>★ 4.8</h4>
                        <h5>리뷰 내용 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        <div className="reviewBtn">
                            <button>답글</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>신고</button>
                        </div>
                    </div>
                </div>
            </details>

            <a href='naver'>
                <div className="bookingBtn">
                    <h2>예약하기</h2>
                </div>
            </a>
            <br /><br />          
            <footer>ⓒ TableBook.</footer>
            <br/><br/>
        </div>
    )
}

export default StoreDetail;
