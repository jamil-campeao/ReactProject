import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 25px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg 
                src={logo} 
                alt='Logo da empresa' 
            />
            <p><strong>Helter</strong>Books</p>
        </LogoContainer>
    )
}
export default Logo;