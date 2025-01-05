import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubTitulo } from '../componentes/SubTitulo';

// Container principal da página
const AppContainer = styled.div`
    width: 100vw;
    height: auto; /* Ajusta para conteúdo dinâmico */
    min-height: 100vh; /* Garante que ocupe a tela toda caso o conteúdo seja pequeno */
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

// Título principal
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
`;

// Subtítulo estilizado
const SubTituloEstilizado = styled(SubTitulo)`
    max-width: 800px;
    color: #FFF;
    line-height: 1.8;
    font-size: 18px;
    text-align: justify;
    background-color: rgba(0, 47, 82, 0.8); /* Fundo semi-transparente */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function Sobre() {
    return (
        <AppContainer>
            <Titulo>Sobre a Helter Books</Titulo>
            <SubTituloEstilizado corFundo="#002F52 35%" cor="#FFF">
                Na Helter Books, acreditamos que cada livro carrega um mundo inteiro de possibilidades, histórias e conhecimentos. Fundada por apaixonados por literatura, nossa missão é simples: conectar leitores com os títulos que realmente importam para suas vidas.
                <br /><br />
                Desde romances clássicos até os lançamentos mais esperados, nossa livraria online foi projetada para oferecer uma experiência de compra prática, acessível e, acima de tudo, inspiradora. Aqui, valorizamos a diversidade literária, promovendo autores consagrados e independentes em igual medida, porque sabemos que grandes histórias podem surgir de qualquer lugar.
                <br /><br />
                Nosso nome, Helter Books, reflete nosso compromisso com o inesperado, com o prazer de explorar prateleiras – ainda que virtuais – sem saber qual tesouro será encontrado. É esse espírito de descoberta que queremos levar até você, onde quer que esteja.
                <br /><br />
                Além de uma seleção cuidadosa de livros, também nos dedicamos a criar uma comunidade de leitores. Através de clubes de leitura online, resenhas exclusivas e eventos com autores, transformamos a paixão por livros em algo vivo e compartilhável.
                <br /><br />
                Seja você um ávido devorador de histórias, um estudante em busca de aprendizado ou alguém que simplesmente gosta de se perder em boas páginas, a Helter Books é o lugar perfeito para encontrar o próximo capítulo da sua jornada literária.
                <br /><br />
                Entre e descubra um mundo de palavras feito para você.
            </SubTituloEstilizado>
        </AppContainer>
    );
}

export default Sobre;
