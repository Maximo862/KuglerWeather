import { Nextdays } from "./Nextdays";
import { Nexthourscenter } from "./Nexthourscenter";

export function CenterPanel() {
  return (
    <div className="col-lg-6">
      <div className="glass-card p-4 h-100">
        <Nexthourscenter />
        <h3 className="h5 fw-semibold mb-4">5-day forecast</h3>
        <Nextdays />
      </div>
    </div>
  );
}
