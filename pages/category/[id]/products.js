import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ListGroup, Pagination } from "react-bootstrap";

function Products({ apiResponse }) {
  const router = useRouter();
  const { data, current_page, last_page } = apiResponse;
  const { id } = router.query;
  const getProductsData = function (id, page = 1) {
    const url = `http://127.0.0.1:8000/category/${id}/products?page=${page}`;
    const response = axios.get(url);
    console.log(response);
  };

  // pagination
  let items = [];
  const setCurrentPage = function (number) {
    router.push(`/category/${id}/products?page=${number}`);
  };
  for (let number = 1; number <= last_page; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === current_page}
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

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
      <div className="mt-5 d-flex justify-content-center">
        <Pagination size="md">
          <Pagination.First
            onClick={() => {
              setCurrentPage(1);
            }}
          />
          <Pagination.Prev
            onClick={() => {
              setCurrentPage(current_page - 1);
            }}
            disabled={current_page <= 1}
          />
          {items}
          <Pagination.Next
            onClick={() => {
              setCurrentPage(current_page + 1);
            }}
            disabled={current_page == last_page}
          />
          <Pagination.Last
            onClick={() => {
              setCurrentPage(last_page);
            }}
          />
        </Pagination>
      </div>
    </>
  );
}

export default Products;

export async function getServerSideProps(context) {
  const { params, query } = context;
  const { id } = params;
  const { page } = query;
  const res = await fetch(
    `http://127.0.0.1:8000/category/${id}/products?page=${page}`
  );
  const apiResponse = await res.json();

  return {
    props: {
      apiResponse,
    },
  };
}
