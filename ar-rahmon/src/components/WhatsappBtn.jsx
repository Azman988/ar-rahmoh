import React from 'react';

const WhatsAppOrderBtn = ({ productName }) => {
  const phoneNumber = "2348065855687";

  const message = productName ? `Hello Ar-Rahmon, I am interested in the ${productName}. Please provide more details.` : "Hello Doct., I would like to schedule an appointment.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn"
      style={{ backgroundColor: '#25D366', color: 'white', border: 'none', fontSize: 15, padding: 10 }}
    >
      {productName ? 'Inquire via WhatsApp' : 'Consult via WhatsApp'}
    </a>
  );
};

export default WhatsAppOrderBtn;
