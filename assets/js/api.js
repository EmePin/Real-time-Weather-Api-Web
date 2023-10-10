/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright Aimée Pineda & codewithsadee  2023 All rights reserved
 * @author Aimée Pineda & codewithsadee 
 */

'use strict';
const api_key = "process.env.OPEN_WEATHER_MAP_KEY";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback 
 */

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data))
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },
    /**
     * 
     * @param {string} query Search query e.g.:"London","New York"
     */
    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    }
}
//http://127.0.0.1:5500/#/weather?lat=23.7644025&lon=90.389015
