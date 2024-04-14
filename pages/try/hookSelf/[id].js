import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// useRouter
export default function Dmm() {
    const router=useRouter();
    useEffect(()=>{
        // console.log(location.search)
    },[router])
    const id = router.query.id;
  return (
    <div>
      aaaa
      <Link href={`/${id}?page=3`}>aaa</Link> 
    </div>
  )
}
