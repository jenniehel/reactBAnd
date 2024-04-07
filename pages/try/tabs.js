import React, { useState } from 'react' 
const tabsData=[{value:"最熱",type:"hot"},
{value:"最新",type:"new"},
{value:"最舊",type:"old"},
{value:"推薦",type:"recommand"},                
]

export default function index() {
    const [state, setstate] = useState("hot")
  return (
    <>
    <ul className="nav nav-pills nav-fill">
    {tabsData.map((v,i)=>{
        return (
          <li className={`nav-item`} onClick={()=>{setstate(v.type)}}> 
          <a className={`nav-link ${v.type==state && "active"}`}  href="#">{v.value}</a>
        </li>
        )

    })}
  
  </ul>
    </>
  )
}
