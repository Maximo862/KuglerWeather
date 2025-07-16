import React from 'react';
import { MapPin, Search, Sun, Cloud, CloudRain, CloudSnow, Wind, Eye, Droplets, Thermometer } from 'lucide-react';

export function RightPanel() {
  return (
    <div className="col-lg-3">
      <div className="d-flex flex-column gap-4 h-100">
        
      
         <div className="position-relative">
                  <Search className="position-absolute top-50 translate-middle-y ms-3 text-muted-light" size={20} />
                  <input
                    type="text"
                    placeholder="Search city..."
                    className="form-control search-input"
                  />
                </div>

        {/* Detailed Weather */}
        <div className="glass-card p-4 flex-grow-1">
          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
              <h2 className="h3 fw-bold mb-1">Helsinki</h2>
              <p className="text-muted-light mb-0 d-flex align-items-center">
                <MapPin size={16} className="me-1" />
                Finland
              </p>
            </div>
            <CloudSnow size={48} className="text-blue weather-icon" />
          </div>
          
          <div className="temperature-large mb-2">-1°</div>
          <p className="text-muted-light mb-4">Mostly Cloudy</p>
          
          {/* Detailed Hourly */}
          <div className="row g-2 mb-4">
            <div className="col-4">
              <div className="glass-card-sm p-2 text-center">
                <p className="small text-muted-light mb-1">9:00 AM</p>
                <CloudSnow size={16} className="d-block mx-auto mb-1 text-blue weather-icon" />
                <p className="small fw-medium mb-0">-1°</p>
              </div>
            </div>
            <div className="col-4">
              <div className="glass-card-sm p-2 text-center">
                <p className="small text-muted-light mb-1">12:00 PM</p>
                <Cloud size={16} className="d-block mx-auto mb-1 text-blue weather-icon" />
                <p className="small fw-medium mb-0">0°</p>
              </div>
            </div>
            <div className="col-4">
              <div className="glass-card-sm p-2 text-center">
                <p className="small text-muted-light mb-1">3:00 PM</p>
                <CloudRain size={16} className="d-block mx-auto mb-1 text-blue weather-icon" />
                <p className="small fw-medium mb-0">1°</p>
              </div>
            </div>
            <div className="col-4">
              <div className="glass-card-sm p-2 text-center">
                <p className="small text-muted-light mb-1">6:00 PM</p>
                <Sun size={16} className="d-block mx-auto mb-1 text-blue weather-icon" />
                <p className="small fw-medium mb-0">3°</p>
              </div>
            </div>
            <div className="col-4">
              <div className="glass-card-sm p-2 text-center">
                <p className="small text-muted-light mb-1">9:00 PM</p>
                <Sun size={16} className="d-block mx-auto mb-1 text-blue weather-icon" />
                <p className="small fw-medium mb-0">2°</p>
              </div>
            </div>
            <div className="col-4">
              <div className="glass-card-sm p-2 text-center">
                <p className="small text-muted-light mb-1">12:00 AM</p>
                <CloudRain size={16} className="d-block mx-auto mb-1 text-blue weather-icon" />
                <p className="small fw-medium mb-0">1°</p>
              </div>
            </div>
          </div>

          {/* Weather Stats */}
          <div className="row g-3">
            <div className="col-6">
              <div className="weather-stat">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Wind size={20} className="text-muted-light" />
                  <span className="small text-muted-light">Wind</span>
                </div>
                <p className="temperature-medium mb-0">8.1km/h</p>
              </div>
            </div>
            <div className="col-6">
              <div className="weather-stat">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Droplets size={20} className="text-muted-light" />
                  <span className="small text-muted-light">Humidity</span>
                </div>
                <p className="temperature-medium mb-0">84%</p>
              </div>
            </div>
            <div className="col-6">
              <div className="weather-stat">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Eye size={20} className="text-muted-light" />
                  <span className="small text-muted-light">Visibility</span>
                </div>
                <p className="temperature-medium mb-0">10km</p>
              </div>
            </div>
            <div className="col-6">
              <div className="weather-stat">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Thermometer size={20} className="text-muted-light" />
                  <span className="small text-muted-light">Feels like</span>
                </div>
                <p className="temperature-medium mb-0">-1°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
