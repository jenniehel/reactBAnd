import React, { useState } from 'react'
import B from './b'
import A from "./a"
export default function c() {
    const [name,setName]=useState("")
    const getMsgB=(msg)=>{
        console.log(msg)
    setName(msg);
    }
        // return (<button >{msg}</button>)}
  return (
    <>
    // a click to b 資料
      <A  onMsgB={getMsgB} />
      <B name={name} />
    </>
  )
}
