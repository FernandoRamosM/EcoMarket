import React, { useEffect, useState } from 'react';

const Hora = () => {
  const [hora, setHora] = useState('');

  useEffect(() => {
    const updateHora = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setHora(formattedTime);
    };

    updateHora();
    const timer = setInterval(updateHora, 1000);
    return () => clearInterval(timer);
  }, []);

  return <h4>Hora: {hora}</h4>;
};

export default Hora;
