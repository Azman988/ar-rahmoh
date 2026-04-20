import React from 'react';

const WhatsAppOrderBtn = ({ productName, consult }) => {
  const phoneNumber = "2348065855687";

  const message = productName ? `Hello Ar-Rahmon, I am interested in the ${productName}. Please provide more details.` : "Hello Ar-Rahmon, Pls i need doctor's consultation.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn btn-success"
      style={{ backgroundColor: '#25D366', border: 'none', fontSize: 14 }}
    >
      {consult ? 'Consult via WhatsApp' : 'Inquire via WhatsApp'}
    </a>
  );
};

export default WhatsAppOrderBtn;
