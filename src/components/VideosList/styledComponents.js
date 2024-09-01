import styled from 'styled-components'

export const VideosLi = styled.li`
  width: 100%;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    margin-right: 10px;
    width: 48%;
  }
  @media screen and (min-width: 992px) {
    margin-right: 8px;
    width: 32%;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
`

export const VideosDetails = styled.div`
  display: flex;
`

export const ProfileImageUrl = styled.img`
  height: 30px;
  width: 30px;
  margin: 10px;
  align-self: flex-start;
`

export const VideoDescription = styled.div``

export const Title = styled.p`
  margin: 2px;
  font-family: roboto;
  font-size: 12px;
  font-weight: 450;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`
export const VideoContent = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`

export const VideoContentText = styled.p`
  font-family: roboto;
  font-size: 10px;
  margin-right: 5px;
  color: #475569;
  @media screen and (min-width: 576px) {
    margin: 3px;
  }
`

export const VideoViewsAndPublished = styled.div`
  display: flex;
`

/*

export const DotSpan = styled.span``


*/
