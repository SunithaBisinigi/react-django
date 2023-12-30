// UserForm.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [formData, setFormData] = useState({
    request: "", // Update the state key to 'request'
    userId: "",
    formId: "",
  });

  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the access token and user ID from cookies
    const cookies = document.cookie.split("; ");
    const accessTokenCookie = cookies.find((row) =>
      row.startsWith("access_token=")
    );
    const userIdCookie = cookies.find((row) => row.startsWith("user_id="));

    if (accessTokenCookie && userIdCookie) {
      const token = accessTokenCookie.split("=")[1];
      const id = userIdCookie.split("=")[1];
      setAccessToken(token);
      setUserId(id);

      // Set userId in the formData
      setFormData((prevData) => ({
        ...prevData,
        userId: id,
      }));
    } else {
      console.error("Access Token or User ID not found or invalid.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const createResponse = await fetch("http://127.0.0.1:8000/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, userId }),
      });

      if (createResponse.ok) {
        const createData = await createResponse.json();
        console.log("Form submitted successfully!", createData);
        alert("Form submitted successfully.");
        navigate("/userhome");
      } else {
        const responseData = await createResponse.json();
        console.error("Form submission failed. Response:", responseData);
        setError("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Form...</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Request:
          <input
            type="text"
            name="request"
            value={formData.request}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  );
};

export default UserForm;
