import styled from 'styled-components'

export const GamingVideosLi = styled.li`
  margin: 10px;
`

export const GamingVideosThumbnailImg = styled.img`
  height: 200px;
  width: 155px;
`

export const GamingVideosTitle = styled.p`
  margin: 0;
  font-family: roboto;
  font-size: 12px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`

export const GamingVideosViews = styled.p`
  margin: 0;
  font-family: roboto;
  font-size: 8px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#475569')};
  @media screen and (min-width: 576px) {
    font-size: 10px;
  }
`
