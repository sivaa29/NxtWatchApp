import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import DesktopSidebar from '../DesktopSidebar'
import VideosList from '../VideosList'

import {
  HomeBgContainer,
  HomeContainer,
  HomePopupContentContainer,
  HomeContentContainer,
  PopupContainer,
  PopupDetails,
  CloseButton,
  WebsiteLogo,
  PremiumPlan,
  GetItNowButton,
  SearchBarContainer,
  SearchInput,
  SearchIconButton,
  LoaderContainer,
  VideosUl,
  FailureViewContainer,
  FailureViewBody,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  FailureRetryButton2,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isPopup: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    videosArrayList: [],
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        videosArrayList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickClosePopup = () => {
    this.setState({isPopup: false})
  }

  popupBanner = () => (
    <PopupContainer data-testid="banner">
      <PopupDetails>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <PremiumPlan>Buy Nxt Watch Premium prepaid plans with UPI</PremiumPlan>
        <GetItNowButton>GET IT NOW</GetItNowButton>
      </PopupDetails>
      <CloseButton
        type="button"
        onClick={this.onClickClosePopup}
        data-testid="close"
      >
        <IoMdClose size={18} />
      </CloseButton>
    </PopupContainer>
  )

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderLoaderView = () => (
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

  renderNoVideosFoundView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <FailureViewContainer>
            <FailureViewBody>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <FailureHeading theme={theme}>
                No Search results found
              </FailureHeading>
              <FailureText theme={theme}>
                Try different key words or remove search filter
              </FailureText>
              <FailureRetryButton type="button" onClick={this.getVideos}>
                Retry
              </FailureRetryButton>
            </FailureViewBody>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosArrayList} = this.state

    if (videosArrayList.length === 0) {
      return this.renderNoVideosFoundView()
    }
    return (
      <VideosUl>
        {videosArrayList.map(eachVideo => (
          <VideosList key={eachVideo.id} videosData={eachVideo} />
        ))}
      </VideosUl>
    )
  }

  renderFailureView = () => (
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
              <FailureRetryButton2 type="button" onClick={this.getVideos}>
                Retry
              </FailureRetryButton2>
            </FailureViewBody>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {isPopup, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <HomeBgContainer data-testid="home" theme={theme}>
              <Header />
              <HomeContainer>
                <DesktopSidebar />
                <HomePopupContentContainer theme={theme}>
                  {isPopup && this.popupBanner()}
                  <HomeContentContainer>
                    <SearchBarContainer>
                      <SearchInput
                        theme={theme}
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onSearchInput}
                      />
                      <SearchIconButton
                        theme={theme}
                        type="button"
                        onClick={this.getVideos}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch />
                      </SearchIconButton>
                    </SearchBarContainer>
                    {this.renderApiStatus()}
                  </HomeContentContainer>
                </HomePopupContentContainer>
              </HomeContainer>
            </HomeBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
/*


*/
