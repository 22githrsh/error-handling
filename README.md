Task: Student Management API (GET + POST)
Objective

Use the Fetch API to:

Create a new student using POST.
Fetch all students using GET.
API
Base URL:
https://jsonplaceholder.typicode.com
Endpoint
POST  /users
GET   /users
Requirements
Step 1 - Create a Student (POST)

Create a new student with the following data:

{
    name: "Harsh",
    username: "harsh123",
    email: "harsh@example.com"
}
Use fetch()
Use method: "POST"
Add the correct headers.
Convert the object into JSON.
Print the created student in the console.
Step 2 - Get All Students (GET)

After the POST request completes successfully:

Send a GET request to /users.
Convert the response into JSON.
Print all users in the console.
Expected Flow
Creating Student...

↓

Student Created Successfully

↓

Fetching All Students...

↓

Display All Students in Console
