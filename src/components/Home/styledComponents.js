import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const HomePopupContentContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 75vw;
  }
`

export const PopupContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 35vh;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`
export const PopupDetails = styled.div`
  align-self: flex-start;
`

export const CloseButton = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const WebsiteLogo = styled.img`
  width: 100px;
  height: 30px;
`

export const PremiumPlan = styled.p`
  font-family: roboto;
`

export const GetItNowButton = styled.button`
  font-family: roboto;
`

export const HomeContentContainer = styled.div`
  padding: 10px;
  height: 100vh;
  overflow: auto;
`

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 39vw;
  }
`

export const SearchInput = styled.input`
  outline: none;
  border: 1px solid #616e7c;
  width: 80vw;
  height: 25px;
  padding-left: 10px;
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f9f9f9'};
  @media screen and (min-width: 768px) {
    width: 30vw;
  }
`

export const SearchIconButton = styled.button`
  width: 12vw;
  height: 25px;
  border: 1px solid #616e7c;
  cursor: pointer;
  background-color: ${props =>
    props.theme === 'dark' ? '#7e858e' : '#ebebeb'};
  @media screen and (min-width: 768px) {
    width: 8vw;
  }
`
//

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

//

export const VideosUl = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

//

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

export const FailureRetryButton2 = styled.button`
  height: 30px;
  width: 70px;
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 4px;
  border-width: 0;
  cursor: pointer;
`
