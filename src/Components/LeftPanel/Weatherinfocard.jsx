export function Weatherinfocard({ Icon, value }) {
  return (
    <div className="col-6">
      <div className="d-flex align-items-center">
        <Icon size={16} className="me-2 text-muted-light" />
        <span className="small">{value}</span>
      </div>
    </div>
  );
}
