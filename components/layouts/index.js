import Head from "next/head";
import { Container } from "react-bootstrap";
import Sidebar from "../sidebar";


function Layout({ children }) {
 

  return (
    <Container>
      <Head>
        <link
          rel="preload"
          href="http://localhost:8000/api/categories"
          as="fetch"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Sidebar />
      <div className="content">{children}</div>
    </Container>
  );
}

export default Layout;
