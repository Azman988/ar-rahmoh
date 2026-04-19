import React from 'react';

const WhatsAppOrderBtn = ({ productName }) => {
  // 1. Set your business number
  const phoneNumber = "2348065855687";

  // 2. Create the custom message
  const message = `Hello Ar-Rahmon, I am interested in the ${productName}. Please provide more details.`;

  // 3. Encode the message for the URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn btn-success"
      style={{ backgroundColor: '#25D366', border: 'none' }}
    >
      Order via WhatsApp
    </a>
  );
};

export default WhatsAppOrderBtn;
