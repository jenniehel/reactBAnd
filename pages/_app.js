import 'bootstrap/dist/css/bootstrap.css' 
// import "@/styles/globals.css";  

export default function App({ Component, pageProps }) { 
  const theme = {
    // Your theme object here
  };
  return(
    <>
  {/* <Navbar/> */} 
  <Component {...pageProps} />; 
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
    </>
  )
}
