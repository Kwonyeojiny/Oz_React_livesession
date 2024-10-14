import { useState } from "react";
import Child from "./child"

const Parent = () => {    
    // const [name, setName] = useState('권여진');
    // const [age, setAge] = useState(25)
    // const [isMarried, setIsMarried] = useState(false)

    const [form, setForm] = useState(
        {
            name:'',
            age:0,
            isMarried:false
        }
    )
    const [list, setList] = useState([]);

    const handleAdd = () => {
        setList([
            ...list,
            {
                name:form.name,
                age:form.age,
                isMarried:form.isMarried
            }
        ]);
    }


    return(
        <div style={{border:'1px solid green', padding:'10px'}}>
            <p>이름</p>
            <input
                type="text"
                value={form.name}
                onChange={(e)=>(setForm({...form, name: e.target.value}))}
            />
            <p>나이</p>
            <input
                type="number"
                value={form.age}
                onChange={(e)=>(setForm({...form, age:e.target.value}))}
            />
            <p>결혼 유무</p>
            <input
                type="checkbox"
                checked={form.isMarried}
                onChange={(e)=>(setForm({...form, isMarried: e.target.checked}))}  // !isMarried도 가능
            />
            <button onClick={handleAdd}>추가</button>
            {
                list.map((item,index)=>(
                    <Child key={index} name={item.name} age={item.age} isMarried={item.isMarried}/>
                ))
            }
        </div>
    )
}

export default Parent;