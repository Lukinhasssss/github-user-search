import Button from '../../core/components/Button'

import './styles.css'

const Home = () => {
  return (
    <div className="home-content">
      <h1 className="home-title">
        Desafio do Capítulo 3, <br />
        BootcampDevSuperior
      </h1>

      <p className="home-description">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
      <p className="home-description">Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
      <p className="home-description">Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span className="home-description-email">antforfigma@gmail.com</span></p>

      {/* <p className="home-description">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
        Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
        Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span className="home-description-email">antforfigma@gmail.com</span>
      </p> */}

      <Button text="Começar" />
    </div>
  )
}

export default Home