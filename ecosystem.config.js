module.exports = {
	apps: [
		{
			name: "my-app",
			script: "server.js",
			env: {
				NODE_ENV: "production",
				REACT_APP_BASE_URL: "http://localhost:8000",
			},
		},
	],
};
