import {
  Wind,
  Eye,
  Droplets,
  Thermometer,
  MapPin
} from "lucide-react";
import { Kevintocelsius, DefineIcon, Handlesubmit } from "../../Utils/Utils";
import { useContext, useState } from "react";
import { Weathercontext } from "../../Context/Context";
import { Weatherinfocard } from "./Weatherinfocard";
import { Searchbar } from "../Searchbar";
import { Othercities } from "./Othercities";

export function LeftPanel() {
  const { setCity1, data5days, actuallydate, celsiustoF } =
    useContext(Weathercontext);
  const [inputvalue, setinputvalue] = useState("Miami");

  return (
    <div className="col-lg-3">
      <div className="d-flex flex-column gap-4 h-100">
    <Searchbar
    setinputvalue={setinputvalue}
    inputvalue={inputvalue}
    Handlesubmit={(e) => Handlesubmit(e, inputvalue, setCity1)}
    />

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
            {Kevintocelsius(data5days.list[0].main.temp, celsiustoF)}°
          </div>
          <p className="text-muted-light mb-4">
            {data5days.list[0].weather[0].description}
          </p>

          <div className="row g-3">
            <Weatherinfocard
              Icon={Wind}
              value={`${data5days.list[0].wind.speed}km/h`}
            />
            <Weatherinfocard
              Icon={Eye}
              value={`${data5days.list[0].visibility / 1000}km`}
            />
            <Weatherinfocard
              Icon={Droplets}
              value={`${data5days.list[0].main.humidity}%`}
            />
            <Weatherinfocard
              Icon={Thermometer}
              value={`${Kevintocelsius(
                data5days.list[0].main.feels_like,
                celsiustoF
              )}°`}
            />
          </div>
        </div>

     
        <Othercities/>
        </div>
      </div>
    
  );
}
