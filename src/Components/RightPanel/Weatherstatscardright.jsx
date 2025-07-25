export function Weatherstatscardright({ Icon, name, value }) {
  return (
    <div className="col-6">
      <div className="weather-stat">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Icon size={20} className="text-muted-light" />
          <span className="small text-muted-light">{name}</span>
        </div>
        <p className="temperature-medium mb-0">{value}</p>
      </div>
    </div>
  );
}
