import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "../../components/loading";

// import style from "../../styles/Category.module.css";

function Product({ item }) {
  // if (error) return <div>Failed to load</div>;
  // if (!item) return <div>Loading...</div>;

  return (
    <>
      <h1>Product</h1>
      {item.name}
    </>
  );
}

export default Product;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const res = await fetch(`http://127.0.0.1:8000/product/${id}`);
  const item = await res.json();
  
  return {
    props: {
      item,
    },
  };
}
