import moment from "moment";

export const kelvinToCelsius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};
export const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
};
export const unixToDay = (unix: number) => {
  return moment.unix(unix).format("dddd");
};
export const unixToTime = (unix: number, timezone: number) => {
  return moment
    .unix(unix)
    .utcOffset(timezone / 60)
    .format("HH:mm");
};
export const airQualityIndexText = [
  {
    rating: 10,
    description: "Excellent",
  },
  {
    rating: 20,
    description: "Good",
  },
  {
    rating: 30,
    description: "Satisfactory",
  },
  {
    rating: 40,
    description: "Fair",
  },
  {
    rating: 50,
    description: "Moderate",
  },
  {
    rating: 60,
    description: "Moderate",
  },
  {
    rating: 70,
    description: "Poor",
  },
  {
    rating: 80,
    description: "Poor",
  },
  {
    rating: 90,
    description: "Very Poor",
  },
  {
    rating: 100,
    description: "Very Poor",
  },
];
