import { useState, useContext } from "react";
import { Weathercontext } from "../../Context/Context.jsx";
import { MapPin, Wind, Eye, Droplets, Thermometer } from "lucide-react";
import {
  DefineIcon,
  Kevintocelsius,
  Hour,
  Handlesubmit,
} from "../../Utils/Utils.jsx";
import { Hourlycardright } from "./Nexthourscardright.jsx";
import { Weatherstatscardright } from "./Weatherstatscardright.jsx";

export function RightPanel() {
  const { setcity2, datarightpanel, actuallydate } = useContext(Weathercontext);
  const [Inputvalue, setInputvalue] = useState("Helsinki");

  const nexthours = Array.from({ length: 6 }, (c, i) => {
    const index = i + 1;
    if (datarightpanel && datarightpanel.list[0]) {
      return {
        hour: Hour(datarightpanel, index),
        icon: DefineIcon(datarightpanel.list[index].weather[0].description, 20),
        temp: Kevintocelsius(datarightpanel.list[index].main.temp),
      };
    }
  });

  return (
    <div className="col-lg-3">
      <div className="d-flex flex-column gap-4 h-100">
        <div className="position-relative">
          <form onSubmit={(e) => Handlesubmit(e, Inputvalue, setcity2)}>
            <input
              type="text"
              placeholder="Search city..."
              className="form-control search-input"
              onChange={(e) => setInputvalue(e.target.value)}
              value={Inputvalue}
            />
            <button type="submit" className="btn btn-primary mt-2 w-100">
              Search
            </button>
          </form>
        </div>

        {/* Detailed Weather */}
        {datarightpanel && datarightpanel.list && (
          <div className="glass-card p-4 flex-grow-1">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div>
                <h2 className="h3 fw-bold mb-1">{datarightpanel.city.name}</h2>
                <p className="text-muted-light mb-0 d-flex align-items-center">
                  <MapPin size={16} className="me-1" />
                  {datarightpanel.city.country} {actuallydate}
                </p>
              </div>
              {DefineIcon(datarightpanel.list[0].weather[0].description, 48)}
            </div>

            <div className="temperature-large mb-2">
              {Kevintocelsius(datarightpanel.list[0].main.temp)}°
            </div>
            <p className="text-muted-light mb-4">
              {datarightpanel.list[0].weather[0].description}
            </p>

            {/* Detailed Hourly */}
            <div className="row g-2 mb-4">
              {nexthours.map((c, i) => (
                <Hourlycardright
                  key={i}
                  hour={c.hour}
                  icon={c.icon}
                  temp={c.temp}
                />
              ))}
            </div>

            {/* Weather Stats */}
            <div className="row g-3">
              <Weatherstatscardright
                Icon={Wind}
                name={"Wind"}
                value={`${datarightpanel.list[0].wind.speed}km/h`}
              />
              <Weatherstatscardright
                Icon={Droplets}
                name={"Humidity"}
                value={`${datarightpanel.list[0].main.humidity}%`}
              />
              <Weatherstatscardright
                Icon={Eye}
                name={"Visibility"}
                value={`${datarightpanel.list[0].visibility / 1000}km`}
              />
              <Weatherstatscardright
                Icon={Thermometer}
                name={"Feels like"}
                value={`${Kevintocelsius(
                  datarightpanel.list[0].main.feels_like
                )}°`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
