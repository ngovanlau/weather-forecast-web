import React from "react";

export default function SecondaryForecast({ forecast }) {
	return (
		<div className="flex flex-col text-white p-6 bg-[var(--grey)] rounded-md">
			<div className="flex flex-col">
				<div className="font-bold mb-2">{forecast.date}</div>
				<img
					src={`https:${forecast.condition.icon}`}
					alt={forecast.condition.text}
					width={64}
					height={64}
				/>
				<div className="mb-2">Temperature: {forecast.temperature}&deg;C</div>
				<div className="mb-2">Wind: {forecast.wind} M/S</div>
				<div className="mb-2">Humility: {forecast.humidity}%</div>
			</div>
		</div>
	);
}
