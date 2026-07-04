Task: Weather App (HTML, CSS & JavaScript)
Objective

Build a Weather App using:

HTML
CSS
JavaScript
Fetch API
Async/Await
HTTP GET Method
DOM Manipulation
Error Handling
Requirements
Step 1: Create the UI

Design a weather application that contains:

Input field for city name
Search button
Weather information card

The weather card should display:

City Name
Temperature
Weather Condition
Humidity
Wind Speed
Weather Icon
Step 2: Fetch Weather Data

Use the following Weather API:

https://api.openweathermap.org/data/2.5/weather?q={city}&appid=YOUR_API_KEY&units=metric
Step 3: Get Data Using Async/Await

Create an asynchronous function to fetch weather data.

Requirements:

Use fetch()
Use await
Convert response into JSON
Display data in the console first
Step 4: Search Functionality

When the user clicks the Search button:

Read the city name from the input field.
Call the weather function.
Fetch the weather details for that city.
Step 5: Display Data on the Page

Show the following information using DOM Manipulation:

City Name
Temperature
Weather Condition
Humidity
Wind Speed
Weather Icon
Step 6: Error Handling

Handle the following cases:

Empty input field
Invalid city name
Network error
API response error

Use try...catch for error handling and display appropriate messages to the user.
