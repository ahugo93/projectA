// NOTE: We'll be using the Fahrenheit scale for this assignment!

// Set a random current temperature between 0 and 100 Fahrenheit
let currentTemp = Math.round(Math.random() * 100)

// Set the preferred temperature
let preferredTemp = 72

// Before we change anything, give the user of the thermostat a status message
console.log(`The current temperature is ${currentTemp}°F`)

// While the temperature is colder than desired, keep turning up the heat
while (currentTemp < preferredTemp) {
  // Increase heat by one degree
  currentTemp++

  // Give user an update for the current temperature
  console.log(`It's too cold! I've turned it up to ${currentTemp}°F!`)
}

// While the temperature is warmer than desired, keep turning down the heat
while (currentTemp > preferredTemp) {
  // Decrease the heat by one degree
  currentTemp--

  // Give user an update for the current temperature
  console.log(`It's too hot! I've turned it down to ${currentTemp}°F!`)
}

// Give the user a message that the preferred temperature has been reached
console.log(`We have now reached your preferred temperature of ${currentTemp}°F!`)