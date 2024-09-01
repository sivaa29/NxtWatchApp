import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const SavedVideosContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const SavedVideosContentContainer = styled.div`
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

export const SavedVideosHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#ebebeb'};
`

export const SavedVideoIconCard = styled.div`
  border-radius: 30px;
  height: 60px;
  width: 60px;
  padding: 18px;
  margin-right: 15px;
  background-color: ${props =>
    props.theme === 'dark' ? '#000000' : '#e2e8f0'};
`

export const SavedVideosHeaderText = styled.h1`
  font-family: Roboto;
  font-size: 22px;
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
`

export const SavedVideosContent = styled.ul`
  padding: 20px;
  margin: 0;
  list-style-type: none;
`

/*

export const SavedVideosContent = styled.div``





*/

export const SavedVideosFailureViewContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SavedVideosFailureViewBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SavedVideosFailureImage = styled.img`
  height: 250px;
  width: 300px;
`

export const SavedVideosFailureHeading = styled.h1`
  font-weight: bold;
  text-align: center;
  font-family: roboto;
  margin-bottom: 0;
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`

export const SavedVideosFailureText = styled.p`
  text-align: center;
  font-family: roboto;
  font-size: 12px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#475569')};
`
