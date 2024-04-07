import React from 'react'
import styles from "@/styles/form.module.css"
import classNames from 'classnames'
export default function step_card({title,value}) {
  return ( 
        <div className="card pa-0 mx-2" style={{width:"80%",border:"0px"}}>
            <div className="card-body">
                <h6 className={classNames("card-title",styles["text-parmary"])}>{title}</h6> 
                <p className="card-text" >{value}</p> 
            </div>
        </div>  
  )
}
