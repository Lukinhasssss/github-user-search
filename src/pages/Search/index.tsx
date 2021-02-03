import Button from '../../core/components/Button'
import './styles.css'

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-content">
        <h1 className="search-title">Encontre um perfil Github</h1>
        
        <input type="text"/>

        <Button text="Encontrar" />

      </div>
    </div>
  )
}

export default Search