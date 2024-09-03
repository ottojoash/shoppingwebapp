"use client";

import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa"; 

const Footer: React.FC = () => {
  const [clickedIcon, setClickedIcon] = useState<string | null>(null);

  const handleClick = (iconName: string) => {
    setClickedIcon(iconName);
    setTimeout(() => setClickedIcon(null), 300); // Reset animation after 300ms
  };

  return (
    <div className="bg-white text-black text-center py-4 pb-16 md:pb-4">
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.instagram.com/theessentialman.co?igsh=M281Mjl4ZzJscTI5&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-black p-2 rounded-full transition-transform duration-300 ${clickedIcon === 'instagram' ? 'transform scale-125' : ''}`}
          onClick={() => handleClick('instagram')}
        >
          <FaInstagram size={24} className="text-black" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-black p-2 rounded-full transition-transform duration-300 ${clickedIcon === 'facebook' ? 'transform scale-125' : ''}`}
          onClick={() => handleClick('facebook')}
        >
          <FaFacebookF size={24} className="text-black" />
        </a>
        <a
          href="tel:+1234567890"
          className={`border border-black p-2 rounded-full transition-transform duration-300 ${clickedIcon === 'phone' ? 'transform scale-125' : ''}`}
          onClick={() => handleClick('phone')}
        >
          <FaPhone size={24} className="text-black" />
        </a>
        <a
          href="https://wa.link/grz1h3"
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-black p-2 rounded-full transition-transform duration-300 ${clickedIcon === 'whatsapp' ? 'transform scale-125' : ''}`}
          onClick={() => handleClick('whatsapp')}
        >
          <FaWhatsapp size={24} className="text-black" />
        </a>
        <a
          href="afreshmanjonathan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-black p-2 rounded-full transition-transform duration-300 ${clickedIcon === 'email' ? 'transform scale-125' : ''}`}
          onClick={() => handleClick('email')}
        >
          <FaEnvelope size={24} className="text-black" />
        </a>
      </div>
      <div>
        Copyright © Theessentialmankampala <br /> All Rights Reserved 2024.
      </div>
    </div>
  );
};

export default Footer;
