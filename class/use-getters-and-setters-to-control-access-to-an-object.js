/*jshint esversion: 6 */

/* global console*/
class Thermostat {
    constructor(temperature) {
        this._temperature = 5 / 9 * (temperature - 32);
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(newTemperature) {
        this._temperature = newTemperature;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
