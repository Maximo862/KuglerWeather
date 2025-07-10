import { CenterPanel } from "./Components/CenterPanel";

function App() {
  return (
    <div className="container-fluid p-4" style={{ minHeight: "100vh" }}>
      <div className="row g-4 h-100">
        <CenterPanel />
      </div>
    </div>
  );
}

export default App;
