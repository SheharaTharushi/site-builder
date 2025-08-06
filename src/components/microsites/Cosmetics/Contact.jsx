import React from "react";
import Navigation from "./Navigation";
import ContactSplit from "../../templates/contact/ContactSplit";
import FooterSimple from "../../templates/footer/FooterSimple";

const Contact = ({ isBuilder = false }) => {
  const contactContent = {
    title: "Get in Touch",
    subtitle: "We'd Love to Hear from You",
    description:
      "Have questions about our products or services? Our beauty experts are here to help.",
    contactInfo: {
      email: "info@beautyandcare.com",
      phone: "+1 (555) 123-4567",
      address: "123 Beauty Street, Fashion District, NY 10001",
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
    formFields: [
      { id: "name", label: "Full Name", type: "text", required: true },
      { id: "email", label: "Email", type: "email", required: true },
      { id: "phone", label: "Phone", type: "tel", required: false },
      { id: "message", label: "Message", type: "textarea", required: true },
    ],
    submitButton: {
      text: "Send Message",
      color: "#4F46E5",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation isBuilder={isBuilder} />
      <div className="pt-16 space-y-16">
        <ContactSplit {...contactContent} />
        <FooterSimple />
      </div>
    </div>
  );
};

export default Contact;
