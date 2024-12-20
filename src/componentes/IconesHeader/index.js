import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`
const Icones = styled.ul`
  display: flex;
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones>
        {icones.map( (icone) => (
          <Icone><img src={icone}></img></Icone>
        ) )}
      </Icones>
    )
}
export default IconesHeader;