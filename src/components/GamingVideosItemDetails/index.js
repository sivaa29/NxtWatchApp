import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {
  GamingVideosLi,
  GamingVideosThumbnailImg,
  GamingVideosTitle,
  GamingVideosViews,
} from './styledComponents'

import './index.css'

const GamingVideosItemDetails = props => {
  const {gamingVideosData} = props
  const {id, thumbnailUrl, title, viewCount} = gamingVideosData

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <ActiveMenuContext.Consumer>
            {activeValue => {
              const {changeActiveMenu} = activeValue

              return (
                <GamingVideosLi>
                  <Link
                    to={`/videos/${id}`}
                    className="gamingvideo-link"
                    onClick={() => changeActiveMenu('INITIAL')}
                  >
                    <GamingVideosThumbnailImg
                      src={thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <GamingVideosTitle theme={theme}>{title}</GamingVideosTitle>
                    <GamingVideosViews theme={theme}>
                      {viewCount} Watching Worldwide
                    </GamingVideosViews>
                  </Link>
                </GamingVideosLi>
              )
            }}
          </ActiveMenuContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideosItemDetails
