// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserProfile = () => {
//   const [userDetails, setUserDetails] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         // Make a GET request to fetch user details
//         const response = await axios.get('http://127.0.0.1:8000/api/get-user-details/');
//         setUserDetails(response.data[0]); // Assuming the API returns an array with a single user object
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserDetails();
//   }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

//   return (
//     <div>
//       <h2>User Profile</h2>
//       {userDetails ? (
//         <>
//           <div>
//             <strong>Name:</strong> {userDetails.FirstName} {userDetails.LastName}
//           </div>
//           <div>
//             <strong>Prefix:</strong> {userDetails.Prefix}
//           </div>
//           <div>
//             <strong>Position:</strong> {userDetails.Position}
//           </div>
//           <div>
//             <strong>Birth Date:</strong> {userDetails.BirthDate}
//           </div>
//           <div>
//             <strong>Hire Date:</strong> {userDetails.HireDate}
//           </div>
//           <div>
//             <strong>Address:</strong> {userDetails.Address}
//           </div>
//           <div>
//             <strong>Notes:</strong> {userDetails.Notes}
//           </div>
//           {userDetails.Picture && (
//             <div>
//               <strong>Profile Picture:</strong>
//               <img src={userDetails.Picture} alt="Profile" style={{ maxWidth: '200px', maxHeight: '200px' }} />
//             </div>
//           )}
//         </>
//       ) : (
//         <p>Loading user details...</p>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log("User Details:", userDetails);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Make a GET request to fetch user details
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get-user-details/"
        );

        console.log("API Response:", response.data); // Log the data received

        if (response.data) {
          setUserDetails(response.data); // Update to use the entire object
        } else {
          setError("No user details found.");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Error fetching user details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <div>
      <h2>User Profile</h2>
      {loading ? (
        <p>Loading user details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : userDetails ? (
        <>
          <div>
            <strong>Name:</strong> {userDetails.FirstName}{" "}
            {userDetails.LastName}
          </div>
          <div>
            <strong>Prefix:</strong> {userDetails.Prefix}
          </div>
          <div>
            <strong>Position:</strong> {userDetails.Position}
          </div>
          <div>
            <strong>Birth Date:</strong> {userDetails.BirthDate}
          </div>
          <div>
            <strong>Hire Date:</strong> {userDetails.HireDate}
          </div>
          <div>
            <strong>Address:</strong> {userDetails.Address}
          </div>
          <div>
            <strong>Notes:</strong> {userDetails.Notes}
          </div>
          {userDetails.Picture && (
            console.log("image",userDetails.Picture),
            <div>
              <strong>Profile Picture:</strong>
              <img
                src={userDetails.Picture}
                alt="Profile"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default UserProfile;
