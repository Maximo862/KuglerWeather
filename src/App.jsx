import { CenterPanel } from "./Components/CenterPanel"
import { LeftPanel } from "./Components/LeftPanel";
import { RightPanel } from "./Components/RightPanel";
import { Sun, Cloud, CloudRain, CloudSnow, CloudDrizzle, CloudLightning, CloudAlert } from "lucide-react";


export function Kevintocelsius(kevin) {
  return (kevin - 273.15).toFixed()
}

export function Average(array, start, end) {
  if (!array || !array.list) return ;
  let sum = 0;
  for (let i = start; i < end; i++) {
sum += array.list[i].main.temp
 }
 return sum / 8
}

export function Min(array, start, end) {
  if (!array || !array.list) return ;
  let sum = 0;
  for (let i = start; i < end; i++) {
sum += array.list[i].main.temp_min
 }
 return sum / 8
}

export function Max(array, start, end) {
  if (!array || !array.list) return ;
  let sum = 0;
  for (let i = start; i < end; i++) {
sum += array.list[i].main.temp_max
 }
 return sum / 8
}

export function DefineIcon(description) {
  if (description.includes("clear")) return <Sun size={16} className="me-1" />
    if (description.includes("clouds"))return <Cloud size={16} className="me-1" />
    if (description.includes("light rain"))return <CloudRain size={16} className="me-1" />
    if (description.includes("light drizzle")) return <CloudDrizzle size={16} className="me-1" />
    if (description.includes("thunderstorm")) return <CloudLightning size={16} className="me-1" />
    if (description.includes("snow")) return <CloudSnow size={16} className="me-1" />
    if (description.includes("tornado") || description.includes("dust or sand")) return <CloudAlert size={16} className="me-1" />
}

function App() {


  return (
    <div className="container-fluid p-4" style={{ minHeight: "100vh" }}>
      <div className="row g-4 h-100">
        <LeftPanel/>
        <CenterPanel />
        <RightPanel/>
      </div>
    </div>
  );
}

export default App;
