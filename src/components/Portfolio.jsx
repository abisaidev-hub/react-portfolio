import React from 'react';
import ProjectCard from './ProjectCard';
import { html, css, js, react, reactrouterdom, redux, bootstrap, nodejs, pokedexbg, rickandmortybg, crudusersbg, weatherappbg, ecommercebg } from '../images';
import { useSelector } from 'react-redux';

const Portfolio = () => {

  const isEnglish = useSelector(state => state.isEnglish);

  return (
    <div className="portfolio-body__container">
      <div className='portfolio__container' id='portfolio'>
        <div className="home__sqr fade-in">
          <div className="home__line-bar"></div>
        </div>
        <div className="portfolio__title-and-descritpion fade-in">
          <div className="span__title-marked">
            <span>/</span><h2>{isEnglish ? 'PORTFOLIO' : 'PORTAFOLIO'}</h2>
          </div>
          <p>{isEnglish ? `Take a look at the latest projects I've done!` : '¡Échale un ojo a los últimos proyectos que he hecho!'}</p>
        </div>
        <div className="portfolio__projects-container">
          <div className="portfolio_projects-webview-container">
            <div className="portfolio__projects-first-container">
            <ProjectCard
                link='https://coruscating-alpaca-47dfdf.netlify.app/'
                technologies=
                {
                  <>
                    <img src={react} />
                    <img src={redux} />
                    <img src={reactrouterdom} />
                    <img src={css} />
                    <img src={html} />
                  </>
                }
                name='Pokedex'
                description={isEnglish ? 'Characters library with protected routes' : 'Galería de personajes con rutas protegidas'}
                img=
                {
                  <img src={pokedexbg} />
                }
              />
            </div>
            <div className="portfolio__projects-second-container">
            <ProjectCard
                link='https://idyllic-entremet-e13c00.netlify.app/'
                technologies=
                {
                  <>
                    <img src={react} />
                    <img src={redux} />
                    <img src={reactrouterdom} />
                    <img src={css} />
                    <img src={html} />
                  </>
                }
                name={isEnglish ? "E-commerce" : "E-commerce"}
                description={isEnglish ? 'Digital market to buy products with user authentication' : 'Tienda digital para comprar productos con autenticación de usuario'}
                img=
                {
                  <img src={ecommercebg} />
                }
              />
              <div className="portfolio__projects-pokedex">
                <ProjectCard
                  link='https://coruscating-alpaca-47dfdf.netlify.app/'
                  technologies=
                  {
                    <>
                      <img src={react} />
                      <img src={redux} />
                      <img src={reactrouterdom} />
                      <img src={css} />
                      <img src={html} />
                    </>
                  }
                  name='Pokedex'
                  description={isEnglish ? 'Characters library with protected routes' : 'Galería de personajes con rutas protegidas'}
                  img=
                  {
                    <img src={pokedexbg} />
                  }
                />
              </div>
              <ProjectCard
              link='https://dapper-gaufre-dd4252.netlify.app/'
                technologies=
                {
                  <>
                    <img src={react} />
                    <img src={css} />
                    <img src={html} />
                  </>
                }
                name='Wiki Rick & Morty'
                description={isEnglish ? 'Characters library made with React' : 'Galería de personajes hecha con React'}
                img=
                {
                  <img src={rickandmortybg} />
                }
              />
            </div>
          </div>
          <div className="divider-line"></div>
          <div className="portfolio__more-projects-container fade-in">
            <div className="more-projects__title-and-description">
              <h3>{isEnglish ? 'More projects' : 'Más proyectos'}</h3>
            </div>
            <div className="more-projects__container fade-in">
              <ProjectCard
                link='https://effortless-pithivier-f1c011.netlify.app/'
                technologies=
                {
                  <>
                    <img src={react} />
                    <img src={css} />
                    <img src={html} />
                  </>
                }
                name={isEnglish ? 'Users CRUD' : 'CRUD Usuarios'}
                description={isEnglish ? 'To create, edit and delete users' : 'Para crear, editar y eliminar usuarios'}
                img=
                {
                  <img src={crudusersbg} />
                }
              />
              <ProjectCard
                link='https://bright-gelato-af26c0.netlify.app/'
                technologies=
                {
                  <>
                    <img src={react} />
                    <img src={css} />
                    <img src={html} />
                  </>
                }
                name={isEnglish ? 'Weather App' : 'Clima App'}
                description={isEnglish ? 'Weather conditions in real time, based on your localization.' : 'Condiciones del clima en tiempo real, basadas en tu localización'}
                img={
                  <img src={weatherappbg} />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;