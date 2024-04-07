 
import Image from "next/image"; 
//  import PersonForm from "@/components/personForm";
import styles from"@/styles/form.module.css";
import CreditComponts from "@/components/memberS/creditForm";
import { FaSearch } from "react-icons/fa";
import classNames from "classnames";


export default function Home() {
 return (
   <>
   <div className={classNames(styles['border-1'],styles["rd-2"],"mt-4 px-4 pt-4 pb-3")}> 
     <form className="d-flex">
         <div className="d-flex justify-content-center" style={{position:"relative",width: "100%"}}>
            <FaSearch style={{position:"absolute",left:"15px" ,top:"10px"}}/>
            <label htmlFor="inputPassword2"  className="visually-hidden">Password</label>
              <input type="text" style={{height:"40px",width:"100%",textIndent:"30px",borderRadius:"20px",padding:  " 0 100px 0  20px"}} className="form-control" id="inputPassword2" placeholder="搜尋關鍵字"/>
              <div className="" style={{position:"relative"}}>
           <button type="submit" style={{
            minWidth:"85px", 
           borderRadius: "33px",
           minWidth: "85px",
           position: "absolute",
           right: "0px"
           }}
           className={classNames("btn  mb-3",styles["btn-parmary"])} 
            >搜尋</button>
         </div>
          </div>
         
         
     </form>

     
   </div>
   </>
 );
}
