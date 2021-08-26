import Loading from "../../components/loading";

function Product({ item }) {
  return item ? (
    <>
      <h1>Product</h1>
      <h2>Product name: {item.name}</h2>
      <p> &#127814; &#127814; &#127814; &#127814; &#127814;</p>
      <p> &#127814; &#127814; &#127814; &#127814; &#127814;</p>
      <p> &#127814; &#127814; &#127814; &#127814; &#127814;</p>
      <p>&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;</p>
      <p>&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;</p>
      <p>&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;</p>
      <p>&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;</p>
      <p>&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;</p>
    </>
  ) : (
    <Loading />
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
