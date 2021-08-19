import Link from "next/link";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Loading from "../components/loading";
import styles from "../styles/Category.module.css";

export default function Home({ items }) {
  return (
    <>
      <h1 className={styles.title}>
        <p className="title1">Sản phẩm nổi bật</p>
      </h1>
      <ListGroup>
        {items.map((item, index) => {
          return (
            <ListGroup.Item action key={index}>
              <Link
                href={{ pathname: "/product/[id]", query: { id: item.id } }}
              >
                <a>{item.name}</a>
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/featured-products");
  const items = await res.json();

  return {
    props: {
      items,
    },
  };
}
