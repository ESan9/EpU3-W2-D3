import { Dropdown } from "react-bootstrap";
import { BsGrid, BsList } from "react-icons/bs";
import "../assets/css/Welcome.css";

const Welcome = () => {
  return (
    <div className="d-none d-md-flex justify-content-between align-items-center px-4 py-3 text-white">
      <div className="d-flex align-items-center gap-3">
        <h4 className="mb-0 fw-bold">TV Shows</h4>

        <Dropdown>
          <Dropdown.Toggle
            variant="outline-light"
            size="sm"
            className="rounded-0 border-white text-white"
            id="bottoneOverNero"
          >
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="d-flex gap-2">
        <button className="icon-button border border-white text-white bg-transparent p-2">
          <BsList />
        </button>
        <button className="icon-button border border-white text-white bg-transparent p-2">
          <BsGrid />
        </button>
      </div>
    </div>
  );
};

export default Welcome;
