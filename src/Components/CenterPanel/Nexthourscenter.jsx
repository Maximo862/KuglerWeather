import { useContext } from "react";
import { Weathercontext } from "../../Context/Context.jsx";
import { DefineIcon, Kevintocelsius, Hour } from "../../Utils/Utils.jsx";
import { Nexthourscentercard } from "./Nexthourscentercard.jsx";

export function Nexthourscenter() {
  const { data5days, celsiustoF, setCelsiustoF } = useContext(Weathercontext);

  const nexthours = Array.from({ length: 8 }, (c, i) => {
    const index = i + 1;
    return {
      hour: Hour(data5days, index),
      icon: DefineIcon(data5days.list[index].weather[0].description, 20),
      temp: Kevintocelsius(data5days.list[index].main.temp, celsiustoF),
    };
  });

  return (
    <section>
      <div className="hourly-timeline mb-4">
        <div className="row g-2 mb-4">
          {nexthours.map((c, i) => (
            <Nexthourscentercard
              key={i}
              hour={c.hour}
              icon={c.icon}
              temp={c.temp}
            />
          ))}
        </div>

        <button className="Button-animation mb-4 w-100" onClick={() => setCelsiustoF(!celsiustoF)}>Celsius to Farenheit</button>
      </div>
    </section>
  );
}
