import { TiWeatherSunny } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer-custom bg-dark text-white mt-5 pt-4 pb-2 border-top">
      <div className="container-fluid">
        <div className="row align-items-center text-md-start">
          <div className="col-md-4 d-flex justify-content-center mb-3 mb-md-0">
            <TiWeatherSunny size={200} />
          </div>

          <div className="col-md-4 d-flex flex-column mb-3 mb-md-0 align-items-center">
            <h3 style={{ fontSize: 60 }} className="mb-2">
              WeatherApp
            </h3>
            <p className="mb-0">© {new Date().getFullYear()} Maximo Kugler</p>
          </div>

          <div className="col-md-4 text-md-end text-align-center d-flex flex-column align-items-center">
            <h5 className="mb-2">About Me:</h5>
            <a
              href="https://github.com/Maximo862"
              className="me-3 text-white footer-icon footer-github"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://linkedin.com/in/TU-LINKEDIN"
              className="me-3 text-white footer-icon footer-linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:Maximokugler9@gmail.com"
              className="me-3 text-white footer-icon footer-gmail"
            >
              <SiGmail />
            </a>
            <a
              href="/Aboutme"
              className="footer-link-aboutme text-white text-decoration-underline"
            >
              More about me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
