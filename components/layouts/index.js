import Head from "next/head";
import { Container } from "react-bootstrap";
import Sidebar from "../sidebar";

function Layout({ children }) {
  return (
    <Container>
      <Head></Head>
      <Sidebar />
      <div className="content">{children}</div>
    </Container>
  );
}

export default Layout;
