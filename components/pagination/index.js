import { Pagination } from "react-bootstrap";

function PaginationCustom({ activePage, lastPage, setPage }) {
  let active = activePage;
  let items = [];
  for (let number = 1; number <= lastPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="mt-5 d-flex justify-content-center">
      <Pagination>
      <Pagination.First onClick={()=>setPage(1)}/>
      <Pagination.Prev onClick={()=>setPage(activePage - 1)} disabled={activePage === 1}/>
        {items}
      <Pagination.Next onClick={()=>setPage(activePage + 1)} disabled={activePage === lastPage}/>
      <Pagination.Last onClick={()=>setPage(lastPage)}/>
      </Pagination>
    </div>
  );
}

export default PaginationCustom;
