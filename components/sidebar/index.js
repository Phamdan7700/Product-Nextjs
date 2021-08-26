import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((res) => {
    return res.json();
  });

function Sidebar() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(
    "http://localhost:8000/api/categories",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="sidebar position-fixed top-0 vh-100">
      <ListGroup>
        <ListGroup.Item action disabled>
          Danh Mục
        </ListGroup.Item>
        <ListGroup.Item action>
          <Link href="/">
            <a>Trang Chủ</a>
          </Link>
        </ListGroup.Item>
        {data.map(function (item, index) {
          return (
            <ListGroup.Item action key={index} active={item.id == id}>
              <Link href={`/category/${item.id}/products?page=1`}>
                <a style={{ display: "block" }}>{item.name}</a>
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default Sidebar;
