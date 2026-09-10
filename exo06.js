function toCelsius(f) {
    return Math.round(((f - 32) * 5 / 9) * 10) / 10;
}

function toFahrenheit(c) {
    return Math.round(((c * 9 / 5) + 32) * 10) / 10;
}

console.assert(toCelsius(32) === 0, "32°F devrait donner 0°C");
console.assert(toFahrenheit(0) === 32, "0°C devrait donner 32°F");
console.assert(toCelsius(212) === 100, "212°F devrait donner 100°C");