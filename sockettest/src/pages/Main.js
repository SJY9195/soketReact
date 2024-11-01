import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const [userId, setUserId] = useState('');  //setUserId를 사용해 userId의 상태를 관리한다!!
    const navigate = useNavigate();

    const handlerSubmit = (event) => {
        event.preventDefault();
        if(userId.trim() !== ''){
            navigate(`/chatWindow/${encodeURIComponent(userId)}`);
        }else{
            alert("아이디를 입력하세요. ")
        }
    }

    return(
        <>
            <h1>웹소켓 채팅</h1>
            <form onSubmit={handlerSubmit}>
                <label>사용할 아이디 입력 : </label><br/>
                <input
                type="text"
                id="userId"
                name="userId"
                value={userId}
                onChange={e=>setUserId(e.target.value)}
                />
                <button type="submit">채팅방 입장</button>
            </form>
        </>
    )
}

export default Main;