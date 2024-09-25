import React from "react";

export default function MainForecast({ city, currentForecast }) {
	return (
		<div className="flex justify-between items-center text-white p-6 bg-[var(--blue)] rounded-md">
			<div className="flex flex-col">
				<h3 className="text-2xl font-bold mb-2">
					{city} (<span>{currentForecast.date}</span>)
				</h3>
				<div className="mb-2">
					Temperature: {currentForecast.temperature}&deg;C
				</div>
				<div className="mb-2">Wind: {currentForecast.wind} M/S</div>
				<div className="mb-2">Humility: {currentForecast.humidity}</div>
			</div>
			<div className="flex flex-col px-8">
				<div className="flex justify-center">
					<img
						src={`https:${currentForecast.condition.icon}`}
						alt={currentForecast.condition.text}
						width={64}
						height={64}
					/>
				</div>
				<div>{currentForecast.condition.text}</div>
			</div>
		</div>
	);
}
