 
import Image from "next/image";
import { Inter } from "next/font/google";    
const inter = Inter({ subsets: ["latin"] });
import birthday from "@/data/birthday";
import formCss from "@/styles/form.module.css" 
import { useEffect, useState } from "react";
const dayjs = require('dayjs')

export default function Home({title,cx="12",mx="12",bindErr,data}) {
  const {years,mont,date}=data;

  function MyComponent({ data }) {
      if(data=="years"){ 
       return birthday.years().map((v,i)=>{
       return new Date()
      })
    
    
  }else if(data=="month"){
 
    return   birthday.month().map((v,i)=>{
      return        <li><a class="dropdown-item" href="#" key={i}>{v}</a></li>
              })
            
  }else if(data=="date"){

    return  birthday.date({years,mont}).map((v,i)=>{
      return   <li><a class="dropdown-item" href="#" key={i}>{v}</a></li>
            })
          
        
    }
  
  }

  useEffect(()=>{
   
    console.log(birthday.month())

  })
  return (
    <>
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {title}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <div className={formCss.overflow1}>
        <div className={formCss.scroll}> 
           {MyComponent({data})}
        </div> 
        </div>
          
        </ul>
    </div>  
    </>
  );
}
