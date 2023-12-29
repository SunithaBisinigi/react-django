// import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
// import { Link } from "react-router-dom";

// const Notification = () => {
//   const [approvedLinks, setApprovedLinks] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   useEffect(() => {
//     // Fetch the list of approved user profiles from the server
//     const fetchApprovedUserProfiles = async () => {
//       try {
//         const response = await fetch(
//           "http://127.0.0.1:8000/api/userprofiles/aprovallist/"
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setApprovedLinks(data);
//         } else {
//           console.error("Failed to fetch approved user profiles");
//         }
//       } catch (error) {
//         console.error("Error fetching approved user profiles:", error);
//       }
//     };

//     fetchApprovedUserProfiles();
//   }, []); // Run this effect only once on component mount

//   const openModal = (userProfile) => {
//     setSelectedUser(userProfile);
//     setModalIsOpen(true);
//   };
//   console.log("this manager openModal.......", openModal)
//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedUser(null);
//   };

//   // ... (other code)

//     const handleApprove = async () => {
//       try {
//         const response = await fetch(
//           `http://127.0.0.1:8000/api/userprofiles/update_approval/${selectedUser.user_id}/`,
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ approval: "a" }), // Change 'response' to 'approval'
//           }
//         );

//         if (response.ok) {
//           console.log(`Approved: ${selectedUser.userName}`);
//           closeModal();
//           // Reload the page after approval
//           window.location.reload();
//         } else {
//           console.error(`Failed to approve: ${selectedUser.userName}`);
//         }
//       } catch (error) {
//         console.error(`Error approving: ${selectedUser.userName}`, error);
//       }
//     };

//   const handleReject = async () => {
//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/userprofiles/update_approval/${selectedUser.user_id}/`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ approval: "r" }), // Change 'response' to 'approval'
//         }
//       );

//       if (response.ok) {
//         console.log(`Rejected: ${selectedUser.userName}`);
//         closeModal();
//         // Reload the page after approval
//         window.location.reload();
//       } else {
//         console.error(`Failed to reject: ${selectedUser.userName}`);
//       }
//     } catch (error) {
//       console.error(`Error rejecting: ${selectedUser.userName}`, error);
//     }
//   };

//   // ... (other code)

//   return (
//     <div>
//       <h2>Notification</h2>
//       {approvedLinks.length > 0 ? (
//         <ul>
//           {approvedLinks.map((userProfile) => (
//             <li key={userProfile.id}>
//               <a href="#" onClick={() => openModal(userProfile)}>
//                 {userProfile.userName} wants approval
//               </a>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No approved user profiles found.</p>
//       )}
//       <Link to="/manager">Back</Link>
//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         <h2>{selectedUser?.userName} Approval</h2>
//         <p>Do you want to approve or reject?</p>
//         <button onClick={handleApprove}>Approve</button>
//         <button onClick={handleReject}>Reject</button>
//       </Modal>
//     </div>
//   );
// };

// export default Notification;
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const Notification = () => {
  const [approvedLinks, setApprovedLinks] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [remark, setRemark] = useState("");

  useEffect(() => {
    const fetchApprovedUserProfiles = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/userprofiles/aprovallist/"
        );
        if (response.ok) {
          const data = await response.json();
          setApprovedLinks(data);
        } else {
          console.error("Failed to fetch approved user profiles");
        }
      } catch (error) {
        console.error("Error fetching approved user profiles:", error);
      }
    };

    fetchApprovedUserProfiles();
  }, []);

  const openModal = (userProfile) => {
    setSelectedUser(userProfile);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
    setRemark(""); // Clear the remark when closing the modal
  };

  const handleApprove = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/userprofiles/update_approval/${selectedUser.user_id}/${selectedUser.form_id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ approval: "a" }),
        }
      );

      if (response.ok) {
        console.log(`Approved: ${selectedUser.user_name}`);
        closeModal();
        window.location.reload();
      } else {
        console.error(`Failed to approve: ${selectedUser.user_name}`);
      }
    } catch (error) {
      console.error(`Error approving: ${selectedUser.user_name}`, error);
    }
  };

  const handleReject = async () => {
    const userRemark = prompt("Enter remark for rejection:");

    // If user clicked "Cancel" or entered an empty remark, do not proceed
    if (!userRemark) {
      console.error("Remark is required when rejecting.");
      return;
    }

    setRemark(userRemark); // Set the remark in the state

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/userprofiles/update_approval/${selectedUser.user_id}/${selectedUser.form_id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ approval: "r", remark: userRemark }),
        }
      );

      if (response.ok) {
        console.log(`Rejected: ${selectedUser.user_name}`);
        closeModal();
        window.location.reload();
      } else {
        console.error(`Failed to reject: ${selectedUser.user_name}`);
      }
    } catch (error) {
      console.error(`Error rejecting: ${selectedUser.user_name}`, error);
    }
  };

  return (
    <div>
      <h2>Notification</h2>
      {approvedLinks.length > 0 ? (
        <ul>
          {approvedLinks.map((userProfile) => (
            <li key={userProfile.id}>
              <a href="#" onClick={() => openModal(userProfile)}>
                {userProfile.user_name} wants approval
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No approved user profiles found.</p>
      )}
      <Link to="/manager">Back</Link>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>{selectedUser?.user_name} Approval</h2>
        <p>Do you want to approve or reject?</p>

        <button onClick={handleApprove}>Approve</button>
        <button onClick={handleReject}>Reject</button>
      </Modal>
    </div>
  );
};

export default Notification;
