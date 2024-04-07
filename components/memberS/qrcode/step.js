import React from 'react'
import styles from "@/styles/form.module.css"
import StepcCard from './step_card'
import classNames from 'classnames'
export default function step() {
  return (
    <div className={classNames(styles['border-1'],"py-2",styles["rd-2"])}>
      <div   style={{width: "100%",border:"0px",background:"transparent"}} className={classNames("card mx-2",styles.step)}>
            <div className={classNames("card-body",styles.stepPostion,styles.step)}> 
             <h2   className={classNames(styles["iconWidth"],styles.step, styles["progressParmary"], styles["active"])}>1</h2>  
             <h2 className={classNames(" col-auto",styles.iconGrow,styles["progressParmary"])}></h2>
             <h2   className={classNames(styles["iconWidth"],styles.step, styles["progressParmary"], styles["active"])}>2</h2>  
             <h2 className={classNames(" col-auto",styles.iconGrow,styles["progressParmary"])}></h2>
             <h2   className={classNames(styles["iconWidth"],styles.step, styles["progressParmary"], styles["active"])}>3</h2>  
            </div>
        </div>
        <div   style={{width: "100%",border:"0px",display:'flex',justifyContent:"space-between"}} >
        <div style={{display:"flex",border:"0px"}} className='d-flex justify-content-center'> 
          <StepcCard title="選擇商品" value="可選擇多樣商品，但只能來自同一家商店喔!"/>
        </div>
        <div style={{display:"flex",border:"0px"}} className='d-flex justify-content-center'> 
          <StepcCard title="確認商品" value="可選擇多樣商品，但只能來自同一家商店喔!" />
        </div>
        <div style={{display:"flex",border:"0px"}} className='d-flex justify-content-center'> 
          <StepcCard title="兌換QRcode" value="可選擇多樣商品，但只能來自同一家商店喔!" />
        </div> 
        </div>
    </div>
  )
}
