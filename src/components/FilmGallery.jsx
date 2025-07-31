import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import "../assets/css/FilmGallery.css";
import { Link } from "react-router-dom";

const endpoint = "http://www.omdbapi.com/?apikey=78413715&s=";

// Componente FilmGallery che riceve una `search` (parola chiave di ricerca) come prop
const FilmGallery = ({ search }) => {
  // Stato per salvare i film recuperati
  const [films, setFilms] = useState([]);
  // Stato per gestire il caricamento
  const [isLoading, setIsLoading] = useState(true);
  // Stato per gestire eventuali errori
  const [isError, setIsError] = useState(false);

  // useEffect che esegue la chiamata API ogni volta che cambia il valore di `search`
  useEffect(() => {
    const getFilms = async () => {
      try {
        // Effettua la fetch all'API con il termine di ricerca
        const res = await fetch(endpoint + search);
        // Se la risposta non è OK (es. errore 404 o 500), viene generato un errore
        if (!res.ok) throw new Error("Errore nel recupero film");

        // Parsing della risposta JSON
        const data = await res.json();

        // Se la risposta contiene film (proprietà "Search"), li salva nello stato
        if (data.Search) {
          setFilms(data.Search);
          setIsError(false); // Nessun errore
        } else {
          // Se la risposta è valida ma non contiene film
          setFilms([]);
          setIsError(true);
        }
      } catch (err) {
        // Se c'è un errore nella fetch o nel parsing, mostra errore
        console.error(err);
        setIsError(true);
      } finally {
        // In ogni caso, termina il caricamento
        setIsLoading(false);
      }
    };

    getFilms();
  }, [search]); // Dipendenza: viene rieseguito quando cambia `search`

  // JSX di ritorno del componente
  return (
    <Container
      className="my-4"
      style={{ backgroundColor: "#141414", borderRadius: "5px" }}
    >
      {/* Titolo con il termine di ricerca */}
      <h5 className="text-white mb-3">{search}</h5>

      {/* Spinner di caricamento */}
      {isLoading && (
        <div className="text-center mb-3">
          <Spinner animation="border" variant="success" />
        </div>
      )}

      {/* Messaggio di errore */}
      {isError && (
        <Alert variant="danger" className="text-center">
          Errore nel recupero film 😥
        </Alert>
      )}

      {/* Lista di film */}
      <Row>
        {/* Mostra solo i primi 6 film */}
        {films.slice(0, 6).map((film) => (
          <Col key={film.imdbID} xs={6} md={4} lg={2} className="mb-4">
            {/* Link alla pagina dei dettagli del film */}
            <Link to={`/movie-details/${film.imdbID}`}>
              <img
                className="film-poster img-fluid"
                src={
                  film.Poster !== "N/A"
                    ? film.Poster // Se il poster è disponibile
                    : "https://placecats.com/300/450" // Immagine di fallback (gatto!)
                }
                alt={film.Title}
                // Gestione del fallback se l'immagine non si carica
                onError={(e) => {
                  e.target.onerror = null; // Evita loop infinito
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

// Esportazione del componente per poterlo usare in altri file
export default FilmGallery;
