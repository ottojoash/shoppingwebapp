import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-gray-500 text-center py-4 pb-16 md:pb-4">
      <div className="flex justify-center space-x-4 mb-4">
        {/* Icon link with round white border and transparent background */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white p-2 rounded-full transition-colors duration-300"
        >
          <FaInstagram size={24} className="text-white" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white p-2 rounded-full transition-colors duration-300"
        >
          <FaFacebookF size={24} className="text-white" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white p-2 rounded-full transition-colors duration-300"
        >
          <FaTwitter size={24} className="text-white" />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white p-2 rounded-full transition-colors duration-300"
        >
          <FaWhatsapp size={24} className="text-white" />
        </a>
        <a
          href="mailto:info@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white p-2 rounded-full transition-colors duration-300"
        >
          <FaEnvelope size={24} className="text-white" />
        </a>
      </div>
      <div>
        Copyright © Theessentialmankampala <br /> All Rights Reserved 2024.
      </div>
    </div>
  );
};

export default Footer;
