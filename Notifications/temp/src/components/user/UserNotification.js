// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const UserNotification = () => {
//   const [notificationStatus, setNotificationStatus] = useState("");
//   const [userId, setUserId] = useState("");

//   useEffect(() => {
//     // Retrieve the user ID from cookies
//     const cookies = document.cookie.split("; ");
//     const userIdCookie = cookies.find((row) => row.startsWith("user_id="));

//     if (userIdCookie) {
//       const id = userIdCookie.split("=")[1];
//       setUserId(id);

//       // Function to make an API call
//       const fetchData = async () => {
//         try {
//           const response = await fetch(
//             `http://127.0.0.1:8000/api/get_approval_status/${id}/`
//           );
//           if (response.ok) {
//             const data = await response.json();
//             const approvalStatus = data.approval_status;
//             const remark = data.remark;

//             // Set notification message based on approval_status
//             switch (approvalStatus) {
//               case "a":
//                 setNotificationStatus("Your request is approved");
//                 break;
//               case "r":
//                 setNotificationStatus(`Your request is rejected. Remark: ${remark}`);
//               break;
//               case "p":
//                 setNotificationStatus("Your request is still pending");
//                 break;
//               default:
//                 setNotificationStatus("Unknown approval status");
//                 break;
//             }
//           } else {
//             console.error("Failed to fetch notification status");
//           }
//         } catch (error) {
//           console.error("Error fetching notification status:", error);
//         }
//       };

//       // Call the function when the component mounts
//       fetchData();
//     } else {
//       console.error("User ID not found or invalid.");
//     }
//   }, []); // Run this effect only once on component mount

//   return (
//     <div>
//       <p>{notificationStatus}</p>
//       <Link to="/userhome">Back</Link>
//     </div>
//   );
// };

// export default UserNotification;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserNotification = () => {
  const [formIds, setFormIds] = useState([]);
  const [selectedFormId, setSelectedFormId] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the user ID and form IDs from cookies
    const cookies = document.cookie.split("; ");
    const userIdCookie = cookies.find((row) => row.startsWith("user_id="));
    const formIdsCookie = cookies.find((row) => row.startsWith("form_ids="));

    if (userIdCookie && formIdsCookie) {
      const id = userIdCookie.split("=")[1];
      const ids = formIdsCookie.split("=")[1].split(",");
      setUserId(id);
      setFormIds(ids);
    } else {
      console.error("User ID or Form IDs not found or invalid.");
    }
  }, []); // Run this effect only once on component mount

  const handleFormIdClick = async (formId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/get_approval_status/${userId}/${formId}/`
      );

      if (response.ok) {
        const data = await response.json();
        const approvalStatus = data.approval_status;
        const remark = data.remark;

        // Set approval status message
        switch (approvalStatus) {
          case "a":
            setApprovalStatus("Your request is approved");
            break;
          case "r":
            setApprovalStatus(`Your request is rejected. Remark: ${remark}`);
            break;
          case "p":
            setApprovalStatus("Your request is still pending");
            break;
          default:
            setApprovalStatus("Unknown approval status");
            break;
        }

        // Set the selected form ID
        setSelectedFormId(formId);
      } else {
        console.error("Failed to fetch approval status");
      }
    } catch (error) {
      console.error("Error fetching approval status:", error);
    }
  };

  return (
    <div>
      <h3>Your Form IDs:</h3>
      <ul>
        {formIds.map((formId) => (
          <li key={formId}>
            <button onClick={() => handleFormIdClick(formId)}>{formId}</button>
          </li>
        ))}
      </ul>

      {selectedFormId && (
        <div>
          <p>{approvalStatus}</p>
          <Link to="/userhome">Back</Link>
        </div>
      )}

      {!selectedFormId && <p>Select a form ID to view approval status.</p>}
    </div>
  );
};

export default UserNotification;
