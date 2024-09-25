import { createSlice } from "@reduxjs/toolkit";

const forecastDataSlice = createSlice({
	name: "forecastData",
	initialState: {
		forecastData: {
			city: "",
			currentForecast: {},
			forecasts: [],
			totalPage: 1,
		},
	},
	reducers: {
		setCity(state, action) {
			state.forecastData.city = action.payload;
		},
		setCurrentForecast(state, action) {
			state.forecastData.currentForecast = action.payload;
		},
		setForecasts(state, action) {
			state.forecastData.forecasts = action.payload;
		},
		setTotalPage(state, action) {
			state.forecastData.totalPage = action.payload;
		},
	},
});

export const { setCity, setCurrentForecast, setForecasts, setTotalPage } =
	forecastDataSlice.actions;

export default forecastDataSlice.reducer;
