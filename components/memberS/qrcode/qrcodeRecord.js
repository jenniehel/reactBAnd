import React from 'react'
import styles from "@/styles/form.module.css"
import Image from 'next/image'
import classNames from 'classnames'
import { FaHome } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

export default function creditComponts() {
    
  return (
    <>

    <div  className={classNames("d-flex  justify-content-between align-items-center",styles["mb-0"],styles["border-1"])}> 
            <div 
            style={{fontSize:"30px"}}
            className={classNames("btn  px-3 py-3",styles["mx-full"],styles["border-0"],styles["btn-parmary"],styles["btn-parmary-transparent"],styles["qrcodeProduct"])} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
         
          <FaHome className={styles["text-color"]}/> 
           士林夜市&nbsp;&nbsp;豪大雞排  
           
          
            <button className={classNames(styles["btn-parmary-white"],styles['border-1'],styles["rd-2"],"ms-5 px-3 ms-1")}   style={{fontSize:"14px"}}>已選擇</button>   
             </div>
          <IoIosArrowDown style={{fontSize:"30px"}} className='me-3'/>
     </div>
          <div className={ classNames("collapse")} id="collapseExample1">
               {Array(3).fill(1).map((v,i)=>{
      
            return(
                <div className="creditItem" > 
                
            <div className={classNames("itemgroup item1",styles["mb-0"])}> 
          {/* flexBetween */} 
            <div className={ classNames(styles['border-1-grey'],"mx-0 px-3 py-3",styles.flexBetween)}>
                  <div className={ classNames("",styles.flexBetween)}>
                  <Image src="/ch.jpeg" alt="Description" width={60} height={60} /> 
                          <div className="time px-2" style={{textAlign:'center'}}>
                           <h6 className={classNames(styles['btn-parmary-transparent'])}>海苔雞排</h6>    <small>2024/03/01</small> 
                         
                          </div>  
                </div> 
                <div className={ classNames("countGroup",styles.flexBetween)}>
                <div>
                           <span className={classNames(styles["btn-parmary-transparent"])}>購買數量&nbsp;|&nbsp;5 <br /></span> 
                           <span className={classNames(styles["btn-parmary-red"])}>剩餘數量&nbsp;|&nbsp;5<br /></span>  
              </div>
              <div>
              <button type="submit" className={classNames("btn  mx-2",styles["btn-parmary"])}>選擇商品 <CgAddR className={classNames(styles["btn-parmary"])} style={{fontSize:"22px"}}/></button>
              </div>
                </div>
                
             
              </div>
          </div>
          </div>
        
 
            )
            })
          } 

    </div>

     
   
     
    </>
  )
}
