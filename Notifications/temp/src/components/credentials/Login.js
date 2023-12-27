import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();

        // Save user ID and access token in cookies
        document.cookie = `user_id=${responseData.user.id}; path=/`;
        document.cookie = `access_token=${responseData.access_token}; path=/`;

        console.log("Login successful!", response);
        navigate("/userhome");
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const [accessToken, setAccessToken] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       if (response.ok) {
//         console.log("Login successful!", response);

//         // Read the access token from the response or wherever it is available
//         const responseData = await response.json();
//         const newAccessToken = responseData?.access_token; // Ensure the correct property name

//         if (newAccessToken) {
//           // Save the access token in the local state and localStorage
//           setAccessToken(newAccessToken);
//           localStorage.setItem("access_token", newAccessToken);

//           // Save the access token in cookies (if needed)
//           document.cookie = `access_token=${newAccessToken}; path=/; samesite=None; secure`;

//           navigate("/userhome");
//         } else {
//           console.error(
//             "Access token not found in the response:",
//             responseData
//           );
//         }
//       } else {
//         console.error("Login failed.");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>User Login</h2>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <br />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginForm;
