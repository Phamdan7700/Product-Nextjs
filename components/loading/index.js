import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="d-flex w-100" style={{ marginTop: '25%'}}>
      <div className="m-auto ">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
      </div>
    </div>
  );
}

export default Loading;
