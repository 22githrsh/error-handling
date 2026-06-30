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


task 3

Scenario

You are developing an Online Movie Ticket Booking System using JavaScript.

The booking process involves callbacks, promises, and different Promise methods. Complete each part in sequence.

Part 1 – Callback Function

Create a function:

bookTicket(customerName, callback)
Requirements
Display:
Booking ticket for John...
After booking, execute the callback function.
Inside the callback, display:
Seat Allocated Successfully
Part 2 – Callback Function

Create another function:

generateTicket(ticketNumber, callback)
Requirements
Display:
Generating Ticket...
Execute the callback function.
Inside the callback, display:
Ticket Generated Successfully
Part 3 – Promise

Create a Promise named:

paymentPromise

Create a variable:

let paymentSuccess = true;
Requirements
If paymentSuccess is true
Payment Successful
Otherwise
Payment Failed

Handle the Promise using:

.then()
.catch()
Part 4 – Promise.all()

After a successful payment, three independent tasks should start simultaneously.

Create three Promises:

Email Confirmation
SMS Confirmation
WhatsApp Confirmation

Assign different setTimeout() delays to each Promise.

Use:

Promise.all()
Expected Output
All Notifications Sent Successfully

[
  "Email Sent",
  "SMS Sent",
  "WhatsApp Sent"
]
Part 5 – Promise.all() with Rejection

Modify the SMS Confirmation Promise so that it rejects instead of resolving.

Requirements
Observe what happens to Promise.all().
Print the error using .catch().
Part 6 – Promise.allSettled()

Use the same three notification Promises.

Execute them using:

Promise.allSettled()
Print the result in the following format:
Email -> fulfilled

SMS -> rejected

WhatsApp -> fulfilled
Part 7 – Promise.race()

Create four payment gateway Promises.

Razorpay
Stripe
PayPal
PhonePe

Assign different delays to each Promise.

Use:

Promise.race()
Requirements
Display the first gateway that responds.
Then make the fastest gateway reject and observe the output.
Part 8 – Promise.any()

Use the same payment gateway Promises.

Requirements
Three gateways should reject.
One gateway should resolve.

Use:

Promise.any()

Expected Output:

Payment Completed Through Stripe
Part 9 – AggregateError

Now modify all payment gateway Promises so they reject.

Use:

Promise.any()

Print the error and identify its type.

Final Challenge

Create the complete booking flow.

Book Ticket
      ↓
Seat Allocated
      ↓
Generate Ticket
      ↓
Payment Successful
      ↓
Email Sent
SMS Sent
WhatsApp Sent
      ↓
Movie Ticket Booked Successfully
Rules
Use Callback Functions in Part 1 and Part 2.
Use a Promise in Part 3.
Use Promise.all() in Part 4.
Use Promise.allSettled() in Part 6.
Use Promise.race() in Part 7.
Use Promise.any() in Part 8.
Do not use async/await.
Do not use try...catch.
Use setTimeout() to simulate asynchronous operations.
