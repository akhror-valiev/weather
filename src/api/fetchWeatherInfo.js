import axios from "axios";

const API_Key = process.env.REACT_APP_API_KEY;
const URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherInfo = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			unit: "metric",
			APPID: API_Key,
		},
	});

	return data;
};
