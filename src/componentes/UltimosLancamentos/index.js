import {livros} from './dadosUltimosLancamentos';
import styled from 'styled-components';
import { Titulo } from '../Titulo';
import imgLivro from '../../imagens/revolucaoDosBichos.jpg';
import CardRecomenda from '../CardRecomenda';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
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
        <Titulo cor='#EB9B00' tamanhoFonte='22px'>
            ÚLTIMOS LANÇAMENTOS
        </Titulo>
        <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src}></img>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo='A revolução dos bichos'
                subtitulo='Um conto de fadas'
                descricao='Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX.'
                img={imgLivro}
            />
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos;