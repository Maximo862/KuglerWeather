import { Weathercontext } from "../../Context/Context";
import { Othercitiescard } from "./Othercitiescard";
import { useContext } from "react";
import { Kevintocelsius, DefineIcon} from "../../Utils/Utils";

export function Othercities() {
  
const { citysfetch, celsiustoF } = useContext(Weathercontext)
  
    return (
    
            <div className="glass-card p-4">
              <h3 className="h5 fw-semibold mb-3">Other large cities</h3>
              <div className="d-flex flex-column gap-2">
                {citysfetch.map((c, i) => (
                  <Othercitiescard
                    key={i}
                    city={c.city.name}
                    description={c.list[0].weather[0].description}
                    Icon={DefineIcon(c.list[0].weather[0].description, 24)}
                    temp={Kevintocelsius(c.list[0].main.temp_min, celsiustoF)}
                  />
                ))}
              </div>
            </div>
  )
}

