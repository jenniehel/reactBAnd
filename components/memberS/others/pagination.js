import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
export default function pla() {
  return ( 
    <footer aria-label="Page navigation example" className='d-flex justify-content-center mt-4'>
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link"><IoIosArrowForward/></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><IoIosArrowBack/></a>
    </li>
  </ul>
</footer>
       
  )
}
