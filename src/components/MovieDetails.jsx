import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const omdbResponse = await fetch(
          `https://www.omdbapi.com/?apikey=78413715&i=${movieId}`
        );
        const movieData = await omdbResponse.json();

        setMovie(movieData);
      } catch (err) {
        console.error("Errore nel fetch dei dati", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (loading) return <p className="text-white text-center">Caricamento...</p>;
  if (!movie)
    return <p className="text-danger text-center">Film non trovato.</p>;

  return (
    <Container className="text-white d-flex justify-content-center align-items-center">
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2>{movie.Title}</h2>
          <p>
            <strong>Anno:</strong> {movie.Year}
          </p>
          <p>
            <strong>Trama:</strong> {movie.Plot}
          </p>
          <img src={movie.Poster} alt={movie.Title} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
