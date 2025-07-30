import { CenterPanel } from "../Components/CenterPanel/CenterPanel";
import { LeftPanel } from "../Components/LeftPanel/LeftPanel";
import { RightPanel } from "../Components/RightPanel/RightPanel";
import { Weathercontext } from "../Context/Context";
import { useContext } from "react";

export function Weatherapp() {


const {citysfetch, data5days, datarightpanel } = useContext(Weathercontext)

  return (
    <div className="container-fluid p-4" style={{ minHeight: "100vh" }}>
         {citysfetch && citysfetch[2].list[0] && data5days && data5days.list[0] && datarightpanel && datarightpanel.list[0] && (
          <div className="row g-4 h-100">
        <LeftPanel/>
        <CenterPanel/>
        <RightPanel/>
        </div>
         )}
    </div>
  )
}

