import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/header";
import CitySearch from "./components/city-search";
import MainForecast from "./components/main-forecast";
import SecondaryForecast from "./components/secondary-forecast";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import api, { endpoints } from "./configs/api";
import {
	setCity,
	setCurrentForecast,
	setForecasts,
	setTotalPage,
} from "./lib/slices/forecast-data-slice";

function App() {
	const forecastData = useSelector((state) => state.forecastData.forecastData);
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);

	const loadData = async (city, page) => {
		try {
			let url;
			if (page != null) {
				url = `${endpoints["forecastData"](city)}?page=${page}`;
			} else {
				url = `${endpoints["forecastData"](city)}`;
			}

			let res = await api.get(url);
			dispatch(setCity(res.data.city || ""));
			dispatch(setCurrentForecast(res.data.current_forecast || {}));
			dispatch(setForecasts(res.data.forecasts || []));
			dispatch(setTotalPage(res.data.total_page || 0));
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		loadData("Ho Chi Minh City");
	}, []);

	const handleChangePage = (e, value) => {
		setPage(value);
		loadData(forecastData.city, value);
	};

	return (
		<div className="App">
			<Header />
			<div className="grid grid-cols-3 gap-8 px-8 mt-12">
				<div>
					<CitySearch setPage={setPage} />
				</div>
				<div className="col-span-2">
					{forecastData.city !== "" &&
					forecastData.currentForecast !== undefined ? (
						<MainForecast
							city={forecastData.city}
							currentForecast={forecastData.currentForecast}
						/>
					) : (
						<div>No forecast data available</div>
					)}

					<h2 className="text-2xl font-bold my-4">4-Day Forecast</h2>
					<div className="grid grid-cols-4 gap-6">
						{forecastData?.forecasts.map((forecast) => (
							<SecondaryForecast key={Math.random()} forecast={forecast} />
						))}
					</div>
					<div className="flex justify-center mt-8">
						<Pagination
							count={forecastData.totalPage}
							shape="rounded"
							variant="outlined"
							color="primary"
							onChange={handleChangePage}
							page={page}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
