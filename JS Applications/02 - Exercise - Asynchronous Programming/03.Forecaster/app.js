function attachEvents() {
    const locationInput = document.getElementById('location');
    const forecastSection = document.getElementById('forecast');
    const currentWeather = document.getElementById('current');
    const upcomingWeather = document.getElementById('upcoming');

    let getWeatherBtn = document.getElementById('submit');

    getWeatherBtn.addEventListener('click', getWeather);

    let forecastsDiv = elementFactory('div', '', currentWeather, { class: 'forecasts' });
    let futureForecast = elementFactory('div', '', upcomingWeather, { class: 'forecast-info' });
    
    async function getWeather() {

        forecastsDiv.innerHTML = '';
        futureForecast.innerHTML = '';

        let location = locationInput.value;

        let url = `http://localhost:3030/jsonstore/forecaster/locations`;

        let locationCode = ''

        let allLocations = await fetch(url);
        forecastSection.style.display = '';

        if (allLocations.status !== 200) {  // error handling
            throw new Error('error')
        }

        let allLocationsData = await allLocations.json();

        allLocationsData.forEach(element => {
            if (element.name == location) {
                locationCode = element.code;
            }
        });

        if (locationCode == '') { // error handling
            throw new Error('error')
        }

        let currentConditionURL = `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`;

        let todayForecast = await fetch(currentConditionURL);
        let todayForecastData = await todayForecast.json();

        // current condition div
        let conditionSymbol = elementFactory('span', '', forecastsDiv, { class: 'condition symbol' });

        switch (todayForecastData.forecast.condition) { // weather icons generator
            case 'Sunny': conditionSymbol.innerHTML = '&#x2600'; break;
            case 'Partly sunny': conditionSymbol.innerHTML = '&#x26C5'; break;
            case 'Overcast': conditionSymbol.innerHTML = '&#x2601'; break;
            case 'Rain': conditionSymbol.innerHTML = '&#x2614'; break;
        }

        let conditionSpan = elementFactory('span', '', forecastsDiv, { class: 'condition' });
        let city = elementFactory('span', `${todayForecastData.name}`, conditionSpan, { class: 'forecast-data' });
        let degrees = elementFactory('span', '', conditionSpan, { class: 'forecast-data' });
        degrees.innerHTML = `${todayForecastData.forecast.low}&#176/${todayForecastData.forecast.high}&#176`; // space ?
        let condition = elementFactory('span', `${todayForecastData.forecast.condition}`, conditionSpan, { class: 'forecast-data' });

        // upcoming
        let upcomingForecast = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`);
        let upcomingData = await upcomingForecast.json();

        //day one
        let upcomingSpan0 = elementFactory('span', '', futureForecast, { class: 'upcoming' });
        let symbol0 = elementFactory('span', '', upcomingSpan0, { class: 'symbol' });
        switch (upcomingData.forecast[0].condition) { // weather icons generator
            case 'Sunny': symbol0.innerHTML = '&#x2600'; break;
            case 'Partly sunny': symbol0.innerHTML = '&#x26C5'; break;
            case 'Overcast': symbol0.innerHTML = '&#x2601'; break;
            case 'Rain': symbol0.innerHTML = '&#x2614'; break;
        }
        let temp0 = elementFactory('span', '', upcomingSpan0, { class: 'forecast-data' });
        temp0.innerHTML = `${upcomingData.forecast[0].low}&#176/${upcomingData.forecast[0].high}&#176`;
        let weather0 = elementFactory('span', `${upcomingData.forecast[0].condition}`, upcomingSpan0, { class: 'forecast-data' });

        //day two
        let upcomingSpan1 = elementFactory('span', '', futureForecast, { class: 'upcoming' });
        let symbol1 = elementFactory('span', '', upcomingSpan1, { class: 'symbol' });
        switch (upcomingData.forecast[1].condition) { // weather icons generator
            case 'Sunny': symbol1.innerHTML = '&#x2600'; break;
            case 'Partly sunny': symbol1.innerHTML = '&#x26C5'; break;
            case 'Overcast': symbol1.innerHTML = '&#x2601'; break;
            case 'Rain': symbol1.innerHTML = '&#x2614'; break;
        }
        let temp1 = elementFactory('span', '', upcomingSpan1, { class: 'forecast-data' });
        temp1.innerHTML = `${upcomingData.forecast[1].low}&#176/${upcomingData.forecast[1].high}&#176`;
        let weather1 = elementFactory('span', `${upcomingData.forecast[1].condition}`, upcomingSpan1, { class: 'forecast-data' });

        // day three
        let upcomingSpan2 = elementFactory('span', '', futureForecast, { class: 'upcoming' });
        let symbol2 = elementFactory('span', '', upcomingSpan2, { class: 'symbol' });
        switch (upcomingData.forecast[2].condition) { // weather icons generator
            case 'Sunny': symbol2.innerHTML = '&#x2600'; break;
            case 'Partly sunny': symbol2.innerHTML = '&#x26C5'; break;
            case 'Overcast': symbol2.innerHTML = '&#x2601'; break;
            case 'Rain': symbol2.innerHTML = '&#x2614'; break;
        }
        let temp2 = elementFactory('span', '', upcomingSpan2, { class: 'forecast-data' });
        temp2.innerHTML = `${upcomingData.forecast[2].low}&#176/${upcomingData.forecast[2].high}&#176`;
        let weather2 = elementFactory('span', `${upcomingData.forecast[2].condition}`, upcomingSpan2, { class: 'forecast-data' });
    }

    function elementFactory(type, content, parent, attributes) {
        let el = document.createElement(type);
        el.textContent = content;

        if (attributes) {
            for (const key in attributes) {
                el.setAttribute(key, attributes[key])
            }
        };

        if (parent) {
            parent.appendChild(el)
        };
        return el
    }
}

attachEvents();