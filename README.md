JavaScript Fetch API Mega Assignment
Project: Student Management System
Objective

Create a JavaScript application that manages students using the Fetch API.

API Base URL
https://jsonplaceholder.typicode.com
Requirements

Complete the following tasks in one project.

1. Fetch All Students (GET)
Fetch all students from /users.
Print the complete data in the console.
Also print only:
Name
Username
Email
2. Fetch a Single Student (GET)

Fetch the student with id = 5.

Print:

Name
Username
Email
Phone
3. Create a New Student (POST)

Create the following student:

{
    name: "Harsh",
    username: "harsh123",
    email: "harsh@example.com",
    phone: "9876543210"
}

Requirements:

Use POST
Add request headers.
Convert the object using JSON.stringify().
Print the created response.
4. Replace Student Data (PUT)

Replace the data of student id = 5 with:

{
    name: "Rahul",
    username: "rahul007",
    email: "rahul@example.com",
    phone: "9999999999"
}

Print the updated response.

5. Update Student Email (PATCH)

Update only the email of student id = 5.

{
    email: "updated@example.com"
}

Print the updated response.

6. Check the Response Object

For every request, print:

response.status
response.ok

Then convert the response into JSON using:

response.json()
7. Error Handling

Make one request to an invalid endpoint.

Example:

https://jsonplaceholder.typicode.com/invalid

If an error occurs, display an appropriate message in the console using .catch().

Rules

Your project must use all of the following:

fetch()
GET
POST
PUT
PATCH
.then()
.catch()
response.json()
response.status
response.ok
headers
Content-Type: application/json
JSON.stringify()
