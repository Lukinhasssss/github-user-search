import Button from '../../core/components/Button'
import './styles.css'

const Search = () => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <div className="search-container">
      <div className="search-content">
        <h1 className="search-title">Encontre um perfil Github</h1>
        
        <input
          type="text"
          className="search-input"
          placeholder="Usuário Github"
          onChange={ handleOnChange }
        />

        <Button text="Encontrar" />
      </div>

      <div className="search-result-content">
        <div className="search-result-perfil">
          <img src="https://avatars.githubusercontent.com/u/60019382?s=460&u=b336f565f0efc9a7a666c929458b0715b84f4c19&v=4" alt="Lucas Monteiro" className="search-result-perfil-img"/>

          <a href="https://github.com/Lukinhasssss" target="_blank" rel="noopener noreferrer">
            <Button text="Ver perfil" />
          </a>
        </div>

        <div className="search-result-info">
          <div className="github-info">
            <span>Repositórios públicos: 18</span>
            <span>Seguidores: 5</span>
            <span>Seguindo: 11</span>
          </div>

          <div className="perfil-info">
            <h1>Informações</h1>

            <p><strong>Empresa:</strong> @Nubank</p>
            <p><strong>Website/Blog:</strong> https://github.com/Lukinhasssss</p>
            <p><strong>Localidade:</strong> São Bernardo do Campo - SP</p>
            <p><strong>Membro desde:</strong> 17/01/2020</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search