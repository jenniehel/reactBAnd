import React, { useState,useEffect,useRef } from 'react'
//  保存資料 不會因為渲染而消失
export default function IIseRef() {
  // 所以我們要把id保存起來 不能變成null
  // let timeId=null;
  let timeId=useRef();

  
   const [count,setCount]=useState(0);
   useEffect(()=>{
    timeId.current= setInterval(() => {
      setCount(count=>count+1);
    }, 1000);
    // click清除null不是計時器
   
   },[])
   const stopCount=()=>{
    console.log(timeId)
    clearInterval(timeId.current);
   }
  return (
    <div>
     {count}
     <button onClick={stopCount}>stop</button>
    </div>
  )
}
