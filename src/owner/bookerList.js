import './bookerList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BookerList() {
    return (
        <div>
            <div className='backBar'>
                <a href='www.naver.com'><FontAwesomeIcon icon={faArrowLeft} /></a>
            </div>
            <br />
            <h1>식당 이름</h1>
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="90%"></img>
            <br />
            <br />
            <input type={"date"} className="datePicker" />
            <br />
            <br />
            <div className="upcomingBooking">
                <div className="bookingInfoBox">
                    <div className="bookingInfoItem">
                        <h4>예약 날짜 및 시간</h4>
                        <h4>예약자 님</h4>
                        <h4>인원: n명 / 테이블 n번 / 합석 OX</h4>
                        <h5>메모 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        <div className="bookingInfoBtn">
                            <button>확정</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>취소</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>노쇼</button>
                        </div>
                    </div>
                    <br />
                    <div className="bookingInfoItem">
                        <h4>예약 날짜 및 시간</h4>
                        <h4>예약자 님</h4>
                        <h4>인원: n명 / 테이블 n번 / 합석 OX</h4>
                        <h5>메모 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        <div className="bookingInfoBtn">
                            <button>확정</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>취소</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>노쇼</button>
                        </div>
                    </div>
                    <br />
                    <div className="bookingInfoItem">
                        <h4>예약 날짜 및 시간</h4>
                        <h4>예약자 님</h4>
                        <h4>인원: n명 / 테이블 n번 / 합석 OX</h4>
                        <h5>메모 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
                        <div className="bookingInfoBtn">
                            <button>확정</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>취소</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>노쇼</button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />          
            <footer>ⓒ TableBook.</footer>
            <br/><br/>
        </div>
    )
}

export default BookerList;
