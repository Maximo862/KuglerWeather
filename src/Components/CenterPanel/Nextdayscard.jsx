export function Nextdayscard({
  day,
  description,
  icon,
  temp,
  temp_min,
  temp_max,
}) {
  return (
    <div className="forecast-item p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          {icon}
          <div>
            <p className="fw-medium mb-1">{day}</p>
            <p className="small text-muted-light mb-0">{description}</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-4">
          <span className="fw-medium">{temp}°</span>
          <div className="progress-custom" style={{ width: "100px" }}>
            <div className="progress-bar-custom" style={{ width: "80%" }}></div>
          </div>
          <div className="text-end">
            <span className="fw-medium">{temp_min}°</span>
            <span className="text-muted-light ms-2">{temp_max}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
