import styled from 'styled-components'

export const VideoItemDetailsBgContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const VideoItemDetailsContentContainer = styled.div`
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
export const VideoContainer = styled.div`
  margin: 10px;
`
export const VideoReactPlayer = styled.div`
  height: 50%;
  @media screen and (min-width: 768px) {
    height: 90%;
  }
`

export const VideoTitle = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => (props.theme === 'dark' ? '#ebebeb' : '#000000')};
`
export const ViewsAndLikeSaveContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoViewsAndPublishedText = styled.p`
  font-family: Roboto;
  font-size: 10px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#475569')};
`

export const LikeDislikeSaveContainer = styled.div`
  display: flex;
  align-items: center;
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  font-family: Roboto;
  font-size: 12px;
  width: 70px;
  border: none;
  cursor: pointer;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
`

export const ProfileNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`

export const NameSubscribersCard = styled.div`
  margin-top: 10px;
`

export const NameText = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.theme === 'dark' ? '#ebebeb' : '#000000')};
  margin: 0;
`

export const SubscriberText = styled.p`
  font-family: Roboto;
  font-size: 10px;
  margin-top: 5px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#475569')};
`

export const DescriptionText = styled.p`
  font-family: Roboto;
  font-size: 11px;
  color: ${props => (props.theme === 'dark' ? '#ebebeb' : '#000000')};
  @media screen and (min-width: 768px) {
    padding-left: 60px;
  }
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
