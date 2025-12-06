import { cityDatalist } from "./index.js";
import { cities } from "./utils/allCities.js";

export const populateCities = () =>
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.innerHTML = city;
    cityDatalist.appendChild(option);
  });
