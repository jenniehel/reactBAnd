import 'bootstrap/dist/css/bootstrap.css'
// import "@/styles/globals.css";  
import '../styles/form.css'; // 导入全局 CSS 文件
import { useEffect } from 'react'
import '@/styles/globals.scss'
import DefaultLayout from '@/components/layout/default-layout'
import MainLayout from '@/components/layout/main-layout'
import Sesson from '@/components/layout/section'
import '@/styles/index.scss'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  const theme = {
    // Your theme object here
  };  const getLayout =
  Component.getLayout || ((page) => <MainLayout><Sesson>{page}</Sesson></MainLayout>)
  return getLayout(
    <>  
   { /* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>}
       <Navbar/> */}
      <Component {...pageProps} /> 
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    </>
  )
}
