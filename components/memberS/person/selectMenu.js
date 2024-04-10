import React from 'react'
import ImgIcon from "@/components/memberS/imgicon/imgicon"
import MemberList from "@/components/memberS/memberList"
import styled from 'styled-components';

// npm install --save styled-components
// 
export default function SelectMenu() { 
  return (
    <>
      <div className="row SelectMenuPostion">
        <div className="col-md-12 selectMenuPostion">
          <ImgIcon />
        </div>

        <div className="col-md-12 selectMenuPostion">
          <MemberList />
        </div>
      </div>

    </>
  )
}
