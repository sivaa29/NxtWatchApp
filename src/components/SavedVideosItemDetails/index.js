import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {
  SavedVideosLi,
  SavedVideosThumbnailImg,
  SavedVideosDetails,
  SavedVideosProfileImageUrl,
  SavedVideosDescription,
  SavedVideosTitle,
  SavedVideosContent,
  SavedVideosContentText,
  SavedVideosViewsAndPublished,
} from './styledComponents'

import './index.css'

const SavedVideosItemDetails = props => {
  const {savedVideosData} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = savedVideosData

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
                <SavedVideosLi>
                  <Link
                    to={`/videos/${id}`}
                    className="savevideo-link"
                    onClick={() => changeActiveMenu('INITIAL')}
                  >
                    <SavedVideosThumbnailImg
                      src={thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <SavedVideosDetails>
                      <SavedVideosProfileImageUrl
                        src={profileImageUrl}
                        alt="channel logo"
                      />
                      <SavedVideosDescription>
                        <SavedVideosTitle theme={theme}>
                          {title}
                        </SavedVideosTitle>
                        <SavedVideosContent>
                          <SavedVideosContentText>
                            {name}
                          </SavedVideosContentText>
                          <SavedVideosViewsAndPublished>
                            <SavedVideosContentText>
                              {viewCount} views
                            </SavedVideosContentText>
                            <SavedVideosContentText>
                              {convertedDate} ago
                            </SavedVideosContentText>
                          </SavedVideosViewsAndPublished>
                        </SavedVideosContent>
                      </SavedVideosDescription>
                    </SavedVideosDetails>
                  </Link>
                </SavedVideosLi>
              )
            }}
          </ActiveMenuContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideosItemDetails
