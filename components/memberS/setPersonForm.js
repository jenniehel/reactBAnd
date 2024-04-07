import React from 'react'
import Setimgicon from "@/components/memberS/setimgicon"
import MemberList from "@/components/memberS/memberList"
import styled from 'styled-components';

// npm install --save styled-components
// 
export default function SelectMenu() {


  return (
    <>
      <div className="row">
        <div className="col-md-12 " style={{ position: "relative", top: "-2em" }}>
          <Setimgicon />
        </div>
        <div className="col-md-12" style={{ position: "relative", top: "-2em" }}>
        </div>
      </div>

    </>
  )
}
