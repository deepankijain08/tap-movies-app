import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Alert, Card, Button } from "react-bootstrap";
import moment from "moment";

import Loader from "../components/Loader";

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({});

  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line
  }, []);

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const response = await axios({
        method: "GET",
        url: `http://localhost:4000/api/movies/${movieId}`,
      });
      setLoading(false);
      setDetails(response.data.movie);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const onClickGoHome = () => {
    history.push("/");
  };

  return (
    <Card border="primary" className="w-75 m-auto mb-5">
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Card.Header className="movie-details-card-header text-white">
            <h1>{details.title}</h1>
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={details.poster} />
            <Card.Text className="mt-3">
              <span className="fw-bold">Plot: </span>
              {details.plot}
            </Card.Text>
            <Card.Text>
              <span className="fw-bold">Rating: </span>
              {details.rating}
            </Card.Text>
            <Card.Text>
              <span className="fw-bold">Created At: </span>
              {moment(details.createdAt).format("DD-MMM-YYYY")}
            </Card.Text>
            <Card.Text>
              <span className="fw-bold">Updated At: </span>
              {moment(details.updatedAt).format("DD-MMM-YYYY")}
            </Card.Text>
            <Button variant="primary" onClick={onClickGoHome}>
              Go Home
            </Button>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

export default MovieDetails;
