import React from 'react';

const WhatsAppOrderBtn = () => {
  return (
    <a
      href={`https://wa.me/2348065855687?text=${encodeURIComponent("Hello Ar Rahmoh, I would like to schedule an appointment.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success w-100 py-2.5 fw-bold text-uppercase d-flex align-items-center justify-content-center gap-2 border-0 shadow-sm transition-all"
      style={{
        background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
        borderRadius: '0.75rem',
        fontSize: '0.875rem'
      }}
    >
      CONSULT VIA WHATSAPP
    </a>
  );
};

export default WhatsAppOrderBtn;
