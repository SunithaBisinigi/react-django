// import React, { useState } from "react";

// const RegistrationForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegistration = async () => {
//     try {
//       const response = await fetch("http://your-api-endpoint/register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         console.log("Registration successful!");
//         // Redirect to login page or perform other actions
//       } else {
//         console.error("Registration failed.");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   };

//   return (
//     <RegistrationForm/>
//   );
// };

// export default RegistrationForm;
