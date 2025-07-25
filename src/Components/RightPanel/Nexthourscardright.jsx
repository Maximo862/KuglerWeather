export function Hourlycardright({ hour, icon, temp }) {
  return (
    <div className="col-4">
      <div className="glass-card-sm p-2 text-center">
        <p className="small text-muted-light mb-1">{hour}</p>
        {icon}
        <p className="small fw-medium mb-0">{temp}°</p>
      </div>
    </div>
  );
}
