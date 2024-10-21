import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import Count from './components/Count'
import Timer from './components/Timer'
import Expensive from './components/Expensive'

function App() {
  // const[count, setCount] = useState(0)
  // const [isOn, setIsOn] = useState(false)
  // const [isCountOn, setIsCountOn] = useState(false)
  

  // // 변화가 있을 때마다 실행
  // useEffect(()=>{
  //   console.log('useEffect가 실행되었습니다') 
  //  })

  // // 재렌더링이 되더라도 실행 안됨
  // useEffect(()=>{
  //  console.log('useEffect가 실행되었습니다') 
  // },[])

  // // count값이 변할때마다 실행
  // useEffect(()=>{
  //   console.log('useEffect가 실행되었습니다') 
  //  },[count])

  // const handleCount = () => {
  //   setCount(count + 1)
  // }

  // const obj = useMemo(()=>{
  //   return {name:isCountOn ? 'on' : 'off'}
  // }, [isCountOn])

  // useEffect(()=> {
  //   console.log('useEffect가 실행되었습니다')
  // },[obj])

  // const handleSwitch = () => {
  //   setIsOn(!isOn)
  // }

  useEffect(() => {
    console.log('날 깨우지 말고 10번 count 하도록 --^');
  })

  // useEffect [count]
  const [count, setCount] = useState(0)

  useEffect(() => {
    if(count >= 10){
      console.log('count가 10번!')
    }
  },[count])

  // useRef
  const countRef = useRef(0)

  const incrementCount = () => {
    countRef.current += 1
  }
  useEffect(()=>{})

  



  return (
    <>
      {/* <Count/>
      <br/><br/>
      <button onClick={handleCount}>{count}</button>
      <button onClick={()=> setIsCountOn(!isCountOn)}>{obj.name}</button>
      <br/><br/>
      {isOn && <Timer/>}
      <button onClick={handleSwitch} >스위치</button>
      <br/><br/>
      <Expensive/> */}
    </>
  )
}

export default App
