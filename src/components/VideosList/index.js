import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {
  VideosLi,
  ThumbnailImg,
  VideosDetails,
  ProfileImageUrl,
  VideoDescription,
  Title,
  VideoContent,
  VideoContentText,
  VideoViewsAndPublished,
} from './styledComponents'

import './index.css'

const VideosList = props => {
  const {videosData} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videosData

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
                <VideosLi>
                  <Link
                    to={`/videos/${id}`}
                    className="video-link"
                    onClick={() => changeActiveMenu('INITIAL')}
                  >
                    <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
                    <VideosDetails>
                      <ProfileImageUrl
                        src={profileImageUrl}
                        alt="channel logo"
                      />
                      <VideoDescription>
                        <Title theme={theme}>{title}</Title>
                        <VideoContent>
                          <VideoContentText>{name}</VideoContentText>
                          <VideoViewsAndPublished>
                            <VideoContentText>
                              {viewCount} views
                            </VideoContentText>
                            <VideoContentText>
                              {convertedDate} ago
                            </VideoContentText>
                          </VideoViewsAndPublished>
                        </VideoContent>
                      </VideoDescription>
                    </VideosDetails>
                  </Link>
                </VideosLi>
              )
            }}
          </ActiveMenuContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideosList
