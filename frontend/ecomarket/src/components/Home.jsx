import React from 'react';
import '../assets/styles/Home.css';
import RedesSociales from './RedesSociales';
import Logo from '../assets/images/logo-ecomarket.svg';

const Home = () => {
  return (
    <div className='home'>
        <header className="header header-inicio">
            <div className="contenido-header contenedor">
                <div className="barra">
                    <div className="logo">
                        <img src={Logo} alt="logo-ecomarket" />
                        Bienvenido <strong>{/* Nombre de usuario */}</strong>
                    </div>
                    <nav className="nav-principal">
                    <a className="activo" href="/home">Inicio</a>
                    <a href="/ecomarket/sobre-nosotros">Nosotros</a>
                    <a href="/ecomarket/productos">Productos</a>
                    <a href="/ecomarket/blog">Blog</a>
                    <a href="/login/cerrar">Cerrar Sesión</a>
                    </nav>
                </div>
                <div className="texto-header">
                    <h1>"NUTRIENDO TU VIDA, UN SUPERMERCADO SALUDABLE A UN CLIP DE DISTANCIA"</h1>
                </div>
            </div>
        </header>

        <main className="contenedor contenido-principal text-center">
            <section className="conoce">
                <h2><span>CONOCE MÁS</span>SOBRE NOSOTROS</h2>
                <p>
                Nos dedicamos a ofrecer productos naturistas de la más alta calidad, diseñados para mejorar tu bienestar
                y promover un estilo de vida saludable. Nuestra misión es proporcionar soluciones naturales y efectivas
                para tus necesidades diarias, utilizando ingredientes puros y sostenibles.
                Desde nuestros inicios, nos hemos comprometido con la transparencia, la integridad y la excelencia en
                cada uno de nuestros productos. Cada artículo en nuestra tienda ha sido cuidadosamente seleccionado y
                elaborado para asegurar que cumpla con los más altos estándares de calidad y eficacia.
                </p>
            </section>

            <section className="iconos">
                <ul className="listado-iconos">
                <li><img src="../../public/images/3.png" alt="icono" /></li>
                <li><img src="../../public/images/4.png" alt="icono" /></li>
                <li><img src="../../public/images/4.jpg" alt="icono" /></li>
                </ul>
            </section>

            <section className="estilos" style={{ marginBottom: '2rem' }}>
                <ul className="listado-estilos">
                    <li><img src="../../public/images/pr8.webp" alt="icono" /></li>
                    <li><img src="../../public/images/pr1.jpeg" alt="icono" /></li>
                    <li><img src="../../public/images/pr10.jpg" alt="icono" /></li>
                </ul>
            </section>

            <section className="estilos" style={{ marginBottom: '2rem' }}>
                <ul className="listado-estilos">
                <li><img src="../../public/images/pr3.jpg" alt="icono vida" /></li>
                <li><img src="../../public/images/pr7.webp" alt="icono vida1" /></li>
                <li><img src="../../public/images/pr12.jpg" alt="icono vida2" /></li>
                </ul>
            </section>

            <section className="estilos" style={{ marginBottom: '2rem' }}>
                <ul className="listado-largo">
                    <li>
                        <img src="../../public/images/abajo.jpg" alt="icono largo" className="imagen-ancho-completo" />
                    </li>
                </ul>
            </section>

            <div className="imagenes-adicionales">
                <RedesSociales/>
            </div>
        </main>

        <footer className="footer">
            <div className="contenedor contenido-footer bg-white">
                <div className="footer-box ubicacion">
                    <h3>Ubicación</h3>
                    <p>AV. Gerardo Unger #6543</p>
                    <p>Meza Redonda</p>
                    <p>Independencia</p>
                </div>
                <div className="footer-box reservacion">
                    <h3>Reservación</h3>
                    <p>Tel. +51 989454101</p>
                    <p>Tel. +51 989454101</p>
                    <p>Llamar</p>
                </div>
                <div className="footer-box politica">
                    <h3>Política</h3>
                    <p>Términos y condiciones</p>
                    <p>Cambios y Devoluciones</p>
                    <p>Política de Privacidad</p>
                    <p>Libro de Reclamaciones</p>
                </div>
                <div className="footer-box footer-pago">
                    <h3>Aceptamos</h3>
                    <img src="../../public/images/visa.png" alt="galeria" />
                </div>
            </div>
            <p className="copyright">EcoMarket © 2024 | Tiendas Naturales Perú SAC RUC: 20217654321</p>
        </footer>
    </div>
  );
};

export default Home;