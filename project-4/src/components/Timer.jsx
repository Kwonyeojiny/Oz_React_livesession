import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0)

  useEffect(()=>{
    const time =  setInterval(() => {
      setTimer(timer => timer+1)
      console.log('실행중')
    }, 1000);
    return ()=> {
      clearInterval(time)
    }
  },[])

  return(
    <>
      Timer : {timer}
    </>
  )
}

export default Timer;