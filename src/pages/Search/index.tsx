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
        <img src="https://avatars.githubusercontent.com/u/60019382?s=460&u=b336f565f0efc9a7a666c929458b0715b84f4c19&v=4" alt="github-user"/>
        <Button text="Ver perfil" />

      </div>
    </div>
  )
}

export default Search