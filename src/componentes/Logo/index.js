import './estilo.css'
import logo from '../../imagens/logo.svg'
function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='Logo da empresa'></img>
            <p><strong>Alura Books</strong></p>
        </div>
    )
}
export default Logo;