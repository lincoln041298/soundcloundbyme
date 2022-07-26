import "../styles/globals.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Layout from "components/Layout";
import Header from "components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
 
  )
}

export default MyApp;
