import React from 'react'
import B from "./b"
export default function a(props) {
const getMsg=(msg)=>console.log(msg)
 
  return (
    <div>
    <B data="Hello from Parent" onGetMsg ={getMsg} />
    <div onClick={()=>{ props.onMsgB("i am a where y")}}>
    click to bVVV
    </div>
      
    </div>
  )
}
