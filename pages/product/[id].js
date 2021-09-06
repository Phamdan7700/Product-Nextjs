import Loading from "../../components/loading";

function Product({ apiData }) {
  const { data } = apiData;

  return  (
    <>
      <h1>Product</h1>
      <h2>Product name: {data.name}</h2>
      <p> &#127814; &#127814; &#127814; &#127814; &#127814;</p>
      <p> &#127814; &#127814; &#127814; &#127814; &#127814;</p>
      <p> &#127814; &#127814; &#127814; &#127814; &#127814;</p>
      <p>&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;</p>
      <p>&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;</p>
      <p>&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;</p>
      <p>&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;</p>
      <p>&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;&#127813;</p>
    </>
  ) 
}

export default Product;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const url = `${process.env.API_SERVER}/product/${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  const apiData = await res.json();

  return {
    props: {
      apiData,
    },
  };
}
