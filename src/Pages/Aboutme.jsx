import { MapPin, Code, Cloud } from "lucide-react";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaDev } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


export function Aboutme() {
  return (
    <div className="aboutme-container">
      <div className="bg-primary py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="mb-4">
                <FaDev
                  className="d-inline-flex align-items-center justify-content-center mb-4"
                  size={60}
                />

                <h1 className="display-4 fw-bold mb-3">
                  Desarrollador Frontend
                </h1>
                <p className="lead mb-4">Maximo Kugler</p>
              </div>

              <div className="d-flex justify-content-center gap-3">
                <div className="main">
                  <div className="up">
                    <a
                      href="mailto:Maximokugler9@gmail.com"
                      alt="Gmail"
                      target="_blank"
                      className="card1"
                    >
                      <SiGmail className="gmail" size={33} />
                    </a>
                    <a href="https://www.linkedin.com/in/maximo-kugler-716962379/" className="card2">
                      <FaLinkedinIn className="linkedin" size={35} />
                    </a>
                  </div>
                  <div className="down">
                    <a
                      href="https://github.com/Maximo862"
                      alt="Github"
                      target="_blank"
                      className="card3"
                    >
                      <IoLogoGithub className="github" size={55} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-6 mb-4">
            <h2 className="h2 fw-bold mb-4">Sobre Mí</h2>
            <p className="fs-5 mb-4">
              Soy un desarrollador frontend con foco en React. Me dedico todos
              los días a practicar y mejorar mis habilidades en programación.
            </p>
            <p className="fs-5 mb-4">
              Este proyecto fue realizado como parte de un desafío técnico de
              DevChallenges.io, donde el objetivo era construir una aplicación
              funcional de clima con UI moderna y datos reales segun ciertas
              especificaciones, luego se agregaron algunas cosas. Debido a
              restricciones del API gratuito, resolví desafíos extra al procesar
              datos manualmente (agrupando por día cada 8 horas).
            </p>
            <div className="d-flex align-items-center mb-3">
              <MapPin size={20} className="me-2" />
              <span>Disponible para trabajo remoto</span>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <div
                className="card shadow-sm h-100"
                style={{ backgroundColor: "#1a1d29" }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <Code size={32} className="text-primary me-3" />
                    <h3 className="h5 fw-semibold mb-0 text-primary">
                      Tecnologías usadas
                    </h3>
                  </div>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="bg-success bg-opacity-10 rounded p-2 text-center">
                        <span className="text-primary fw-medium">React</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-success bg-opacity-10 rounded p-2 text-center">
                        <span className="text-primary fw-medium">
                          Bootstrap
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-success bg-opacity-10 rounded p-2 text-center">
                        <span className="text-primary fw-medium">
                          Fetch API
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-success bg-opacity-10 rounded p-2 text-center">
                        <span className="text-primary fw-medium">
                          React-router
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-success bg-opacity-10 rounded p-2 text-center">
                        <span className="text-primary fw-medium">Dayjs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
