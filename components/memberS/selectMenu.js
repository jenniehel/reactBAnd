import React from 'react'
import ImgIcon from "@/components/memberS/imgicon"
import MemberList from "@/components/memberS/memberList" 
import styled from 'styled-components'; 

// npm install --save styled-components
// 
export default function SelectMenu() {
 
 
  return (
    <>
      <div className="row">
          <div className="col-md-12 " style={{position:"relative",top:"-2em"}}>
             <ImgIcon/>
        </div>
      
        <div className="col-md-12" style={{position:"relative",top:"-2em"}}>   
         <MemberList/>   
        </div>
      </div>
   
    </>
  )
}
