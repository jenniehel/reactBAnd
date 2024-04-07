 
import Image from "next/image";
 import SelectMenu from "@/components/selectMenu";
 import PersonForm from "@/components/personForm";


export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SelectMenu/>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-8">
          <PersonForm/>

          </div>
        </div>
      </div>
    </>
  );
}
