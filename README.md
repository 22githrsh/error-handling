task 1

Question

Create a function named processUser() that accepts 2 parameters:

username
callback
Requirements

Print:

User: <username>
After printing the username, execute the callback function.
Create three named callback functions:
showWelcome()
showProfile()
logoutUser()
Call processUser() three times using different callbacks.
Finally, call processUser() one more time using an anonymous function instead of a named function.
Expected Output
User: Rahul
Welcome Rahul!

User: Aman
Opening Profile...

User: Mohit
Logging Out...

User: Harsh
Have a Great Day!

task 2

Problem Statement: Movie Ticket Booking System

You are developing a simple Movie Ticket Booking System using JavaScript. First, create a function named bookTicket(customerName, callback) that books a movie ticket for a customer and then executes a callback function. Pass an anonymous function as the callback to display that the ticket is being verified. After that, create a Promise to represent the booking confirmation process. Inside the Promise, create a variable named bookingConfirmed. If bookingConfirmed is true, resolve the Promise with the message "Movie Ticket Confirmed 🎟️". Finally, use .then() to display the resolved message, then print "Customer entered the cinema." followed by "Enjoy the Movie! 🍿". Your solution should demonstrate the use of a callback function, an anonymous function, a Promise, resolve(), and .then().
