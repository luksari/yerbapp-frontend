import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color:  ${({ theme }) => theme.colors.mainBackground} ;
`;


export const FooterMiddle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

export const Column1 = styled.div`
  flex: 1;
  margin: 0;
  ul{
      margin: 0;
      list-style-type: none;
      text-decoration: none;}
`;

export const Column2 = styled.div`
flex:1;
margin: 0;
ul{
  margin: 0;
      list-style-type: none;
      text-decoration: none;}
`;

export const Column3 = styled.div`
  margin: 0;
flex:1;
ul{
      list-style-type: none;
      text-decoration: none;}
`;

export const Bottom = styled.section`
`;
