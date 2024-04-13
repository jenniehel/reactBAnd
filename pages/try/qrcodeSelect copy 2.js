 
 
import SelectMenu from "@/components/memberS/person/selectMenu";
import QrcodeRecord from "@/components/memberS/qrcode/exchange/qrcodeRecord" 
import Stempmobile from "@/components/memberS/qrcode/step/stepMobile"
import StepComputer from "@/components/memberS/qrcode/step/stepComputer"
import Search from "@/components/memberS/qrcode/searchbar"
import styles from "@/styles/form.module.css"
import Pagination from "@/components/memberS/others/pagination"

import classNames from 'classnames'

export default function QrcodeselectMobile1() {
 return (
   <> 
   <div className="container">
       <div className="row">
           <div className="col-12 col-md-4 r">
             <SelectMenu/> 
           </div> 
      
           <div className="col-12 col-md-8">
              <h4>Qrcode兌換111</h4> 
                  <Stempmobile/>
                  <StepComputer/>
                <Search/> 

                <h4 className='creditTitle credit' style={{border:0}}>我的商品</h4>    
                <div className={classNames(styles['border-1'],"px-4 py-3 mt-4",styles["rd-2"])}>
 
                <QrcodeRecord/> 

               
          </div>
               <Pagination/>
               <div className="d-flex justify-content-center align-items-center">
        
               <button type="submit" className={classNames("btn  px-5 mx-2",styles["btn-parmary"],styles["rd-30"])}>上一步 </button>
               <button type="submit" className={classNames("btn  px-5 mx-2",styles["btn-parmary"],styles["rd-30"])}>下一步 </button> 
               </div>
 
           </div> 
           </div> 
           </div>
 
   </>
 );
}

 
