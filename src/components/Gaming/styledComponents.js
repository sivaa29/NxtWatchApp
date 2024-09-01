import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const GamingContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const GamingContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  @media screen and (min-width: 768px) {
    width: 75vw;
  }
`

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#ebebeb'};
`

export const GamingIconCard = styled.div`
  border-radius: 30px;
  height: 60px;
  width: 60px;
  padding: 18px;
  margin-right: 15px;
  background-color: ${props =>
    props.theme === 'dark' ? '#000000' : '#e2e8f0'};
`

export const GamingHeaderText = styled.h1`
  font-family: Roboto;
  font-size: 22px;
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
`

export const GamingContent = styled.ul`
  padding: 10px;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const FailureViewContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureViewBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FailureImage = styled.img`
  height: 250px;
  width: 300px;
`

export const FailureHeading = styled.h1`
  width: 280px;
  text-align: center;
  font-family: roboto;
  margin-bottom: 0;
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`

export const FailureText = styled.p`
  width: 280px;
  text-align: center;
  font-family: roboto;
  font-size: 12px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#475569')};
`

export const FailureRetryButton = styled.button`
  height: 30px;
  width: 70px;
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 4px;
  border-width: 0;
  cursor: pointer;
`

/*

export const IconButton = styled.button``


*/
