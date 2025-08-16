module.exports = {
	apps: [
		{
			name: "weather-forecast-app",
			script: "serve",
			args: "-s build --listen 3000",
			env: {
				NODE_ENV: "production",
			},
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: "1G",
		},
	],
};
