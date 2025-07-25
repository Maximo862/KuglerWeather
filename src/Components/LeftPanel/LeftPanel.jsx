import { Wind, Eye, Droplets, Thermometer, MapPin } from "lucide-react";
import { Kevintocelsius, DefineIcon, Handlesubmit } from "../../Utils/Utils";
import { useContext, useState } from "react";
import { Weathercontext } from "../../Context/Context";

export function LeftPanel() {
  const { setCity1, data5days, actuallydate, citysfetch } =
    useContext(Weathercontext);
  const [inputvalue, setinputvalue] = useState("Miami");

  return (
    <div className="col-lg-3">
      <div className="d-flex flex-column gap-4 h-100">
        <div className="position-relative">
          <form onSubmit={(e) => Handlesubmit(e, inputvalue, setCity1)}>
            <input
              type="text"
              placeholder="Search city..."
              className="form-control search-input"
              onChange={(e) => setinputvalue(e.target.value)}
              value={inputvalue}
            />
            <button type="submit" className="btn btn-primary mt-2 w-100">
              Search
            </button>
          </form>
        </div>

        {data5days && data5days.city && (
          <div className="glass-card p-4 flex-grow-1">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div>
                <h2 className="h3 fw-bold mb-1">{data5days.city.name}</h2>
                <p className="text-muted-light mb-0 d-flex align-items-center">
                  <MapPin size={16} className="me-1" />
                  {data5days.city.country} {actuallydate}
                </p>
              </div>
              {DefineIcon(data5days.list[0].weather[0].description, 48)}
            </div>

            <div className="temperature-large mb-2">
              {Kevintocelsius(data5days.list[0].main.temp)}°
            </div>
            <p className="text-muted-light mb-4">
              {data5days.list[0].weather[0].description}
            </p>

            <div className="row g-3">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <Wind size={16} className="me-2 text-muted-light" />
                  <span className="small">
                    {data5days.list[0].wind.speed}km/h
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <Eye size={16} className="me-2 text-muted-light" />
                  <span className="small">
                    {data5days.list[0].visibility / 1000}km
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <Droplets size={16} className="me-2 text-muted-light" />
                  <span className="small">
                    {data5days.list[0].main.humidity}%
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <Thermometer size={16} className="me-2 text-muted-light" />
                  <span className="small">
                    {Kevintocelsius(data5days.list[0].main.feels_like)}°
                  </span>
                </div>
              </div>
              <div className="col-6">
                <span>
                  Temp min: {Kevintocelsius(data5days.list[0].main.temp_min)}°
                </span>
              </div>
              <div className="col-6">
                <span>
                  Temp max: {Kevintocelsius(data5days.list[0].main.temp_max)}°
                </span>
              </div>
            </div>
          </div>
        )}
        {citysfetch && citysfetch[2].list[0] && (
          <div className="glass-card p-4">
            <h3 className="h5 fw-semibold mb-3">Other large cities</h3>
            <div className="d-flex flex-column gap-2">
              {citysfetch.map((c, i) => (
                <div className="city-card p-3" key={i}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="fw-medium mb-1">{c.city.name}</p>
                      <p className="small text-muted-light mb-0">
                        {c.list[0].weather[0].description}
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      {DefineIcon(c.list[0].weather[0].description, 24)}
                      <span className="temperature-medium">
                        {Kevintocelsius(c.list[0].main.temp_min)}°
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
