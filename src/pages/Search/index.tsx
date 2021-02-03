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
    </div>
  )
}

export default Search