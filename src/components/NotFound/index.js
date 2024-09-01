import Header from '../Header'
import DesktopSidebar from '../DesktopSidebar'

import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundBody,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <>
          <Header />
          <NotFoundContainer>
            <DesktopSidebar />
            <NotFoundContentContainer theme={theme}>
              <NotFoundBody>
                <NotFoundImage src={notFoundImg} alt="not found" />
                <NotFoundHeading theme={theme}>Page Not Found</NotFoundHeading>
                <NotFoundText theme={theme}>
                  we are sorry, the page you requested could not be found.
                </NotFoundText>
              </NotFoundBody>
            </NotFoundContentContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
