import React, { useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import dataBirth from "@/data/birthday"
import classNames from 'classnames';
import styles from"@/styles/form.module.css"


export default function PersonForm() {
  const yearVal = useRef();
  const monthVal = useRef();
  const passwordErrVal = useRef();
  const repasswordErrVal = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [birthY, setBirthY] = useState([]);
  const [birthM, setBirthM] = useState([]);
  const [birthD, setBirthD] = useState([]);
  const onSubmit = (data) => console.log(data)
  useEffect(() => {
    setBirthY(dataBirth.years());
    setBirthM(dataBirth.month());
    // setBirthD(dataBirth.date());

  }, [])
  useEffect(() => {
    setBirthY(dataBirth.years());
    setBirthM(dataBirth.month());
    // setBirthD(dataBirth.date());

  }, [])
  const selectChange = () => {
    const dateD = dataBirth.date(yearVal.current.value, monthVal.current.value);
    setBirthD(dateD)
  }

  const idInputErr= {
    name: "idInputErr",
    setting: {
    
        required: { value: true, message: "此欄位必填" },
        minLength: { value: 5, message: "不得低過5個字" },
        maxLength: { value: 10, message: "不得超過10個字" },
      
    }
  }; 

  const repasswordErr=  {
    name: "repasswordErr",
    setting: {
      required: { value: true, message: "此欄位必填" },
      minLength: { value: 5, message: " 5-20個字" },
      maxLength: { value: 20, message: "5-20個字" },
      parent: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/,
        message: "至少一個數字、大小寫、 5-20 個字"
      }, 
    },
  };
  const passwordErr= {
    name: "passwordErr",
    setting: {
      required: { value: true, message: "此欄位必填" },
      minLength: { value: 5, message: "5-20個字" },
      maxLength: { value: 20, message: "5-20個字" },
      parent: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/,
        message: "至少一個數字、大小寫、 5-20 個字"
      },
     
    },
  };
  const phoneErr= {
    name: "phoneErr",
    setting: {
      required: { value: true, message: "此欄位必填" },
      pattern: {
        value: /^09\d{8}$/,
        message: "手機格式錯誤",
      },
    },
  }
  const nameErr=
  {
    name: "nameErr",
    setting: {
      required: { value: true, message: "此欄位必填" },
     
    },
  }
  const nickErr={
    name: "nickErr",
    setting: {
      required: { value: true, message: "此欄位必填" },
    },
  } 
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className={`col-12 col-md-12`}>
              <label htmlFor="exampleInputId" className="form-label">帳號</label>
              <input type="text"
                {...register("idInputErr", idInputErr.setting)}
                onInput={handleSubmit(onSubmit)}
                // className={(errors.idInputErr && styles["inputErr"]) +" form-control"} 
                className={classNames(errors.idInputErr?styles["inputErr"]:"","form-control")}
                id="exampleInputId" aria-describedby="emailHelp" />
 
              {errors.idInputErr && <div id="emailHelp" style={{ color: "red" }} className="form-text">{errors["idInputErr"]?.message}</div>}
            </div>
          </div>
          <div className="row">
            <div className={`col-12 col-md-6`}>
              <label htmlFor="exampleInputPassword" className="form-label">密碼</label>
              <input type="text"  id="exampleInputPassword"
                ref={passwordErrVal}
                className={classNames(errors.passwordErr?styles["inputErr"]:"","form-control")}
                {...register("passwordErr", passwordErr.setting) }
                onInput={handleSubmit(onSubmit)}
                aria-describedby="emailHelp" />
              {errors.passwordErr && <div className="form-text"  style={{ color: "red" }}>{errors["passwordErr"]?.message}</div>}

            </div>

            <div className={`col-12 col-md-6`}>
              <label htmlFor="exampleInputEmail1" className="form-label">請重新輸入密碼</label>
              <input type="text"
                ref={repasswordErrVal}
                {...register("repasswordErr", repasswordErr.setting)}
                className={classNames(errors.repasswordErr?styles["inputErr"]:"","form-control")}
                 id="exampleInputEmail1" aria-describedby="emailHelp" />
              {errors.repasswordErr && <div className="form-text"  style={{ color: "red" }}> {errors["repasswordErr"]?.message}</div>}

            </div>
          </div>
          <div className="row">
            <div className={`col-12 col-md-6`}>
              <label htmlFor="exampleInputName" className="form-label">姓名</label>
              <input type="text"
              className={classNames(errors.nameErr?styles["inputErr"]:"","form-control")}
              
              id="exampleInputName"
                {...register("nameErr", {
                  required: true, 
                })}
                aria-describedby="nameErr" />
              {errors.nameErr && <div className="form-text"> {errors["passwordErr"]?.message}</div>}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="exampleInputEmail1" className="form-label">暱稱</label>
              <input type="text"
                {...register("nickErr", {
                  required: true, 
                })}
                className={classNames(errors.nickErr?styles["inputErr"]:"","form-control")}
 
                id="exampleInputEmail1" aria-describedby="emailHelp" />
              {errors.nickErr && <div className="form-text"> {errors["nickErr"]?.message}</div>}
            </div>
          </div>
          <div className="row">


            <h6 className='col-12'>生日</h6>
            <div className="col-12 col-md-4">
              <div className="face.input-group pa-1 " style={{ paddingRight: 0 }}>

                <select className="form-select pa-0" ref={yearVal} defaultValue="Choose..." id="inputGroupSelect01">

                  <option >年</option>
                  {birthY.map((v, i) => {

                    return <option value={v} key={v}>{v}</option>
                      ;
                  })}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="face.input-group pa-1 " style={{ paddingRight: 0 }}>
                <select className="form-select pa-0" ref={monthVal} onChange={() => selectChange()} defaultValue="Choose..." id="inputGroupSelect01">
                  <option >月</option>

                  {birthM.map((v, i) => {
                    return <option value={v} key={v}>{v}</option>
                      ;
                  })}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="face.input-group pa-1 " style={{ paddingRight: 0 }}>
                <select className="form-select pa-0" defaultValue="Choose..." id="inputGroupSelect01">
                  <option >日</option>
                  {birthD.map((v, i) => {

                    return <option value={v} key={v}>{v}</option>
                      ;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`col-12 col-md-6`}>
              <label htmlFor="exampleInputEmail1" className="form-label">性別</label>
              <select  
              className={classNames(errors.nickErr?styles["inputErr"]:""," form-select pa-0")}
              
              defaultValue="Choose..." id="inputGroupSelect01">
                <option value="0">性別</option>
                <option value="2">男</option>
                <option value="2">女</option>
              </select>
              {errors.sexErr && <div id="emailHelp" className="form-text">{errors["sexErr"]?.message}</div>}
            </div>
            <div className={`col-12 col-md-6`}>
              <label htmlFor="exampleInputEmail1" className="form-label">電話</label>
              <input type="text"  
              className={classNames(errors.nickErr?styles["inputErr"]:""," form-control")}
                id="exampleInputEmail1" aria-describedby="emailHelp" />
              {errors.phoneErr && <div id="emailHelp" className="form-text">{errors["phoneErr"]?.message}</div>}
            </div>
          </div>

          <div className="row">
            <div className={`col-12 col-md-12`}>
              <label htmlFor="exampleInputEmail1" className="form-label">地址(選填)</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
          </div>
          <div className="row mt-4"><button>送出</button></div>
        </form>
      </div>
    </div>
  )
}
