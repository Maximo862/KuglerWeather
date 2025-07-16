import {useContext, useState} from "react";
import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react";
import { Average, Kevintocelsius, Min, Max } from "../App";
import { Weathercontext } from "../Context/Context";


export function CenterPanel() {
  
const { data5days } = useContext(Weathercontext)
  
  return (
    <div className="col-lg-6">
      <div className="glass-card p-4 h-100">
       
        <div className="hourly-timeline mb-4">
          <div className="row g-2 mb-4">
            <div className="col hourly-item">
              <p className="small text-muted-light mb-2">6:00 AM</p>
              <CloudSnow
                size={20}
                className="d-block mx-auto mb-2 text-blue weather-icon"
              />
              <p className="small fw-medium mb-0">-1°</p>
            </div>
            <div className="col hourly-item">
              <p className="small text-muted-light mb-2">12:00 PM</p>
              <Cloud
                size={20}
                className="d-block mx-auto mb-2 text-blue weather-icon"
              />
              <p className="small fw-medium mb-0">0°</p>
            </div>
            <div className="col hourly-item">
              <p className="small text-muted-light mb-2">3:00 PM</p>
              <CloudRain
                size={20}
                className="d-block mx-auto mb-2 text-blue weather-icon"
              />
              <p className="small fw-medium mb-0">1°</p>
            </div>
            <div className="col hourly-item">
              <p className="small text-muted-light mb-2">6:00 PM</p>
              <Sun
                size={20}
                className="d-block mx-auto mb-2 text-blue weather-icon"
              />
              <p className="small fw-medium mb-0">3°</p>
            </div>
            <div className="col hourly-item">
              <p className="small text-muted-light mb-2">9:00 PM</p>
              <Sun
                size={20}
                className="d-block mx-auto mb-2 text-blue weather-icon"
              />
              <p className="small fw-medium mb-0">2°</p>
            </div>
            <div className="col hourly-item">
              <p className="small text-muted-light mb-2">12:00 AM</p>
              <CloudRain
                size={20}
                className="d-block mx-auto mb-2 text-blue weather-icon"
              />
              <p className="small fw-medium mb-0">1°</p>
            </div>
            <div className="col hourly-item">
              <p className="small text-muted-light mb-2">3:00 AM</p>
              <Cloud
                size={20}
                className="d-block mx-auto mb-2 text-blue weather-icon"
              />
              <p className="small fw-medium mb-0">1°</p>
            </div>
            <div className="col hourly-item">
              <p className="small text-muted-light mb-2">6:00 AM</p>
              <Cloud
                size={20}
                className="d-block mx-auto mb-2 text-blue weather-icon"
              />
              <p className="small fw-medium mb-0">0°</p>
            </div>
          </div>

          <div className="temperature-graph mb-4"></div>
        </div>

 <h3 className="h5 fw-semibold mb-4">5-day forecast</h3>
        <div className="d-flex flex-column gap-2">
          <div className="forecast-item p-3 active">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <Cloud size={24} className="text-blue weather-icon" />
                <div>
                  <p className="fw-medium mb-1">Today</p>
                  <p className="small text-muted-light mb-0">Cloudy</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                  <span className="fw-medium">{Kevintocelsius(Average(data5days,0,8))}°</span>
                <div className="progress-custom" style={{ width: "100px" }}>
                  <div
                    className="progress-bar-custom"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="text-end">
                  <span className="fw-medium">{Kevintocelsius(Min(data5days,0,8))}°</span>
                  <span className="text-muted-light ms-2">{Kevintocelsius(Max(data5days,0,8))}°</span>
                </div>
              </div>
            </div>
          </div>

          <div className="forecast-item p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <CloudSnow size={24} className="text-blue weather-icon" />
                <div>
                  <p className="fw-medium mb-1">Fri</p>
                  <p className="small text-muted-light mb-0">Snow</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                     <span className="fw-medium">{Kevintocelsius(Average(data5days,8,16))}°</span>
                <div className="progress-custom" style={{ width: "100px" }}>
                  <div
                    className="progress-bar-custom"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <div className="text-end">
                  <span className="fw-medium">{Kevintocelsius(Min(data5days,8,16))}°</span>
                  <span className="text-muted-light ms-2">{Kevintocelsius(Max(data5days,8,16))}°</span>
                </div>
              </div>
            </div>
          </div>

          <div className="forecast-item p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <Sun size={24} className="text-blue weather-icon" />
                <div>
                  <p className="fw-medium mb-1">Sat</p>
                  <p className="small text-muted-light mb-0">Sunny</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                     <span className="fw-medium">{Kevintocelsius(Average(data5days,16,24))}°</span>
                <div className="progress-custom" style={{ width: "100px" }}>
                  <div
                    className="progress-bar-custom"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <div className="text-end">
                  <span className="fw-medium">{Kevintocelsius(Min(data5days,16,24))}°</span>
                  <span className="text-muted-light ms-2">{Kevintocelsius(Max(data5days,16,24))}°</span>
                </div>
              </div>
            </div>
          </div>

          <div className="forecast-item p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <CloudRain size={24} className="text-blue weather-icon" />
                <div>
                  <p className="fw-medium mb-1">Sun</p>
                  <p className="small text-muted-light mb-0">Rain</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                     <span className="fw-medium">{Kevintocelsius(Average(data5days,24,32))}°</span>
                <div className="progress-custom" style={{ width: "100px" }}>
                  <div
                    className="progress-bar-custom"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <div className="text-end">
                  <span className="fw-medium">{Kevintocelsius(Min(data5days,24,32))}°</span>
                  <span className="text-muted-light ms-2">{Kevintocelsius(Max(data5days,24,32))}°</span>
                </div>
              </div>
            </div>
          </div>

          <div className="forecast-item p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <Cloud size={24} className="text-blue weather-icon" />
                <div>
                  <p className="fw-medium mb-1">Mon</p>
                  <p className="small text-muted-light mb-0">Cloudy</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                     <span className="fw-medium">{Kevintocelsius(Average(data5days,32,40))}°</span>
                <div className="progress-custom" style={{ width: "100px" }}>
                  <div
                    className="progress-bar-custom"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <div className="text-end">
                  <span className="fw-medium">{Kevintocelsius(Min(data5days,32,40))}°</span>
                  <span className="text-muted-light ms-2">{Kevintocelsius(Max(data5days,32,40))}°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
