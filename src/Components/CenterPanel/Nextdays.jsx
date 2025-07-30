import { useContext } from "react";
import {
  Average,
  Kevintocelsius,
  Min,
  Max,
  DefineIcon,
} from "../../Utils/Utils.jsx";
import { Weathercontext } from "../../Context/Context.jsx";
import { Nextdayscard } from "./Nextdayscard.jsx";
import dayjs from "dayjs";

export function Nextdays() {
  const { data5days, celsiustoF } = useContext(Weathercontext);

  const nextdays = Array.from({ length: 5 }, (d, i) => {
    const day = data5days.list[i * 8];
    const start = i * 8;
    const end = start + 8;
    const indexdaydate = i + 1;

    return {
      day: dayjs().add(indexdaydate, "day").format("dddd"),
      description: day.weather[0].description,
      icon: DefineIcon(day.weather[0].description, 24),
      temp: Kevintocelsius(Average(data5days, start, end), celsiustoF),
      tempmin: Kevintocelsius(Min(data5days, start, end),celsiustoF),
      tempmax: Kevintocelsius(Max(data5days, start, end), celsiustoF),
    };
  });

  return (
    <div className="d-flex flex-column gap-2">
      {nextdays.map((c, i) => (
        <Nextdayscard
          key={i}
          day={c.day}
          description={c.description}
          icon={c.icon}
          temp={c.temp}
          temp_min={c.tempmin}
          temp_max={c.tempmax}
        />
      ))}
    </div>
  );
}
