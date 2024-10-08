import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(BASE_URL);

export let endpoints = {
	forecastData: (city) => `/weathers/${city}/`,
};
export default axios.create({
	baseURL: BASE_URL,
});
