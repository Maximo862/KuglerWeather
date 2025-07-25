import { useState, useEffect, createContext } from "react";

export const Weathercontext = createContext();

export function Weatherprovider({ children }) {
  const [city1, setCity1] = useState("miami");
  const [data5days, setData5days] = useState(null);
  const [city2, setcity2] = useState("Helsinki");
  const [datarightpanel, setdatarightpanel] = useState(null);
  const citys = ["New York", "Buenos Aires", "Bahia Blanca"];
  const [citysfetch, setCitysfetch] = useState(null);

  const date = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };

  const actuallydate = date.toLocaleDateString("es-ES", options);

  useEffect(() => {
    if (!city1) {
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city1}&appid=806afa2c328b56fdfcd6e19402bf927d`
    )
      .then((res) => res.json())
      .then((data) => {
        setData5days(data);
      })

      .catch((err) => {
        console.log("El error es: ", err);
      });
  }, [city1]);

  //Second FETCH

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city2}&appid=806afa2c328b56fdfcd6e19402bf927d`
    )
      .then((res) => res.json())
      .then((data) => {
        setdatarightpanel(data);
        console.log(data);
      })

      .catch((err) => {
        console.log("Error del segundo fetch: ", err);
      });
  }, [city2]);

  //3 Fetch at the same time
  useEffect(() => {
    async function Fetchs() {
      const result = await Promise.all(
        citys.map(async (c) => {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${c}&appid=806afa2c328b56fdfcd6e19402bf927d`
          );
          return await res.json();
        })
      );
      setCitysfetch(result);
    }
    Fetchs();
  }, []);

  return (
    <Weathercontext.Provider
      value={{
        data5days,
        setCity1,
        actuallydate,
        setcity2,
        datarightpanel,
        citysfetch,
      }}
    >
      {children}
    </Weathercontext.Provider>
  );
}
