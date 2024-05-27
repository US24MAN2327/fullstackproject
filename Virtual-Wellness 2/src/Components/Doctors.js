import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Our Professional and Skilled Doctors</span>
        </h3>

        <p className="dt-description">
          
Introducing our outstanding team of specialized doctors, committed to delivering exceptional healthcare services at Health Plus. Rely on their expertise and dedication to guide you toward a life of improved health and increased happiness. Experience the difference our skilled professionals can make in your well-being journey.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Sadia"
          title="Psychiatrist"
          stars="5.0"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Muhammad Usman"
          title="Oncologist"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Anas Khan"
          title="Cardiologist"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Muhammad Shaheer Ali"
          title="Ophthalmologist"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
