FROM node:20.9.0

WORKDIR /weather-forecast-web/
COPY src/ /weather-forecast-web/src
COPY public/ /weather-forecast-web/public
COPY package.json /weather-forecast-web/
COPY package-lock.json /weather-forecast-web/
COPY postcss.config.js /weather-forecast-web/
COPY tailwind.config.js /weather-forecast-web/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]