import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-light px-4">
      <div className="container-fluid">
        <Link
          className="navbar-brand text-center d-none d-lg-block mp-0"
          to="#"
        >
          Quadra Collective
        </Link>

        <div className="btn bg-white border rounded-circle ms-auto me-3">0</div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-3" id="navbarNav">
          <ul className="navbar-nav text-uppercase ms-auto">
            <li className="nav-item px-0">
              <Link className="nav-link text-end" aria-current="page" to="#">
                work
              </Link>
            </li>
            <li className="nav-item px-0">
              <Link className="nav-link text-end" to="#">
                home
              </Link>
            </li>
            <li className="nav-item px-0">
              <Link className="nav-link text-end" to="#">
                about
              </Link>
            </li>
            <li className="nav-item px-0">
              <Link className="nav-link text-end" to="#">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
