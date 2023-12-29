import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserNotification = () => {
  const [notificationStatus, setNotificationStatus] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Retrieve the user ID from cookies
    const cookies = document.cookie.split("; ");
    const userIdCookie = cookies.find((row) => row.startsWith("user_id="));

    if (userIdCookie) {
      const id = userIdCookie.split("=")[1];
      setUserId(id);

      // Function to make an API call
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/api/get_approval_status/${id}/`
          );
          if (response.ok) {
            const data = await response.json();
            const approvalStatus = data.approval_status;

            // Set notification message based on approval_status
            switch (approvalStatus) {
              case "a":
                setNotificationStatus("Your request is approved");
                break;
              case "r":
                setNotificationStatus("Your request is rejected");
                break;
              case "p":
                setNotificationStatus("Your request is still pending");
                break;
              default:
                setNotificationStatus("Unknown approval status");
                break;
            }
          } else {
            console.error("Failed to fetch notification status");
          }
        } catch (error) {
          console.error("Error fetching notification status:", error);
        }
      };

      // Call the function when the component mounts
      fetchData();
    } else {
      console.error("User ID not found or invalid.");
    }
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <p>{notificationStatus}</p>
      <Link to="/userhome">Back</Link>
    </div>
  );
};

export default UserNotification;
