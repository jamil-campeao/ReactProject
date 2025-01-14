import styled from 'styled-components';
import { Link } from 'react-router-dom';

const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'SOBRE']

const OpcoesContainer = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OpcoesHeader() {
    return (
        <OpcoesContainer>
            { textOpcoes.map( (texto) => (
            <Link to={`/${texto.toLowerCase()}`}>
                <Opcao><p>{texto}</p></Opcao>
            </Link>
        ) ) }
      </OpcoesContainer>
    )
}

export default OpcoesHeader;