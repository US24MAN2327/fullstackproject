import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Virtual Wellness <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to Virtual Wellness Center, your go-to destination for convenient and personalized online healthcare solutions. Our goal is to offer accessible medical advice and treatment tailored to your needs. By accessing our platform, you acknowledge and agree to abide by the terms set forth in our Privacy Policy and Terms of Service, ensuring your safety and confidentiality are our top priorities.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        Protecting your privacy is our utmost priority. Our Privacy Policy details the procedures for collecting, utilizing, and safeguarding your personal and medical data. With stringent protocols in place, we guarantee secure handling of your information, ensuring absolute confidentiality and peace of mind. You can trust us to prioritize the confidentiality and security of your data at all times.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        By accessing Virtual Wellness, you are consenting to abide by our Terms of Service, which outline the rules for platform usage, interactions with medical professionals, and the obligations of both parties involved. Familiarizing yourself with these terms is crucial to ensure a seamless experience for all users. Understanding and adhering to these guidelines contribute to maintaining a positive and efficient environment for everyone utilizing our services.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Our platform facilitates connections with skilled doctors offering online consultations. While these consultations offer convenience for medical advice, prescriptions, and guidance, they are not intended to replace in-person medical visits. To ensure the highest quality of care, it is essential to provide accurate and comprehensive information. This ensures that our doctors can provide the most effective assistance tailored to your needs.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        
At Virtual Wellness, we've streamlined healthcare access for your convenience. Select your preferred specialist, book an appointment, and participate in a virtual consultation hassle-free. Our specialists provide customized advice and treatment plans designed specifically for you. However, it's essential to note that emergencies demand prompt medical attention and should be directed to your nearest medical facility without delay.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Virtual Wellness+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
