import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      asd
      <Header />
      { children }
      <Footer/>
    </div>
  )
}

export default Layout
