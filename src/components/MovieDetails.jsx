import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODg3NzZmZTEyODg5NzAwMTVmMjdiYmQiLCJpYXQiOjE3NTM3MDgyODcsImV4cCI6MTc1NDkxNzg4N30.Urj3XDJvrGYQlPTFARoicWtHZ66jH6Wqh_HgxRO4PMw";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const omdbResponse = await fetch(
          `https://www.omdbapi.com/?apikey=78413715&i=${movieId}`
        );
        const commentsResponse = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
          {
            headers: {
              Authorization: Auth,
            },
          }
        );
        const movieData = await omdbResponse.json();
        const commentData = await commentsResponse.json();
        setMovie(movieData);
        setComment(commentData);
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
    <Container className="text-white mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2>{movie.Title}</h2>
          <p>
            <strong>Anno:</strong> {movie.Year}
          </p>
          <p>
            <strong>Trama:</strong> {movie.Plot}
          </p>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid my-3"
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <h4 className="text-center">Commenti</h4>
          {comment.length > 0 ? (
            <ListGroup variant="flush">
              {comment.map((c) => (
                <ListGroup.Item key={c._id} className="bg-dark text-white">
                  <strong>{c.author}:</strong> {c.comment} <br />
                  <small>Voto: {c.rate}/5</small>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p className="text-center">Nessun commento disponibile.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
