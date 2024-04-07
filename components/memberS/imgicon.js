import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";  
import styles  from "@/styles/form.module.css" 
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div  className={classNames("md-5",styles.imgIconContent)} 
            style={{height:"125px"
            ,position:"relative"
            , height: "125px",
            textAlign:"center", 
              bottom: "-2em", 
              margin: "auto", 
              zIndex: "5"}}>
          <label htmlFor="formFile" className="form-label"></label>  
              <Image
                    src="/face/face.png"   
                  alt='Mountains'  
                  width={125}
                      height={125}
                  className={classNames("imgIcon",styles.ImageIcon)}
                  objectFit='contain'
                  style={{borderRadius:"50%"}}
                />  
              
          
    </div>
    <div    className={classNames("card mb-2 pt-5 " ,styles["border-1"])}  >
        <div   className={classNames("card-body text-center" ,styles["text-color"])}  > 
                    你今天想吃夜市嗎
        </div>
   </div>
 
       
    </>
  );
}
