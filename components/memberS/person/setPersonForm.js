import React, { useEffect,useState } from 'react'
import Setimgicon from "@/components/memberS/imgicon/setimgicon"
import MemberList from "@/components/memberS/memberList"
import styled from 'styled-components'; 
import mainApi from "@/api/api";
import Setimg from '../setimgicon copy';

// npm install --save styled-components
// 
export default function SelectMenu() {
  const [img, seTimg] = useState("/face/ch.jpeg");
  const [data, setData] = useState('');
  // const [user, setUser] = useState({})
  useEffect(() => {
  //   (async () => { 
  //     try {
  //         const response = await fetch(`${mainApi.API_URL}/selectCustom`); 
  //         const data = await response.json();
  //         if(data){ 
  //           const image=`http://127.0.0.1:3006/images/${data.data[0].custom_img}`
  //           seTimg(image)
  //         } 
  //     } catch (error) {
  //         console.error('网络请求操作出现问题:', error);
  //         // 处理非 JSON 响应
  //         console.error('非 JSON 响应:', error.response);
  //         // 将错误继续传播
  //         throw error;
  //     } 
  // } )()
   },[])

  // 定义一个函数，用于接收子组件传递的数据
  // const handleDataFromChild = (data) => {
  //   // 在这里处理从子组件传递过来的数据
  //   console.log('Data from child:', data); 
  //   seTimg(data)
  // };

  return (
    <>
      <div className="row">
        <div className="col-md-12 " style={{ position: "relative", top: "-2em" }}>
          <Setimgicon  />
        </div>
        <div className="col-md-12" style={{ position: "relative", top: "-2em" }}>
        </div>
      </div>

    </>
  )
}
