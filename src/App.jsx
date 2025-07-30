import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixFooter from "./components/NetflixFooter";
import NetflixNavbar from "./components/NetflixNavbar";
import Welcome from "./components/Welcome";
import FilmGallery from "./components/FilmGallery";

function App() {
  return (
    <>
      <main className="d-flex flex-column">
        <NetflixNavbar />
        <Welcome />
        <FilmGallery search="Neon Genesis Evangelion" />
        <FilmGallery search="Lord of The Rings" />
        <FilmGallery search="Cowboy Bebop" />
      </main>
      <NetflixFooter />
    </>
  );
}

export default App;
