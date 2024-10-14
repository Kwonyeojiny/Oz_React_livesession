function Child({name,age,isMarried}){
    return (
        <div style={{border : '1px solid blue', padding:'10px', margin:'10px'}}>
            <div>이름 : {name}</div>
            <div>나이 : {age}</div>
            {isMarried ? <div>결혼 유무 : 기혼</div> : <div>결혼 유무 : 미혼</div>} 
        </div>
    );
};
export default Child;