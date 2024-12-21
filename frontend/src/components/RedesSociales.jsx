import React from 'react';
import '../assets/styles/RedesSociales.css';

const RedesSociales = () => {
  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.2)';
    e.target.style.filter = 'grayscale(0%)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.filter = 'grayscale(100%)';
  };

  return (
    <div className="redes-sociales">
      <img src="/src/images/Facebook.svg" alt="Facebook"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>
      <img
        src="/src/images/Instagram.svg"
        alt="Instagram"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img
        src="/src/images/LinkedIn.svg"
        alt="LinkedIn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img
        src="/src/images/YT.svg"
        alt="YouTube"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default RedesSociales;
