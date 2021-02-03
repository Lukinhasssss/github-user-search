import { Link } from 'react-router-dom'

import './styles.css'

type Props = {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <Link to="/search" className="main-button">{ text }</Link>
  )
}

export default Button