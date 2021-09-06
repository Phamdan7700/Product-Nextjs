import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Loading from "../../../components/loading";
import PaginationCustom from "../../../components/pagination";
import axiosClient from "../../api/axiosClient";

function Products() {
  const router = useRouter();
  const { id, page } = router.query;
  const [dataResponse, setDataResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const url = `/category/${id}/products?page=${page}`;
      axiosClient
        .get(url, { params: { page } })
        .then((res) => setDataResponse(res.data))
        .catch((error) => setError(error));
    }
  }, [id, page]);
  
  if (error) return <div>{error.message}</div>;
  if (!dataResponse) return <Loading />;

  const {
    data,
    meta: { current_page, last_page },
  } = dataResponse;

  return (
    <>
      <h1>Products</h1>
      <ListGroup>
        {data.map((product, index) => {
          return (
            <ListGroup.Item action key={index}>
              <Link href={`/product/${product.id}`}>
                <a>{product.name}</a>
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <PaginationCustom
        activePage={current_page}
        lastPage={last_page}
        setPage={(number) => {
          router.push({
            query: { id: id, page: number },
          });
        }}
      />
    </>
  );
}

export default Products;
