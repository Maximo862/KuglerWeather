import { CenterPanel } from "./Components/CenterPanel/CenterPanel";
import { LeftPanel } from "./Components/LeftPanel/LeftPanel";
import { RightPanel } from "./Components/RightPanel/RightPanel";

function App() {
  return (
    <div className="container-fluid p-4" style={{ minHeight: "100vh" }}>
      <div className="row g-4 h-100">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
//COSAS PARA HACER: 
// 1 FUNCION DE RETORNAR GRADOS, DESCRIPCIONES Y TAL EN VEZ DE HACER DATA.LIST[0].WEATHER... 
// 2 agregar nav y footer 