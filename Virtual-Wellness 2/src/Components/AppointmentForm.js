import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

function AppointmentForm() {
  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [selectedDoctor, setSelectedDoctor] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!patientName || patientName.length < 4) {
      errors.patientName = "Name must be at least 4 characters";
    }
    if (!patientNumber) {
      errors.patientNumber = "Phone number is required";
    }
    if (patientGender === "default") {
      errors.patientGender = "Please select gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }
    if (selectedDoctor === "default") {
      errors.selectedDoctor = "Please select a doctor";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const formData = {
      patientName,
      patientNumber,
      patientGender,
      appointmentTime,
      preferredMode,
      selectedDoctor
    };

    try {
      console.log('Submitting appointment data:', formData);
      await axios.post('http://localhost:3006/appointments', formData); // Update the URL to match your server's port
      toast.success("Appointment Scheduled !", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsSubmitted(true),
        onClose: () => setIsSubmitted(false),
      });

      // Clear form after successful submission
      setPatientName("");
      setPatientNumber("");
      setPatientGender("default");
      setAppointmentTime("");
      setPreferredMode("default");
      setSelectedDoctor("default");
    } catch (error) {
      console.error('Error submitting appointment:', error);
      toast.error("Failed to schedule appointment", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Virtual Wellness <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />
          <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />
          <label>
            Select Doctor:
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="Dr. Sadia">Dr. Sadia</option>
              <option value="Dr. Usman">Dr. Usman</option>
              <option value="Dr. Anas">Dr. Anas</option>
              <option value="Dr. Shaheer">Dr. Shaheer</option>
            </select>
            {formErrors.selectedDoctor && <p className="error-message">{formErrors.selectedDoctor}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Appointment details has been sent to the patient's phone number via SMS.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2024 Virtual Wellness+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
