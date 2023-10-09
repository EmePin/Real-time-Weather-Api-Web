/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright Aimée Pineda & codewithsadee  2023 All rights reserved
 * @author Aimée Pineda & codewithsadee 
 */

'use strict';

import { updateWeather, error404 } from "./app.js";

const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474" //London

const currentLocation = function () {
    window.navigator.geolocation.getCurrentPosition(res => {
        const { latitude, longitude } = res.coords;
        updateWeather(`lat=${latitude}&lon=${longitude}`);
    }, err => {
        // console.log(err);
        window.location.hash = defaultLocation;
    });
}

/**
 * 
 * @param {string} query Searched query
 */
const SearchedLocation = query => updateWeather(...query.split("&"));
//updateWeather("lat=51.5073219","lon=-0.1276474")
const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", SearchedLocation],
]);


const checkHash = function () {
    const requestURL = window.location.hash.slice(1);

    const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL];

    routes.get(route) ? routes.get(route)(query) : error404();
}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
    if (!window.location.hash) {
        // window.location.hash = "#/currentLocation";
        // window.location.hash = "#/defaultLocation";
        window.location.hash = "#/weather?lat=51.5073219&lon=-0.1276474";
    } else {
        checkHash();
    }
});