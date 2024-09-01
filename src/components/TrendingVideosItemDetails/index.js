import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {
  TrendingVideosLi,
  TrendingVideosThumbnailImg,
  TrendingVideosDetails,
  TrendingVideosProfileImageUrl,
  TrendingVideosDescription,
  TrendingVideosTitle,
  TrendingVideoContent,
  TrendingVideoContentText,
  TrendingViewsAndPublished,
} from './styledComponents'

import './index.css'

const TrendingVideosItemDetails = props => {
  const {trendingVideosData} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = trendingVideosData

  const date = formatDistanceToNow(new Date(publishedAt))
  const newDate = date.split(' ')
  newDate.shift()
  const convertedDate = newDate.join(' ')

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
                <TrendingVideosLi>
                  <Link
                    to={`/videos/${id}`}
                    className="trendingvideo-link"
                    onClick={() => changeActiveMenu('INITIAL')}
                  >
                    <TrendingVideosThumbnailImg
                      src={thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <TrendingVideosDetails>
                      <TrendingVideosProfileImageUrl
                        src={profileImageUrl}
                        alt="channel logo"
                      />
                      <TrendingVideosDescription>
                        <TrendingVideosTitle theme={theme}>
                          {title}
                        </TrendingVideosTitle>
                        <TrendingVideoContent>
                          <TrendingVideoContentText>
                            {name}
                          </TrendingVideoContentText>
                          <TrendingViewsAndPublished>
                            <TrendingVideoContentText>
                              {viewCount} views
                            </TrendingVideoContentText>
                            <TrendingVideoContentText>
                              {convertedDate} ago
                            </TrendingVideoContentText>
                          </TrendingViewsAndPublished>
                        </TrendingVideoContent>
                      </TrendingVideosDescription>
                    </TrendingVideosDetails>
                  </Link>
                </TrendingVideosLi>
              )
            }}
          </ActiveMenuContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideosItemDetails
