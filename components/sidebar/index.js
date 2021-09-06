import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ListGroup } from "react-bootstrap";
import useSWR from "swr";
import axiosClient from "../../pages/api/axiosClient";
import { API_URL } from "../../pages/api/url";

function Sidebar() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (url) => axiosClient.get(url).then((res) => res.data);

  const url = API_URL.categories;
  const { data, error } = useSWR(url, fetcher);

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
        {data.data.map(function (item, index) {
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
