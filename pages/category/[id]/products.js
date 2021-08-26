import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Loading from "../../../components/loading";
import PaginationCustom from "../../../components/pagination";

function Products() {
  const router = useRouter();
  const { id, page } = router.query;
  const [dataResponse, setDataResponse] = useState(null);

// 
  useEffect(() => {
    if (id) {
      const url = `http://127.0.0.1:8000/api/category/${id}/products?page=${page}`;
      axios.get(url).then((res) => setDataResponse(res.data));
    }
  }, [page, id]);

// 
  if (!dataResponse) return <Loading />;

  const { data, current_page, last_page } = dataResponse;
  const setCurrentPage = function (number) {
    router.push(`/category/${id}/products?page=${number}`);
  };

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
        current_page={current_page}
        last_page={last_page}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Products;
