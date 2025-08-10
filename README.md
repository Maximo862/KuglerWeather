# 🌤️ Weather App - devChallenges.io

Weather forecast app created as part of a challenge on [devChallenges.io](https://devchallenges.io/challenge/weather-app). It allows users to search for any city and get a 5-day, hourly weather forecast, with additional data such as wind, humidity, and more.

## 🚀 Features

- Search weather by city
- Shows temperature, weather description, humidity, visibility, wind speed
- Toggle between Celsius and Fahrenheit
- 5-day forecast panel with average, minimum, maximum temperature and description
- Responsive design using Bootstrap
- Additional cities quick-view panel
- "About Me" section with contact links

## 🔧 Technologies Used

- React
- Bootstrap 5
- OpenWeatherMap API
- Day.js
- Lucide Icons
- React Router

## 🧠 What I Learned

The original API suggested in the challenge was paid, so I used OpenWeatherMap.
This required additional logic, such as:

- Parsing multiple inputs per day and calculating daily averages, minimum, and maximum temperatures using for loops
- Extracting and formatting dates with dayjs
- Custom context logic to handle multi-panel temperature units
- Creating a reusable search bar and multiple weather cards
- Handle the temperature unit (°C / °F) on several different components
