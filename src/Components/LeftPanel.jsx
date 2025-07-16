import { Sun, CloudRain, CloudSnow, Wind, Eye, Droplets, Thermometer } from 'lucide-react';
import { Kevintocelsius, DefineIcon } from "../App";
import { useContext, useState } from "react";
import { Weathercontext } from "../Context/Context";

export function LeftPanel(){
 
  const {setCity1, data5days} = useContext(Weathercontext)
 const [inputvalue, setinputvalue] = useState("Miami")
  const date = new Date()
const options = {
  weekday : "short",
  day : "numeric",
  month : "short"
}

const actuallydate = date.toLocaleDateString("es-ES", options);
 
function Handlesubmit(e) {
  e.preventDefault()
  if (inputvalue.trim()) {
    setCity1(inputvalue)
  }
}

  return (
    <div className="col-lg-3">
      <div className="d-flex flex-column gap-4 h-100">
       
          <div className="position-relative">
       <form onSubmit={Handlesubmit}>
                         <input
                           type="text"
                           placeholder="Search city..."
                           className="form-control search-input"
                           onChange={(e) => setinputvalue(e.target.value)}
                           value={inputvalue}
                         />
                         <button type='submit' className="btn btn-primary mt-2 w-100">Search</button>
                        </form>
                       </div>

       
         {data5days && data5days.city && (
        <div className="glass-card p-4 flex-grow-1">
          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
             
              <h2 className="h3 fw-bold mb-1">{data5days.city.name}</h2>
              <p className="text-muted-light mb-0 d-flex align-items-center">
                 {DefineIcon(data5days.list[0].weather[0].description)}
                 {data5days.city.country} { actuallydate}
              </p>
            </div>
            <CloudSnow size={48} className="text-blue weather-icon" />
          </div>
          
          <div className="temperature-large mb-2">{Kevintocelsius(data5days.list[0].main.temp)}°</div>
          <p className="text-muted-light mb-4">{data5days.list[0].weather[0].description}</p>
          
          <div className="row g-3">
            <div className="col-6">
              <div className="d-flex align-items-center">
                <Wind size={16} className="me-2 text-muted-light" />
                <span className="small">{data5days.list[0].wind.speed}km/h</span>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center">
                <Eye size={16} className="me-2 text-muted-light" />
                <span className="small">{data5days.list[0].visibility / 1000}km</span>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center">
                <Droplets size={16} className="me-2 text-muted-light" />
                <span className="small">{data5days.list[0].main.humidity
}%</span>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center">
                <Thermometer size={16} className="me-2 text-muted-light" />
                <span className="small">{Kevintocelsius(data5days.list[0].main.feels_like)}°</span>
              </div>
            </div>
            <div className='col-6'>
<span>Temp min: {Kevintocelsius(data5days.list[0].main.temp_min)}°</span>
            </div>
             <div className='col-6'>
<span>Temp max: {Kevintocelsius(data5days.list[0].main.temp_max)}°</span>
            </div>
          </div>
        </div>
 )}
      
        <div className="glass-card p-4">
          <h3 className="h5 fw-semibold mb-3">Other large cities</h3>
          <div className="d-flex flex-column gap-2">
            <div className="city-card p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="fw-medium mb-1">New York</p>
                  <p className="small text-muted-light mb-0">Clear sky</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <Sun size={24} className="text-blue weather-icon" />
                  <span className="temperature-medium">14°</span>
                </div>
              </div>
            </div>
            
            <div className="city-card p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="fw-medium mb-1">Copenhagen</p>
                  <p className="small text-muted-light mb-0">Snow</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <CloudSnow size={24} className="text-blue weather-icon" />
                  <span className="temperature-medium">0°</span>
                </div>
              </div>
            </div>
            
            <div className="city-card p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="fw-medium mb-1">Ho Chi Minh City</p>
                  <p className="small text-muted-light mb-0">Thunderstorm</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <CloudRain size={24} className="text-blue weather-icon" />
                  <span className="temperature-medium">28°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

