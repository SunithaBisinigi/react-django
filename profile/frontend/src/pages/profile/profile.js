import React, { useState } from "react";
import "./profile.scss";
import Form, { SimpleItem, Label } from "devextreme-react/form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    FirstName: "",
    LastName: "",
    Prefix: "",
    Position: "",
    Picture: null,
    BirthDate: null,
    HireDate: null,
    Notes: "",
    Address: "",
  });

  const [redirected, setRedirected] = useState(false);
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      const formattedUserDetails = {
        ...userDetails,
        BirthDate: userDetails.BirthDate
          ? new Date(userDetails.BirthDate).toISOString().split("T")[0]
          : null,
        HireDate: userDetails.HireDate
          ? new Date(userDetails.HireDate).toISOString().split("T")[0]
          : null,
      };

      // Save the image in the public folder of the React app
      const imagePath = userDetails.Picture
        ? `/images/${Date.now()}_${userDetails.Picture.name}`
        : null;

      setUserDetails((prevDetails) => ({
        ...prevDetails,
        Picture: imagePath,
      }));

      // Make a POST request to save the user details
      await axios.post("http://127.0.0.1:8000/api/save-user-details/", {
        userDetails: formattedUserDetails,
      });

      console.log("User details saved successfully!");
      // Redirect to the home page after successful save
      setRedirected(true);
    } catch (error) {
      console.error("Error saving user details:", error);
    }
  };


//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setUserDetails((prevDetails) => ({
//       ...prevDetails,
//       Picture: file,
//     }));
  
//   // Display the selected profile picture
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfilePictureUrl(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };
const handleFileChange = (e) => {
  const file = e.target.files[0];

  // Make sure to set userDetails.Picture to the appropriate value
  setUserDetails((prevDetails) => ({
    ...prevDetails,
    Picture: file,
  }));
};



  return (
    <React.Fragment>
      <h2 className={"content-block"}>Profile</h2>

      <div className={"content-block dx-card responsive-paddings"}>
        <Form
          encType="multipart/form-data"
          id={"form"}
          colCount={2}
          formData={userDetails}
          onFieldDataChanged={(e) =>
            setUserDetails((prevDetails) => ({
              ...prevDetails,
              [e.dataField]: e.value,
            }))
          }
        >
          <SimpleItem dataField="FirstName" editorType="dxTextBox">
            <Label text="First Name" />
          </SimpleItem>
          <SimpleItem dataField="LastName" editorType="dxTextBox">
            <Label text="Last Name" />
          </SimpleItem>
          <SimpleItem dataField="Prefix" editorType="dxTextBox">
            <Label text="Prefix" />
          </SimpleItem>
          <SimpleItem dataField="Position" editorType="dxTextBox">
            <Label text="Position" />
          </SimpleItem>
          <SimpleItem dataField="BirthDate" editorType="dxDateBox">
            <Label text="Birth Date" />
          </SimpleItem>
          <SimpleItem dataField="HireDate" editorType="dxDateBox">
            <Label text="Hire Date" />
          </SimpleItem>
          <SimpleItem dataField="Notes" editorType="dxTextBox">
            <Label text="Notes" />
          </SimpleItem>
          <SimpleItem dataField="Address" editorType="dxTextBox">
            <Label text="Address" />
          </SimpleItem>
          <SimpleItem dataField="file" editorType="dxFileUploader">
            <Label text="Profile Picture" />
          </SimpleItem>
        </Form>
        <div>
          <label>Upload Profile Picture:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <button onClick={handleSave}>Save</button>
      </div>
      {redirected && navigate("/home")}
    </React.Fragment>
  );
};

export default Profile;













































// import React, { useState } from "react";
// import "./profile.scss";
// import Form, { SimpleItem, Label } from "devextreme-react/form";
// import FileUploader from "devextreme-react/file-uploader";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const [userDetails, setUserDetails] = useState({
//     FirstName: "",
//     LastName: "",
//     Prefix: "",
//     Position: "",
//     Picture: null,
//     BirthDate: null,
//     HireDate: null,
//     Notes: "",
//     Address: "",
//   });

//   const [redirected, setRedirected] = useState(false);
//   const navigate = useNavigate();

//   const handleSave = async () => {
//     try {
//       const formattedUserDetails = {
//         ...userDetails,
//         BirthDate: userDetails.BirthDate
//           ? new Date(userDetails.BirthDate).toISOString().split("T")[0]
//           : null,
//         HireDate: userDetails.HireDate
//           ? new Date(userDetails.HireDate).toISOString().split("T")[0]
//           : null,
//       };
//       alert(formattedUserDetails);
//       console.log(formattedUserDetails);

//       const formData = new FormData();
//       formData.append("userDetails", JSON.stringify(formattedUserDetails));
//       formData.append("profilePicture", userDetails.Picture);
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/save-user-details/",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("Server response:", response.data);
//       console.log("User details saved successfully!");

//     //   // Make a POST request to save the user details
//     //   await axios.post("http://127.0.0.1:8000/api/save-user-details/", {
//     //     userDetails: formattedUserDetails,
//     //   });

//     //   console.log("User details saved successfully!");
//       // Redirect to the home page after successful save
//       setRedirected(true);
//     } catch (error) {
//       console.error("Error saving user details:", error);
//     }
//   };
//   const handleFileChange = (e) => {
//     console.log("VALUE OF THE E..........",e);
//     const file = e.value[0];
//     setUserDetails((prevDetails) => ({
//       ...prevDetails,
//       Picture: file,
//     }));
//     console.log("VALUE OF THE FILE,,,,,,,,,,,,,,,,,",file);
//   };
 

//   return (
//     <React.Fragment>
//       <h2 className={"content-block"}>Profile</h2>

