const WeatherNow = async (city) => {
	cityName.innerHTML = city;
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '727a08b94bmshc9185795f1dbe4dp1a5a90jsn15c1c89af726',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = eval("Text = " + await response.text());
		console.log(result);
		Cloud_pct.innerHTML = result.cloud_pct;
		Temp.innerHTML = result.temp + "&deg;C";
		Feels_like.innerHTML = result.feels_like + "&deg;C";
		Humidity.innerHTML = result.humidity + "%";
		Min_temp.innerHTML = result.min_temp + "&deg;C";
		Max_temp.innerHTML = result.max_temp + "&deg;C";
		Wind_speed.innerHTML = result.wind_speed + " km/h";
		Wind_degrees.innerHTML = result.wind_degrees + "&deg;";
		var setDate = new Date(result.sunrise * 1000);
		Sunrise.innerHTML = setDate.getHours() + ' : ' + setDate.getMinutes() + ' : ' + setDate.getSeconds();
		setDate = new Date(result.sunset * 1000);
		Sunset.innerHTML = setDate.getHours() + ' : ' + setDate.getMinutes() + ' : ' + setDate.getSeconds();
	} catch (error) {
		console.error(error);
	}
}

ok.addEventListener('click', (e) => {
	e.preventDefault();
	WeatherNow(Search.value);
})
WeatherNow("Delhi");