import React from 'react'
import { Cloud} from "lucide-react";

export function NextDaysCard() {
 
    return (
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
                <div className="progress-custom" style={{ width: "100px" }}>
                  <div
                    className="progress-bar-custom"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="text-end">
                  <span className="fw-medium">-1°</span>
                  <span className="text-muted-light ms-2">-4°</span>
                </div>
              </div>
            </div>
          </div>
  )
}
