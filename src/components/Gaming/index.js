import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {GiConsoleController} from 'react-icons/gi'

import Header from '../Header'
import DesktopSidebar from '../DesktopSidebar'
import GamingVideosItemDetails from '../GamingVideosItemDetails'

import ThemeContext from '../../context/ThemeContext'

import {
  GamingBgContainer,
  GamingContainer,
  GamingContentContainer,
  LoaderContainer,
  GamingHeader,
  GamingIconCard,
  GamingHeaderText,
  GamingContent,
  FailureViewContainer,
  FailureViewBody,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideosList: []}

  componentDidMount = () => {
    this.getGamingVideosDetails()
  }

  getGamingVideosDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  gamingLoaderView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LoaderContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  gamingSuccessView = () => {
    const {gamingVideosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <>
              <GamingHeader theme={theme}>
                <GamingIconCard theme={theme}>
                  <GiConsoleController size="25" color="red" />
                </GamingIconCard>
                <GamingHeaderText theme={theme}>Gaming</GamingHeaderText>
              </GamingHeader>
              <GamingContent theme={theme}>
                {gamingVideosList.map(each => (
                  <GamingVideosItemDetails
                    key={each.id}
                    gamingVideosData={each}
                  />
                ))}
              </GamingContent>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  gamingFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'

        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureViewBody>
              <FailureImage src={failureImg} alt="failure view" />
              <FailureHeading theme={theme}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureText theme={theme}>
                We are having some trouble to complete your request. Please try
                again.
              </FailureText>
              <FailureRetryButton
                type="button"
                onClick={this.getGamingVideosDetails}
              >
                Retry
              </FailureRetryButton>
            </FailureViewBody>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  gamingApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.gamingLoaderView()
      case apiStatusConstants.success:
        return this.gamingSuccessView()
      case apiStatusConstants.failure:
        return this.gamingFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <GamingBgContainer data-testid="gaming" theme={theme}>
              <Header />
              <GamingContainer>
                <DesktopSidebar />
                <GamingContentContainer theme={theme}>
                  {this.gamingApiStatus()}
                </GamingContentContainer>
              </GamingContainer>
            </GamingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
