import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import Welcome from "./components/Welcome";
import FilmGallery from "./components/FilmGallery";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <NetflixNavbar />
              <main className="d-flex flex-column">
                <Welcome />
                <FilmGallery search="Neon Genesis Evangelion" />
                <FilmGallery search="Lord of The Rings" />
                <FilmGallery search="Cowboy Bebop" />
              </main>
              <NetflixFooter />
            </>
          }
        />

        {/* TV Shows Page */}
        <Route
          path="/tvshows"
          element={
            <>
              <NetflixNavbar />
              <TVShows />
              <NetflixFooter />
            </>
          }
        />

        {/* Movie Details Page (parametrica) */}
        <Route
          path="/movie-details/:movieId"
          element={
            <>
              <NetflixNavbar />
              <MovieDetails />
              <NetflixFooter />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
