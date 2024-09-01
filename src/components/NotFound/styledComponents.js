import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const NotFoundContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f9f9f9'};
  @media screen and (min-width: 768px) {
    width: 75vw;
  }
`
export const NotFoundBody = styled.div``

export const NotFoundImage = styled.img`
  height: 250px;
  width: 300px;
`

export const NotFoundHeading = styled.h1`
  width: 280px;
  text-align: center;
  font-family: roboto;
  margin-bottom: 0;
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`

export const NotFoundText = styled.p`
  width: 280px;
  text-align: center;
  font-family: roboto;
  font-size: 12px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#475569')};
`

/*

export const NotFoundBody = styled.div``


*/
