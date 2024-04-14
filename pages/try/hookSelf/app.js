import React, { useEffect, useState } from 'react'
// useState useEffect
import axios from 'axios'
function usePost(){
  const [post,setPost]=useState({});
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts/1").then(resopnse=>{
          setPost(resopnse.data)
      })
  },[])
  return [post,setPost]
}
export default function app() {
const [post,setPost]=usePost();
  return (
    <div>
    <div>{post.title}</div>
    <div>{post.body}</div>
    </div>
  )
}