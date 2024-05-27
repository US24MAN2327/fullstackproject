import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faBrain } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">

      <InformationCard
          title="Mental Health"
          description="Our team of mental health specialists is committed to providing compassionate care and support for your emotional well-being. Using evidence-based practices and therapeutic approaches, we offer a safe and nurturing environment where you can explore your thoughts and feelings. Whether you're struggling with anxiety, depression, or any other mental health concern, we're here to help you navigate challenges and build resilience. With personalized treatment plans and ongoing support, we empower you to enhance your mental health and lead a fulfilling life."
          icon={faBrain}
        />
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is crafted to be your steadfast aid during urgent situations. Be it a sudden illness, injury, or any medical issue demanding immediate attention, our devoted team of healthcare experts stands ready 24/7 to deliver swift and effective care. Trust us to be there for you when it matters most, ensuring your well-being is our top priority."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Disease"
          description="Our seasoned team of cardiologists and healthcare professionals employ cutting-edge technology to evaluate your cardiovascular well-being and create tailored treatment strategies. From thorough screenings to advanced interventions, we are dedicated to assisting you in preserving a strong heart and embracing a fulfilling lifestyle. Trust us to prioritize your heart health and support you every step of the way towards optimal well-being."
          icon={faHeartPulse}
        />
      </div>
    </div>
  );
}

export default Info;
