import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Spinner, Alert } from "react-bootstrap";
import "../assets/css/FilmGallery.css";

const endpoint = "http://www.omdbapi.com/?apikey=78413715&s=";

class FilmGallery extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
  };

  getFilms = () => {
    fetch(endpoint + this.props.search)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Errore nel recupero film");
      })
      .then((data) => {
        if (data.Search) {
          this.setState({
            films: data.Search,
            isLoading: false,
            isError: false,
          });
        } else {
          this.setState({
            films: [],
            isLoading: false,
            isError: true,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ isError: true, isLoading: false });
      });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <Container
        className="my-4"
        style={{ backgroundColor: "#141414", borderRadius: "5px" }}
      >
        <h5 className="text-white mb-3">{this.props.search}</h5>
        {/* Qui ci sono lo spinner al loading e l'alert per l'errore nel caso di mancato recupero del film dalla fetch, ho fatto le prove cambiando la chiave e dovrebbe essere tutto ok.  */}
        {this.state.isLoading && (
          <div className="text-center mb-3">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {this.state.isError && (
          <Alert variant="danger" className="text-center">
            Errore nel recupero film 😥
          </Alert>
        )}
        <Row>
          {this.state.films.slice(0, 6).map((film) => (
            <Col key={film.imdbID} xs={6} md={4} lg={2} className="mb-4">
              <img
                className="film-poster img-fluid"
                src={
                  film.Poster !== "N/A"
                    ? film.Poster
                    : "https://placecats.com/300/450"
                }
                alt={film.Title}
                // Qui ho messo una semplice gestione errore al caricamento per l'extra dato che per Cowboy Bebop e Eva non trovava una cover. La sostituisce con un placecats. Forse il ternario sopra è un po' ridondante ma comunque ha una funzione diversa in teoria.
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placecats.com/300/450";
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FilmGallery;
