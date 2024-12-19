import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Coloca espaço entre os componentes */
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa/>
      </AppContainer>
  );
}

export default Favoritos;