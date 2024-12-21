import React, { useEffect, useState } from 'react';

const Fecha = () => {
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setFecha(formattedDate);
  }, []);

  return <h4>Fecha: {fecha}</h4>;
};

export default Fecha;
