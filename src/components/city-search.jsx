import React, { useEffect } from "react";
import { Alert, Divider, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setCity,
	setCurrentForecast,
	setForecasts,
	setTotalPage,
} from "../lib/slices/forecast-data-slice";
import api, { endpoints } from "../configs/api";

export default function CitySearch({ setPage }) {
	const [cityName, setCityName] = useState("");
	const dispatch = useDispatch();

	const [state, setState] = useState({
		open: false,
		vertical: "top",
		horizontal: "center",
	});
	const { vertical, horizontal, open } = state;

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	const handleSearch = async () => {
		if (cityName.trim() === "") {
			setState({ ...state, open: true });
			return;
		}

		try {
			setPage(1);
			const res = await api.get(endpoints["forecastData"](cityName));
			dispatch(setCity(res.data.city));
			dispatch(setCurrentForecast(res.data.current_forecast));
			dispatch(setForecasts(res.data.forecasts));
			dispatch(setTotalPage(res.data.total_page));
		} catch (err) {
			console.error("Error fetching forecast data:", err);
		}
	};

	const handleUseCurrentLocation = async () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					fetch(
						`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
					)
						.then((response) => response.json())
						.then((data) => {
							const currentCity =
								data.city || data.locality || data.principalSubdivision;
							setCityName(currentCity);
						})
						.catch((err) =>
							console.error("Error fetching city from coordinates:", err)
						);
				},
				(error) => {
					console.error("Error getting location:", error);
				}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	};

	return (
		<div className="flex flex-col">
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				onClose={handleClose}
				key={vertical + horizontal}
				autoHideDuration={2000}>
				<Alert
					onClose={handleClose}
					severity="error"
					variant="filled"
					sx={{ width: "100%" }}>
					City name has not been entered!
				</Alert>
			</Snackbar>

			<label htmlFor="city-name" className="text-lg mb-1 font-medium">
				Enter a City Name
			</label>
			<input
				value={cityName}
				onChange={(e) => setCityName(e.target.value)}
				type="text"
				placeholder="E.g., New York, London, Tokyo"
				id="city-name"
				className="p-2 rounded border-solid border-2 border-slate-300 outline-0"
			/>
			<button
				className="p-2 my-6 bg-[#5372f0] text-white hover:bg-indigo-500 active:bg-indigo-500 rounded"
				onClick={handleSearch}>
				Search
			</button>
			<Divider className="text-[--grey]">or</Divider>
			<button
				className="p-2 my-6 bg-[var(--grey)] text-white hover:bg-zinc-400 active:bg-zinc-400 rounded"
				onClick={handleUseCurrentLocation}>
				Use Current Location
			</button>
		</div>
	);
}
