import {livros} from './dadosUltimosLancamentos';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 30px;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    margin-top: 0px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    img {
        width: 100px;
        height: 100px;
    }
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
        <Titulo>ÚLTIMOS LANCAMENTOS</Titulo>
        <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src}></img>
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos;