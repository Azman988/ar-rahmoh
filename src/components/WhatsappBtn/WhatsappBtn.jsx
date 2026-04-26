import React from 'react';
import './WhatsappBtn.css'

const WhatsAppOrderBtn = ({ productName }) => {
  const phoneNumber = "2348065855687";

  const message = productName ? `Hello Ar-Rahmoh, I am interested in purchasing ${productName} product. Please provide more details.` : "Hello Doct., I would like to schedule an appointment.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn wa-link"
    >
      {productName ? 'Purchase Now' : 'Consult via WhatsApp'}
    </a>
  );
};

export default WhatsAppOrderBtn;
