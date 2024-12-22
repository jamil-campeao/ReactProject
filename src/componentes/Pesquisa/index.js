import Input from '../Input';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getLivros } from '../../servicos/livros';
import { postLivrosFavorito } from '../../servicos/favoritos';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 400px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [ livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, []);

    async function fetchLivros() {
        const livrosAPI = await getLivros();
        setLivros(livrosAPI); 
    }

    async function insertFavorito(id) {
        await postLivrosFavorito(id);
        alert(`Livro de id: ${id} inserido!`);
    }


    function fazPesquisa(evento) {
        const textoDigitado = evento.target.value
        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
        setLivrosPesquisados(resultadoPesquisa)
    }
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => fazPesquisa(evento)}
            />
            {livrosPesquisados.map(livro => (
                <Resultado onClick={() => insertFavorito(livro.id)}>
                    <p>Nome da Obra: {livro.nome}</p>
                    <img src={livro.src}></img>
                    <p>Autor: {livro.autor}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}
export default Pesquisa;