import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blackish text-gray-500 text-center py-4 pb-16 md:pb-4">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
          <FaFacebookF size={32} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
          <FaTwitter size={32} />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
          <FaWhatsapp size={32} />
        </a>
        <a href="mailto:info@example.com" className="text-gray-500 hover:text-white">
          <FaEnvelope size={32} />
        </a>
      </div>
      <div>
        Copyright © Theessentialmankampala <br /> All Rights Reserved 2024.
      </div>
    </div>
  );
};

export default Footer;

