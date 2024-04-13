import React from 'react'
import Image from 'next/image'
import {
  FaBars,
  FaUser,
  FaShoppingCart,
  FaAngleDown,
  FaAngleUp,
} from 'react-icons/fa'

export default function Navbar() {
  return (
    <>
      {' '}
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <div className="inline-nav">
            <a className="navbar-brand" href="#">
              <Image src="/activity.svg" alt="" width={30} height={24} />
            </a>
            <div className="right-icons">
              <a className="navbar-brand min-cart" href="#">
                <FaShoppingCart className="fa-solid fa-cart-shopping" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <FaBars className="navbar-toggler-icon fa-solid fa-bars" />
              </button>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="me-auto" />
            <ul className="navbar-nav mb-0 mb-lg-0">
              <div className="view-nav-items">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    夜市導覽
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    美味商城
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    趣味遊戲
                  </a>
                </li>
              </div>
              {/* 手機版的選單 開始 */}
              <div className="nav-min-types">
                {/* 未登入版 開始*/}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="my-drop-items">
                      <span>註冊</span>
                      <FaAngleDown className="faangle faangledown" />
                      <FaAngleUp className="faangle faangleup" />
                    </div>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        一般會員註冊
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        商家會員註冊
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="my-drop-items">
                      <span>登入</span>
                      <FaAngleDown className="faangle faangledown" />
                      <FaAngleUp className="faangle faangleup" />
                    </div>
                  </a>
                  <ul
                    className="dropdown-menu login-border"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        一般會員登入
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        商家會員登入
                      </a>
                    </li>
                  </ul>
                </li>
                {/* 未登入版結束 */}
                {/* 一般會員版 開始*/}
                {/* <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="my-drop-items">
                <span>一般會員中心</span>
                <FaAngleDown className="faangle faangledown" />
                <FaAngleUp className="faangle faangleup" />
              </div>
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  商品與QRcode
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  編輯基本資料
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              登出
            </a>
          </li> */}
                {/* 一般會員結束 */}
                {/* 商家會員版 開始*/}
                {/* <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="my-drop-items">
                <span>商家會員中心</span>
                <FaAngleDown className="faangle faangledown" />
                <FaAngleUp className="faangle faangleup" />
              </div>
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="./index">
                  掃描QRcode
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  進入店面
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  訂單管理
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              登出
            </a>
          </li> */}
                {/* 商家會員結束 */}
              </div>
              {/* 手機版的選單 結束 */}

              {/* 網頁版的浮動視窗 開始 */}
              <div className="nav-icon-items">
                <li className="nav-item">
                  <div className="nav-icons">
                    {/* 未登入 Start */}
                    <div className="dropdown">
                      <a
                        className="dropdown-webbar"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FaBars className="fa-solid fa-bars" />
                        <FaUser className="fa-solid fa-user" />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <div className="triangle" />
                        <li>
                          <a className="dropdown-item" href="#">
                            一般會員【登入/註冊】
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            商家會員【登入/註冊】
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* 未登入 End */}
                    {/* 一般會員 Start */}
                    {/*<div className="dropdown">
                <a
                  className="dropdown-webbar"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaBars className="fa-solid fa-bars" />
                  <FaUser className="fa-solid fa-user" />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="triangle"></div>

                  <li>
                    <a className="dropdown-item" href="#">
                      編輯基本資料
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      商品與QRcode
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      登出
                    </a>
                  </li>
                </ul>
              </div>*/}
                    {/* 一般會員 End */}
                    {/* 商家會員 Start */}
                    {/* <div className="dropdown">
          <a className="dropdown-webbar" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <FaBars className="fa-solid fa-bars" />
            <FaUser className="fa-solid fa-user" />
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <div className="triangle"></div>
            <li><a className="dropdown-item" href="#">進入店面</a></li>
            <li><a className="dropdown-item" href="#">訂單管理</a></li>
            <li><a className="dropdown-item" href="#">掃描QRcode</a></li>
            <li><a className="dropdown-item" href="#">登出</a></li>
          </ul>
        </div> */}
                    {/* 商家會員 End */}
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <div className="nav-icons">
                      <FaShoppingCart className="fa-solid fa-cart-shopping" />
                    </div>
                  </a>
                </li>
              </div>
              {/* 網頁版的浮動視窗 結束 */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
