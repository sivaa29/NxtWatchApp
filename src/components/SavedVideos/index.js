import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import DesktopSidebar from '../DesktopSidebar'

import SavedVideosItemDetails from '../SavedVideosItemDetails'

import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'

import {
  SavedVideosBgContainer,
  SavedVideosContainer,
  SavedVideosContentContainer,
  SavedVideosHeader,
  SavedVideoIconCard,
  SavedVideosHeaderText,
  SavedVideosContent,
  SavedVideosFailureViewContainer,
  SavedVideosFailureViewBody,
  SavedVideosFailureImage,
  SavedVideosFailureHeading,
  SavedVideosFailureText,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'

      const savedVideoFailureView = () => (
        <SavedVideosFailureViewContainer>
          <SavedVideosFailureViewBody>
            <SavedVideosFailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <SavedVideosFailureHeading theme={theme}>
              No saved videos found
            </SavedVideosFailureHeading>
            <SavedVideosFailureText theme={theme}>
              You can save your videos while watching them
            </SavedVideosFailureText>
          </SavedVideosFailureViewBody>
        </SavedVideosFailureViewContainer>
      )

      const savedVideoSuccessView = savedVideosList => (
        <>
          <SavedVideosHeader theme={theme}>
            <SavedVideoIconCard theme={theme}>
              <HiFire size="25" color="red" />
            </SavedVideoIconCard>
            <SavedVideosHeaderText theme={theme}>
              Saved Videos
            </SavedVideosHeaderText>
          </SavedVideosHeader>
          <SavedVideosContent theme={theme}>
            {savedVideosList.map(each => (
              <SavedVideosItemDetails key={each.id} savedVideosData={each} />
            ))}
          </SavedVideosContent>
        </>
      )

      return (
        <SavedVideosBgContainer data-testid="savedVideos" theme={theme}>
          <Header />
          <SavedVideosContainer>
            <DesktopSidebar />
            <SavedVideosContentContainer theme={theme}>
              <SavedVideosContext.Consumer>
                {activeValue => {
                  const {savedVideosList} = activeValue
                  return (
                    <>
                      {savedVideosList.length === 0
                        ? savedVideoFailureView()
                        : savedVideoSuccessView(savedVideosList)}
                    </>
                  )
                }}
              </SavedVideosContext.Consumer>
            </SavedVideosContentContainer>
          </SavedVideosContainer>
        </SavedVideosBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