//       <div className={"content-block dx-card responsive-paddings"}>
//         <Form
//           id={"form"}
//           colCount={2}
//           formData={userDetails}
//           onFieldDataChanged={(e) =>
//             setUserDetails((prevDetails) => ({
//               ...prevDetails,
//               [e.dataField]: e.value,
//             }))
//           }
//         >
//           <SimpleItem dataField="FirstName" editorType="dxTextBox">
//             <Label text="First Name" />
//           </SimpleItem>
//           <SimpleItem dataField="LastName" editorType="dxTextBox">
//             <Label text="Last Name" />
//           </SimpleItem>
//           <SimpleItem dataField="Prefix" editorType="dxTextBox">
//             <Label text="Prefix" />
//           </SimpleItem>
//           <SimpleItem dataField="Position" editorType="dxTextBox">
//             <Label text="Position" />
//           </SimpleItem>
//           <SimpleItem dataField="BirthDate" editorType="dxDateBox">
//             <Label text="Birth Date" />
//           </SimpleItem>
//           <SimpleItem dataField="HireDate" editorType="dxDateBox">
//             <Label text="Hire Date" />
//           </SimpleItem>
//           <SimpleItem dataField="Notes" editorType="dxTextBox">
//             <Label text="Notes" />
//           </SimpleItem>
//           <SimpleItem dataField="Address" editorType="dxTextBox">
//             <Label text="Address" />
//           </SimpleItem>
//           <SimpleItem dataField="Picture" editorType="dxFileUploader">
//             <Label text="Profile Picture" />
//             <div>
//               <FileUploader
//                 accept="image/*"
//                 labelText=""
//                 showFileList={false}
//                 onValueChanged={handleFileChange}
//               />
//               {/* {userDetails.Picture && (
//                 <img
//                   alt="Profile"
//                   src={URL.createObjectURL(userDetails.Picture)}
//                   style={{
//                     maxWidth: "100%",
//                     maxHeight: "200px",
//                     marginTop: "10px",
//                   }}
//                 />
//               )} */}
//             </div>
//           </SimpleItem>
//         </Form>
//         <button onClick={handleSave}>Save</button>
//       </div>
//       {redirected && navigate("/home")}
//     </React.Fragment>
//   );
// };

// export default Profile;








// import React, { useState } from "react";
// import "./profile.scss";
// import Form, { SimpleItem, Label } from "devextreme-react/form";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const [userDetails, setUserDetails] = useState({
//     FirstName: "",
//     LastName: "",
//     Prefix: "",
//     Position: "",
//     Picture: null,
//     BirthDate: null,
//     HireDate: null,
//     Notes: "",
//     Address: "",
//   });

//   const [redirected, setRedirected] = useState(false);
//   const navigate = useNavigate();

//   const handleSave = async () => {
//     try {
//       const formattedUserDetails = {
//         ...userDetails,
//         BirthDate: userDetails.BirthDate
//           ? new Date(userDetails.BirthDate).toISOString().split("T")[0]
//           : null,
//         HireDate: userDetails.HireDate
//           ? new Date(userDetails.HireDate).toISOString().split("T")[0]
//           : null,
//       };

//       // Send the file to the server using FormData
//       const formData = new FormData();
//       Object.entries(formattedUserDetails).forEach(([key, value]) => {
//         formData.append(key, value);
//       });

//       // Append the file separately
//       formData.append("Picture", userDetails.Picture);

//       // Make a POST request to save the user details
//       await axios.post(
//         "http://127.0.0.1:8000/api/save-user-details/",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("User details saved successfully!");
//       // Redirect to the home page after successful save
//       setRedirected(true);
//     } catch (error) {
//       console.error("Error saving user details:", error);
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setUserDetails((prevDetails) => ({
//       ...prevDetails,
//       Picture: file,
//     }));
//   };

//   return (
//     <React.Fragment>
//       <h2 className={"content-block"}>Profile</h2>

//       <div className={"content-block dx-card responsive-paddings"}>
//         <Form
//           id={"form"}
//           colCount={2}
//           formData={userDetails}
//           onFieldDataChanged={(e) =>
//             setUserDetails((prevDetails) => ({
//               ...prevDetails,
//               [e.dataField]: e.value,
//             }))
//           }
//         >
//           <SimpleItem dataField="FirstName" editorType="dxTextBox">
//             <Label text="First Name" />
//           </SimpleItem>
//           <SimpleItem dataField="LastName" editorType="dxTextBox">
//             <Label text="Last Name" />
//           </SimpleItem>
//           <SimpleItem dataField="Prefix" editorType="dxTextBox">
//             <Label text="Prefix" />
//           </SimpleItem>
//           <SimpleItem dataField="Position" editorType="dxTextBox">
//             <Label text="Position" />
//           </SimpleItem>
//           <SimpleItem dataField="BirthDate" editorType="dxDateBox">
//             <Label text="Birth Date" />
//           </SimpleItem>
//           <SimpleItem dataField="HireDate" editorType="dxDateBox">
//             <Label text="Hire Date" />
//           </SimpleItem>
//           <SimpleItem dataField="Notes" editorType="dxTextBox">
//             <Label text="Notes" />
//           </SimpleItem>
//           <SimpleItem dataField="Address" editorType="dxTextBox">
//             <Label text="Address" />
//           </SimpleItem>
//         </Form>
//         <div>
//           <label>Upload Profile Picture:</label>
//           <input type="file" accept="image/*" onChange={handleFileChange} />
//         </div>
//         <button onClick={handleSave}>Save</button>
//       </div>
//       {redirected && navigate("/home")}
//     </React.Fragment>
//   );
// };

// export default Profile;
