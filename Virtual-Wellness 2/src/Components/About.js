import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to the Virtual Wellness Center, your trusted ally in accessible and personalized healthcare. Our experienced doctors offer online consultations and a range of specialized services, putting your well-being at the forefront. We are dedicated to supporting you on your path to better health. Join us today and embark on a journey to a healthier, happier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Select a Specialist"
          description="
          Discover your ideal specialist and book effortlessly at Health Plus. Our expert doctors prioritize your well-being, providing personalized care to meet your needs."
        />

        <SolutionStep
          title="Select a Schedule"
          description="Select the most convenient date and time for you, and our dedicated team of medical professionals will provide personalized care to ensure your well-being."
        />

        <SolutionStep
          title="Get Assistance"
          description="Our seasoned doctors and specialists are ready to offer expert advice and customized treatment plans, assisting you in achieving optimal health."
        />
      </div>
    </div>
  );
}

export default About;
