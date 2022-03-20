import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="pb-5 px-4">
      <div className="container-fluid border-top">
        <div className="row align-items-center py-5">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="copyright d-block d-lg-flex justify-content-lg-between align-items-lg-center text-center">
                <div className="mb-5 mb-lg-0">
                  <p className="mp-0">&copy; Quadra Collective</p>
                </div>
                <ul className="d-inline mp-0">
                  <li className="d-inline">
                    <Link className="nav-link fs-7 d-lg-inline d-block" to="#">
                      Instagram
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link className="nav-link fs-7 d-lg-inline d-block" to="#">
                      Facebook
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link className="nav-link fs-7 d-lg-inline d-block" to="#">
                      Tumblr
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link className="nav-link fs-7 d-lg-inline d-block" to="#">
                      Pinterest
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
