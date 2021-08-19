import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Router from "next/router";
import Loading from "../components/loading";
import { useState } from "react";
import Layout from "../components/layouts";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });
  Router.events.on("routeChangeError", () => {
    setLoading(false);
  });

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Layout>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  );
}

export default MyApp;
