import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-gray-600 py-6  font-bold text-center">
      © {currentYear} Karthik Nayak
    </footer>
  );
};

export default Footer;
