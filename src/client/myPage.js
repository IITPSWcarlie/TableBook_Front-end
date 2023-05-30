import './myPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function MyPage() {
    return (
        <div style={{ width: '100vw'}}>    
            <div className='backBar'>
                <a href='www.naver.com'><FontAwesomeIcon icon={faArrowLeft} /></a>
            </div>
            <div className="Header">
                <div className="userImg">
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70px" height="70px"></img>
                </div>
                <div className="userInfo">
                    <h2>아이디</h2>
                    <h3>abcd1234@naver.com</h3>
                </div>
                <div className="moreInfo">
                    <a href="www.naver.com">더보기</a>
                </div>
            </div>
            <hr />
            <div className="ongoingBooking">
                <h2>진행중인 예약</h2>
                <div className="bookingInfoBox">
                    <div className="bookingInfoItem">
                        <h3>가게 이름</h3>
                        <h4>예약 날짜 및 시간</h4>
                        <h4>인원: n명 / 테이블 n번 / 합석 OX</h4>
                        <h5>메모 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        <div className="bookingInfoBtn">
                            <button>수정</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>예약 취소</button>
                        </div>
                    </div>
                    <br />
                    <div className="bookingInfoItem">
                        <h3>가게 이름</h3>
                        <h4>예약 날짜 및 시간</h4>
                        <h4>인원: n명 / 테이블 n번 / 합석 OX</h4>
                        <h5>메모 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        <div className="bookingInfoBtn">
                            <button>수정</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>예약 취소</button>
                        </div>
                    </div>
                    <br />
                    <div className="bookingInfoItem">
                        <h3>가게 이름</h3>
                        <h4>예약 날짜 및 시간</h4>
                        <h4>인원: n명 / 테이블 n번 / 합석 OX</h4>
                        <h5>메모 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        <div className="bookingInfoBtn">
                            <button>수정</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>예약 취소</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="pastBooking">
                <h2>지난 예약</h2>
                <div className="pBookingListBox">
                    <div className="pBookingListItem">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70px" height="70px"></img>
                        <h4>가게 이름</h4>
                        <h5>예약 날짜 및 시간</h5>
                    </div>
                    <div className="pBookingListItem">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70px" height="70px"></img>
                        <h4>가게 이름</h4>
                        <h5>예약 날짜 및 시간</h5>
                    </div>
                    <div className="pBookingListItem">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70px" height="70px"></img>
                        <h4>가게 이름</h4>
                        <h5>예약 날짜 및 시간</h5>
                    </div>
                </div>
            </div>
            <hr />
            <div className="reviews">
                <h2>최근 작성한 리뷰</h2>
                <div className="reviewListBox">
                    <div className="reviewListItem">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70px" height="70px"></img>
                        <div className="reviewContent">
                            <h4>가게 이름</h4>
                            <h5>날짜</h5>
                            <h5>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        </div>
                    </div>
                    <div className="reviewListItem">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70px" height="70px"></img>
                        <div className="reviewContent">
                            <h4>가게 이름</h4>
                            <h5>날짜</h5>
                            <h5>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        </div>
                    </div>
                    <div className="reviewListItem">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70px" height="70px"></img>
                        <div className="reviewContent">
                            <h4>가게 이름</h4>
                            <h5>날짜</h5>
                            <h5>블라블라~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <h2>노쇼 건수 <span className='red'>n</span>회</h2>
            <hr />
            <div className="footer">
                <p>* 최근 예약된 식당은 최대 3개만 표시됩니다.</p>
                <p>* 최근 작성한 리뷰는 최대 5개만 표시됩니다.</p>
                <p>* 예약 후 노쇼 건은 건수만 보여드립니다. 문의가 있으시면, 고객센터로 연락해주시기 바랍니다.</p>
            </div>
            <br /><br />          
            <footer>ⓒ TableBook.</footer>
            <br/><br/>
        </div>
    )
}

export default MyPage;
