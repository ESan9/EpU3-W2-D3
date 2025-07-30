import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import "../assets/css/FilmGallery.css";
import { Link } from "react-router-dom";

const endpoint = "http://www.omdbapi.com/?apikey=78413715&s=";

const FilmGallery = ({ search }) => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const res = await fetch(endpoint + search);
        if (!res.ok) throw new Error("Errore nel recupero film");

        const data = await res.json();

        if (data.Search) {
          setFilms(data.Search);
          setIsError(false);
        } else {
          setFilms([]);
          setIsError(true);
        }
      } catch (err) {
        console.error(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getFilms();
  }, [search]);

  return (
    <Container
      className="my-4"
      style={{ backgroundColor: "#141414", borderRadius: "5px" }}
    >
      <h5 className="text-white mb-3">{search}</h5>

      {isLoading && (
        <div className="text-center mb-3">
          <Spinner animation="border" variant="success" />
        </div>
      )}

      {isError && (
        <Alert variant="danger" className="text-center">
          Errore nel recupero film 😥
        </Alert>
      )}

      <Row>
        {films.slice(0, 6).map((film) => (
          <Col key={film.imdbID} xs={6} md={4} lg={2} className="mb-4">
            <Link to={`/movie-details/${film.imdbID}`}>
              <img
                className="film-poster img-fluid"
                src={
                  film.Poster !== "N/A"
                    ? film.Poster
                    : "https://placecats.com/300/450"
                }
                alt={film.Title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placecats.com/300/450";
                }}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FilmGallery;
