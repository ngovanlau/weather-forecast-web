import { configureStore } from "@reduxjs/toolkit";
import forecastDataReducer from "./slices/forecast-data-slice";

const store = configureStore({
	reducer: {
		forecastData: forecastDataReducer,
	},
});

export default store;
