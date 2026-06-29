
// // function register() {

// //     let name = document.querySelector("#text").value.trim();
// //     let email = document.querySelector("#email").value.trim();
// //     let age = document.querySelector("#age").value.trim();
// //     let password = document.querySelector("#password").value;
// //     let confirmPassword = document.querySelector("#confirmPassword").value;
// //     let message = document.querySelector("#message");

// //     try {

// //         if (name === "") {
// //             throw new Error("Name is required");
// //         }

// //         if (!email.includes("@")) {
// //             throw new Error("Invalid Email");
// //         }

// //         if (age === "") {
// //             throw new Error("Age is required");
// //         }

// //         if (Number(age) < 18) {
// //             throw new Error("Age must be greater than 18");
// //         }

// //         if (password.length < 8) {
// //             throw new Error("Password must be at least 8 characters.");
// //         }

// //         if (password === "") {
// //             throw new Error("Password is required");
// //         }

// //         if (confirmPassword === "") {
// //             throw new Error("Confirm Password is required.");
// //         }

// //         if (password !== confirmPassword) {
// //             throw new Error("Passwords do not match");
// //         }

// //         message.style.color = "green";
// //         message.innerHTML = "Registration Successful!";

// //     } catch (error) {

// //         message.style.color = "red";
// //         message.innerHTML = error.message;

// //         console.log(error.name);
// //         console.log(error.message);
// //         console.log(error.stack);

// //     } finally {
// //         console.log("Validation completed.");
// //     }
// // }





// // console.log("1");

// // setTimeout(() => {
// //     console.log("2");
    
// // }, 5000);

// // console.log("3");



// // function harsh(name,callback) {

// // console.log("Hello "+name);

// // callback();

// // }

// // function harshita() {

// // console.log("hiee");

// // }

// // harsh("Harsh",harshita);




// function harsh(a,callback){

//     console.log("hello", a);
    
//     callback()
// }


// function harshita(){
//     console.log("heyyyyyyy");
// }

// harsh("HIEEE", harshita)




// function