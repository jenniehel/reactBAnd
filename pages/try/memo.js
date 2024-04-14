import React, { useState ,useMemo} from 'react'
// useState


 
export default function a() {
    const [count,setCount]=useState(0);
    const [bool,setBool]=useState(true)
   const result= useMemo(()=>{
    // 監聽組件是否變化 如果沒有這邊不渲染
    console.log(1)
        return count*2
    },count)
  return (
    <div>
    <span>{count}</span>
    <span>{result}</span>
    <span>{bool?"true0":"false0"}</span>
    <button onClick={()=>setCount(count+1)}>+1</button>
    <button onClick={()=>setBool(!bool)}>+1</button>
      
    </div>
  )
}

