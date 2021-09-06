import Link from "next/link";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Loading from "../components/loading";
import PaginationCustom from "../components/pagination";
import styles from "../styles/Category.module.css";
import axiosClient from "./api/axiosClient";
import { API_URL } from "./api/url";

export default function Home() {
  const [page, setPage] = useState(1);
  const [dataResponse, setDataResponse] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const url = API_URL.featureProducts;
    axiosClient
      .get(url, { params: { page } })
      .then((res) => setDataResponse(res.data))
      .catch((error) => setError(error));
  }, [page]);
  
  if (error) return <div>{error.message}</div>;
  if (!dataResponse) return <Loading />;

  const {
    data,
    meta: { current_page, last_page },
  } = dataResponse;

  return (
    <>
      <h1 className={styles.title}>
        <p className="title1">Sản phẩm nổi bật</p>
      </h1>
      <ListGroup>
        {data.map((item, index) => {
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
      <PaginationCustom
        activePage={current_page}
        lastPage={last_page}
        setPage={setPage}
      />
    </>
  );
}
