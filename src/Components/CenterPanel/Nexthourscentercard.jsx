export function Nexthourscentercard({ hour, icon, temp }) {
  return (
    <div className="col hourly-item">
      <p className="small text-muted-light mb-2">{hour}</p>
      {icon}
      <p className="small fw-medium mb-0">{temp}°</p>
    </div>
  );
}
