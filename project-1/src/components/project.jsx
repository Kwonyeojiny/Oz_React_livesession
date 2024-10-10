// import { useState } from "react";
// import {myImage} from "../imgs/happy.jpeg"

const Project = () => {
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [user,setUser] = useState([])

    return (
        <div>
            <img 
                src="src/imgs/happy.jpeg" 
                alt="piglet"
                width={300}
            />
            <h1>사용자 정보 입력</h1>
            <p>이름</p>
            <input placeholder="이름을 입력하세요"/>
            <p>나이</p>
            <input placeholder="나이를 입력하세요"/>
            <button>사용자 추가</button>
        </div>
    )
}

export default Project;