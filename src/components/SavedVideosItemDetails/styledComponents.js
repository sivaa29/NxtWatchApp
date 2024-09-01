import styled from 'styled-components'

export const SavedVideosLi = styled.li`
  margin-bottom: 20px;
`

export const SavedVideosThumbnailImg = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    margin-right: 20px;
    width: 300px;
    height: 160px;
  }
`

export const SavedVideosDetails = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    height: 160px;
  }
`

export const SavedVideosProfileImageUrl = styled.img`
  height: 30px;
  width: 30px;
  margin: 10px;
  align-self: flex-start;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const SavedVideosDescription = styled.div``

export const SavedVideosTitle = styled.p`
  margin: 1px;
  font-family: roboto;
  font-size: 14px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const SavedVideosContent = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`

export const SavedVideosContentText = styled.p`
  font-family: roboto;
  font-size: 10px;
  margin-right: 5px;
  color: #475569;
  @media screen and (min-width: 576px) {
    margin: 3px;
  }
`

export const SavedVideosViewsAndPublished = styled.div`
  display: flex;
`

/*

export const DotSpan = styled.span``


*/
