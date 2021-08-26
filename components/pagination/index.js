import { Pagination } from "react-bootstrap";

function PaginationCustom({ setCurrentPage, current_page, last_page }) {
  // pagination
  let items = [];

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
  );
}

export default PaginationCustom;
