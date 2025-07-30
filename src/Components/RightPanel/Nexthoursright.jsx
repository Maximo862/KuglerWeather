import { Hourlycardright } from "./Nexthourscardright";
import { DefineIcon, Kevintocelsius, Hour } from "../../Utils/Utils.jsx";
import { useContext } from "react";
import { Weathercontext } from "../../Context/Context.jsx";

export function Nexthoursright() {
  const { datarightpanel, celsiustoF } = useContext(Weathercontext);

  const nexthours = Array.from({ length: 6 }, (c, i) => {
    const index = i + 1;
    if (datarightpanel && datarightpanel.list[0]) {
      return {
        hour: Hour(datarightpanel, index),
        icon: DefineIcon(datarightpanel.list[index].weather[0].description, 20),
        temp: Kevintocelsius(datarightpanel.list[index].main.temp, celsiustoF),
      };
    }
  });

  return (
    <div className="row g-2 mb-4">
      {nexthours.map((c, i) => (
        <Hourlycardright key={i} hour={c.hour} icon={c.icon} temp={c.temp} />
      ))}
    </div>
  );
}
