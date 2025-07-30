import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const path1 = currentPath.includes("/Aboutme");

  return (
    <nav style={{borderBottom: "solid black 1px", }} className="navbar shadow">
      <div className="container-fluid">
        {path1 ? (
          <div className="styled-wrapper">
            <Link to={"/"} className="button">
              <div className="button-box">
                <span className="button-elem">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow-icon"
                  >
                    <path
                      fill="black"
                      d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                    ></path>
                  </svg>
                </span>
                <span className="button-elem">
                  <svg
                    fill="black"
                    viewBox="0 0  24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow-icon"
                  >
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        ) : (
          <div className="ms-auto">
            <Link to={"/Aboutme"} className="Button-aboutme ">
              <span>About me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
              >
                <circle
                  strokeWidth="3"
                  stroke="black"
                  r="35.5"
                  cy="37"
                  cx="37"
                ></circle>
                <path
                  fill="black"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                ></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
