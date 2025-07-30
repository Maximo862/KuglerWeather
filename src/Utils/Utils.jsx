import {
  Sun,
  CloudRain,
  CloudSnow,
  Cloud,
  CloudLightning,
  CloudDrizzle,
  CloudAlert,
} from "lucide-react";




export function Hour(data, index) {
  const info = data.list[index].dt_txt;
  const hour = info.split(" ")[1].slice(0, 5);
  if (parseInt(hour) > 12) {
    const ampm = " PM";
    return hour + ampm;
  }
  const ampm = " AM";
  return hour + ampm;
}

export function Kevintocelsius(kevin, celsiustoF) {
  const Celsius = (kevin - 273.15);
  if (celsiustoF === false) return Math.round(Celsius)
  const Farenheit = (Celsius * 9 / 5) + 32; 
  return Math.round(Farenheit);
}

export function Average(array, start, end) {
  if (!array || !array.list) return;
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += array.list[i].main.temp;
  }
  return sum / 8;
}

export function Min(array, start, end) {
  if (!array || !array.list) return;
  let sum = 0;
  let min = 999999999; 
  for (let i = start; i < end; i++) {
    sum = array.list[i].main.temp_min;
    if (sum < min) {
      min = sum
    }
  }
  return min;
}

export function Max(array, start, end) {
  if (!array || !array.list) return;
  let sum = 0;
  let max = 0;
  for (let i = start; i < end; i++) {
    sum = array.list[i].main.temp_max;
    if (sum > max) {
      max = sum
    }
  }
  return max;
}

export function DefineIcon(description, size) {
  if (description.includes("clear"))
    return <Sun size={size} className="text-blue weather-icon" />;
  if (description.includes("clouds"))
    return <Cloud size={size} className="text-blue weather-icon" />;
  if (description.includes("rain"))
    return <CloudRain size={size} className="text-blue weather-icon" />;
  if (description.includes("light drizzle"))
    return <CloudDrizzle size={size} className="text-blue weather-icon" />;
  if (description.includes("thunderstorm"))
    return <CloudLightning size={size} className="text-blue weather-icon" />;
  if (description.includes("snow"))
    return <CloudSnow size={size} className="text-blue weather-icon" />;
  if (description.includes("tornado") || description.includes("dust or sand"))
    return <CloudAlert size={size} className="text-blue weather-icon" />;
}

export function Handlesubmit(e, inputvalue, setcity) {
  e.preventDefault();
  if (inputvalue.trim()) {
    setcity(inputvalue);
  }
}
