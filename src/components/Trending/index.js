import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import DesktopSidebar from '../DesktopSidebar'
import TrendingVideosItemDetails from '../TrendingVideosItemDetails'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingBgContainer,
  TrendingContainer,
  TrendingContentContainer,
  LoaderContainer,
  TrendingHeader,
  TrendingIconCard,
  TrendingHeaderText,
  TrendingContent,
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

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideosList: []}

  componentDidMount = () => {
    this.getTrendingVideosDetails()
  }

  getTrendingVideosDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'

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
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  trendingLoaderView = () => (
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

  trendingSuccessView = () => {
    const {trendingVideosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <>
              <TrendingHeader theme={theme}>
                <TrendingIconCard theme={theme}>
                  <HiFire size="25" color="red" />
                </TrendingIconCard>
                <TrendingHeaderText theme={theme}>Trending</TrendingHeaderText>
              </TrendingHeader>
              <TrendingContent theme={theme}>
                {trendingVideosList.map(each => (
                  <TrendingVideosItemDetails
                    key={each.id}
                    trendingVideosData={each}
                  />
                ))}
              </TrendingContent>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  trendingFailureView = () => (
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
                onClick={this.getTrendingVideosDetails}
              >
                Retry
              </FailureRetryButton>
            </FailureViewBody>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  trendingApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.trendingLoaderView()
      case apiStatusConstants.success:
        return this.trendingSuccessView()
      case apiStatusConstants.failure:
        return this.trendingFailureView()
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
            <TrendingBgContainer data-testid="trending" theme={theme}>
              <Header />
              <TrendingContainer>
                <DesktopSidebar />
                <TrendingContentContainer theme={theme}>
                  {this.trendingApiStatus()}
                </TrendingContentContainer>
              </TrendingContainer>
            </TrendingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
