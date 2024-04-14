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
function useUpdateInput(initialValue){
  const [value,setValue]=useState(initialValue);
  return{value,onChange:event=>setValue(event.target.value)}
}
export default function app() {
const [post,setPost]=usePost();
const usernameInput=useUpdateInput("");
const passwordInput=useUpdateInput("");
const submitInputForm=event=>{
  event.preventDefault();
  console.log(usernameInput.value)
  console.log(passwordInput.value)
}
  return (
    <form>
    <input type="text" name='username' {...usernameInput} />
    <input type="text" name='password'  {...passwordInput}  />
    <input type="submit"  />
    </form>
  )
}