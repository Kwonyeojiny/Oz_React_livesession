import { useRef, useState } from "react";

const Count = () => {
  const[count, setCount] = useState(0)
  let varCount = 0
  const refCount = useRef(0)

  const handleStateCount = () => {
    setCount(count + 1)
  }

  const handleVarCount = () => {
    varCount++
  }

  const handleRefCount = () => {
    refCount.current += 1
  }

  return(
    <>
      <button onClick={handleStateCount} >state : {count}</button>
      <button onClick={handleVarCount} >var : {varCount}</button>
      <button onClick={handleRefCount}>ref : {refCount.current}</button>
    </>
  )
}

export default Count;