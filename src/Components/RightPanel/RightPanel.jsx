import { useState, useContext } from "react";
import { Weathercontext } from "../../Context/Context.jsx";
import { MapPin, Wind, Eye, Droplets, Thermometer } from "lucide-react";
import {
  DefineIcon,
  Kevintocelsius,
  Handlesubmit,
} from "../../Utils/Utils.jsx";
import { Weatherstatscardright } from "./Weatherstatscardright.jsx";
import { Searchbar } from "../Searchbar.jsx";
import { Nexthoursright } from "./Nexthoursright.jsx";

export function RightPanel() {
  const { setcity2, datarightpanel, actuallydate, celsiustoF } =
    useContext(Weathercontext);
  const [Inputvalue, setInputvalue] = useState("Helsinki");

  return (
    <div className="col-lg-3">
      <div className="d-flex flex-column gap-4 h-100">
        <Searchbar
          setinputvalue={setInputvalue}
          inputvalue={Inputvalue}
          Handlesubmit={(e) => Handlesubmit(e, Inputvalue, setcity2)}
        />

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
            {Kevintocelsius(datarightpanel.list[0].main.temp, celsiustoF)}°
          </div>
          <p className="text-muted-light mb-4">
            {datarightpanel.list[0].weather[0].description}
          </p>

          <Nexthoursright />

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
                datarightpanel.list[0].main.feels_like,
                celsiustoF
              )}°`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
