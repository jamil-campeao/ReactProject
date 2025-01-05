import styled from "styled-components";

export const SubTitulo = styled.h2`
    width: 100%;
    padding: 30px;
    background-color: ${props => props.corFundo || '#FFF'};
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '20px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`