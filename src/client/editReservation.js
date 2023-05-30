import './editReservation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function EditReservation() {
    return (
        <div style={{ width: '100vw'}}>   
            <div className='backBar'>
                <a href='#'><FontAwesomeIcon icon={faArrowLeft} /></a>
            </div>
            <h1 className='title'>식당 이름</h1>
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile" width="70%"></img>
            <table className="bookingInfo" style={{ textAlign: 'center' }}>
                <tr>
                    <th>
                        <p>예약 날짜</p>
                    </th>
                    <td>
                        <input type="date"></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>예약 시간</p>
                    </th>
                    <td>
                        <input type="time"></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>인원</p>
                    </th>
                    <td>
                        <input type="number" className='inputN' min="1" max="10"></input>명
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>테이블 번호</p>
                    </th>
                    <td>
                        <input type="number" className='inputN' min="1" max="10"></input>명
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>합석 여부</p>
                    </th>
                    <td>
                        <input type="radio" className='inputN' name="table" value="yes" checked></input>
                        <label>합석 O</label>
                        <br/>
                        <input type="radio" className='inputN' name="table" value="no"></input>
                        <label>합석 X</label>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>메모</p>
                    </th>
                    <td>
                        <textarea rows="5" cols="30" placeholder="메모를 입력하세요."></textarea>
                    </td>
                </tr>
            </table>
            <br />
            <a href='#'>
                <div className="savingButton">
                    <p>수정 사항 저장</p>
                </div>
            </a>
            <br /><br /><br />    
            <footer>ⓒ TableBook.</footer>
            <br/><br/>
        </div>
    )
}

export default EditReservation;
