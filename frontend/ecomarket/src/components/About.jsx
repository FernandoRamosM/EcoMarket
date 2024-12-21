import React from 'react';
import '../assets/styles/About.css';
import Logo from '../assets/images/logo-ecomarket.svg';

const About = () => {
  return (
    <div className='about'>
      <header className="header header-inicio">
        <div className="contenido-header contenedor" style={{ backgroundImage: "url('/static/img/3.jpg')", height: '650px' }}>
          <div className="barra">
            <div className="logo">
              <img src={Logo} alt="logo cafeteria" />
            </div>
            <nav className="nav-principal">
                <a className="activo" href="/home">Inicio</a>
                <a href="/ecomarket/nosotros">Nosotros</a>
                <a href="/ecomarket/productos">Productos</a>
                <a href="/ecomarket/blog">Blog</a>
                <a href="/login/cerrar">Cerrar Sesión</a>
            </nav>
          </div>
          <div className="texto-header">
            <h1>Sobre Nosotros:</h1>
          </div>
        </div>
      </header>

      <main>
        <article className="partedos">
          <div className="uno">
            <figure>
              <img src="../../public/images/NOSOTROS - tienda.png" alt="Tienda Naturaleza Viva" />
            </figure>
            <div className="agrupacion">
              <h2 style={{ color: 'green', fontSize: '25px' }}>Bienvenid@s:</h2>
              <p>En EcoMarket, nos dedicamos a ofrecer superalimentos de la más alta calidad para potenciar tu bienestar y salud, proporcionando productos naturales, ricos en nutrientes y respaldados por la ciencia para ayudarte a vivir una vida plena y saludable.</p>

              <h3>¿Por qué elegirnos?</h3>
              <div className="separadorde">
                <div className="separar1">
                  <h4>Calidad Superior</h4>
                  <h4>Sostenibilidad</h4>
                </div>
                <div className="separar2">
                  <h4>Innovación y ciencia</h4>
                  <h4>Compromiso con la Salud</h4>
                </div>
              </div>
              <h2>Nuestros Productos</h2>
              <p>Descubre nuestra amplia gama de superalimentos, desde semillas de chía y quinoa, hasta polvos de espirulina y matcha. Cada producto es una fuente concentrada de nutrientes esenciales, diseñada para complementar tu dieta y mejorar tu bienestar general.</p>
            </div>
          </div>
        </article>

        <article className="nosotros1">
          <div className="agrupacion">
            <div className="uno">
              <h1 style={{ color: 'green', fontSize: '25px' }}>MISIÓN:</h1>
              <p style={{ fontSize: '20px' }}>
                <h2>Proveer Superalimentos de Calidad:</h2> Ofrecer productos naturales y nutritivos que apoyen el bienestar físico y mental de nuestros clientes.
                <br /><br />
                <h2>Promover la Salud Integral:</h2> Fomentar una vida saludable a través de la alimentación consciente y el consumo de superalimentos.
                <br /><br />
                <h2>Sostenibilidad y Ética:</h2> Adoptar prácticas sostenibles y éticas en toda nuestra cadena de suministro, desde la producción hasta la entrega.
                <br /><br />
                <h2>Promover la Salud Integral:</h2> Fomentar una vida saludable a través de la alimentación consciente y el consumo de superalimentos.
              </p>
            </div>
            <div className="dos">
              <h1 style={{ color: 'green', fontSize: '25px' }}>VISIÓN:</h1>
              <p style={{ fontSize: '20px' }}>
                <h2>Liderar en el Mercado de Superalimentos:</h2> Ser reconocidos como la empresa líder en calidad e innovación en el sector de superalimentos a nivel global.
                <br /><br />
                <h2>Impacto Positivo en la Sociedad:</h2> Transformar vidas a través de productos que promuevan la salud y el bienestar.
                <br /><br />
                <h2>Sostenibilidad Continua:</h2> Continuar mejorando nuestras prácticas sostenibles y contribuir al cuidado del medio ambiente.
                <br /><br />
                <h2>Inspirar un Estilo de Vida Saludable:</h2> Ser una fuente de inspiración y conocimiento para aquellos que buscan mejorar su salud y bienestar a través de la alimentación.
              </p>
            </div>
          </div>
        </article>

        <article className="partetres">
          <div className="seccion1">
            <div className="division1">
              <figure>
                <img src="../../public/images/icono entrega segura.png" alt="Entrega Segura" />
              </figure>
              <h2>Entrega Segura</h2>
              <p>Con una mayor seguridad de control de seguimiento</p>
            </div>
            <div className="division2">
              <figure>
                <img src="../../public/images/icono pago confiable.png" alt="Pago Confiable" />
              </figure>
              <h2>100% Confiable</h2>
              <p>Referencias bancarias, Yape o Plin</p>
            </div>
          </div>
          <figure className="imagen1">
            <img src="../../public/images/WhatsApp Image 2024-07-05 at 03.03.35.jpeg" alt="Naturaleza Viva" />
          </figure>
          <div className="seccion2">
            <div className="division1">
              <figure>
                <img src="../../public/images/producto.png" alt="Producto Puro" />
              </figure>
              <h2>Productos 100% puros</h2>
              <p>Productos de alta calidad sin mezcla de otras harinas</p>
            </div>
            <div className="division2">
              <figure>
                <img src="../../public/images/icono soporte amigable.png" alt="Soporte Amigable" />
              </figure>
              <h2>Soporte Amigable</h2>
              <p>Atención especializada vía llamadas y WhatsApp</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default About;
