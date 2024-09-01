import styled from 'styled-components'

export const TrendingVideosLi = styled.li`
  margin-bottom: 20px;
`

export const TrendingVideosThumbnailImg = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    margin-right: 20px;
    width: 300px;
    height: 160px;
  }
`

export const TrendingVideosDetails = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    height: 160px;
  }
`

export const TrendingVideosProfileImageUrl = styled.img`
  height: 30px;
  width: 30px;
  margin: 10px;
  align-self: flex-start;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TrendingVideosDescription = styled.div``

export const TrendingVideosTitle = styled.p`
  margin: 1px;
  font-family: roboto;
  font-size: 14px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const TrendingVideoContent = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`

export const TrendingVideoContentText = styled.p`
  font-family: roboto;
  font-size: 10px;
  margin-right: 5px;
  color: #475569;
  @media screen and (min-width: 576px) {
    margin: 3px;
  }
`

export const TrendingViewsAndPublished = styled.div`
  display: flex;
`

/*

export const DotSpan = styled.span``




*/
