import './reservation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Reservation() {
    return (
        <div>
            <div className='backBar'>
                <a href='www.naver.com'><FontAwesomeIcon icon={faArrowLeft} /></a>
            </div>
            <h1>식당 이름</h1>
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="90%"></img>
            <table className="bookingInfo">
                <tr>
                    <th>
                        <h3>예약 날짜</h3>
                    </th>
                    <td>
                        <input type="date"></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>예약 시간</h3>
                    </th>
                    <td>
                        <input type="time"></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>인원</h3>
                    </th>
                    <td>
                        <input type="number" className='inputN' min="1" max="10"></input>명
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>테이블 번호</h3>
                    </th>
                    <td>
                        <input type="number" className='inputN' min="1" max="10"></input>명
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>합석 여부</h3>
                    </th>
                    <td>
                        <input type="radio" className='inputN' name="table" value="yes" checked></input>합석 O
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" className='inputN' name="table" value="no"></input>합석 X
                    </td>
                </tr>
                <tr>
                    <th>
                        <h3>메모</h3>
                    </th>
                    <td>
                        <textarea rows="5" cols="30" placeholder="메모를 입력하세요."></textarea>
                    </td>
                </tr>
            </table>
            <br />
            <a href='naver'>
                <div className="bookingButton">
                    <h1>예약하기</h1>
                </div>
            </a>
            <br /><br />          
            <footer>ⓒ TableBook.</footer>
            <br/><br/>
        </div>
    )
}

export default Reservation;
