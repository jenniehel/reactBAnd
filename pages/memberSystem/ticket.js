import React from 'react'
import Ticket from "@/components/memberS/ticket/ticket"
import SelectMenu from "@/components/memberS/person/selectMenu";
import TicketMobile from "@/components/memberS/ticket/mobile/ticket"
import classNames from 'classnames';
import styles from "@/styles/form.module.css"
export default function ticket() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-3">
            <SelectMenu />
          </div>
          <div className="col-12 col-xl-9">

            <Ticket  />
            <TicketMobile   />

          </div>
        </div>

      </div>
    </>
  )
}
