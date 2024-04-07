import React from 'react'

export default function B(props) {
  const sonMsg="fdthie dfd"
  return (
    <div> 
   
    <div className="a" onClick={()=>props.onGetMsg(sonMsg)}> 
    {props.data} send
    {props.name}
    </div>
    </div>
  )
}
