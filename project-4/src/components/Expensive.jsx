import { useMemo, useState } from "react"

const Expensive = () => {
  const [count,setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log('비용이 많이 드는 계산 중...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++){
      result += i;
    }
    return result;
  },[])

  return (
    <>
      <h1>값 : {expensiveCalculation}</h1>
      <button onClick={()=> setCount(count+1)} >카운트 : {count}</button>
    </>
  )
}

export default Expensive;