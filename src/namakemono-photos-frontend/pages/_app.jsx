import { appWithTranslation } from "next-i18next";
import Header from "../components/Header";

//import "../styles/globals.css";
import "../styles/bootstrap.css"
import  "../styles/metro-bootstrap.css";
import "../styles/kustomize.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"></link>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"></link>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
