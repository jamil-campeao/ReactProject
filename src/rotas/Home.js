import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Coloca espaço entre os componentes */
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
      </AppContainer>
  );
}

export default Home;