import './estilo.css'
import logo from '../../imagens/logo.svg'
function Logo() {
    return (
        <div className='logo'>
            <img src={logo} 
            alt='Logo da empresa' 
            className='logo-img'
            
            >
            </img>
            <p><strong>Helter</strong>Books</p>
        </div>
    )
}
export default Logo;