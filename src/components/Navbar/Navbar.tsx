import { useContext } from "react";
import { AppContext } from "../../App";

interface NavbarProps {
  title: string;
}

export default function Navbar({ title }: NavbarProps) {
  const [navbarTitle, setNavbarTitle] = useContext(AppContext);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            {title}
          </a>
          <button
            className="navbar-toggler d-lg-none border-0 px-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => setNavbarTitle(!navbarTitle)}
                  >
                    Toggle Log
                  </button>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
