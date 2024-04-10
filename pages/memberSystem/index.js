
import { useState } from "react"; 
import Image from "next/image";
import SelectMenu from "@/components/memberS/person/selectMenu";
import PersonForm from "@/components/memberS/person/personForm";
import SetPersonForm from "@/components/memberS/person/setPersonForm"; 
import styles from "@/styles/form.module.css"
import { FaSearch } from "react-icons/fa";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <SelectMenu />
          </div>
          <div className="col-12 col-md-9">
            <div className={classNames("container", styles["main-O-baground"])}>
              <div className={classNames("row", styles["main-O-baground-border50"])}>
                <div className="col-12 col-md-9">
                  <PersonForm />
                </div>
                <div className="col-12 col-md-3">
                <SetPersonForm /> 
                </div>
              </div> 

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
