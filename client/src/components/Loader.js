import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div className="my-5 w-100 d-flex justify-content-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loader;
