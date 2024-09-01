import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'

import Header from '../Header'
import DesktopSidebar from '../DesktopSidebar'

import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'

import {
  VideoItemDetailsBgContainer,
  VideoItemDetailsContainer,
  VideoItemDetailsContentContainer,
  LoaderContainer,
  VideoContainer,
  VideoReactPlayer,
  VideoTitle,
  ViewsAndLikeSaveContainer,
  VideoViewsAndPublishedText,
  LikeDislikeSaveContainer,
  IconButton,
  ProfileNameContainer,
  ProfileImg,
  NameSubscribersCard,
  NameText,
  SubscriberText,
  DescriptionText,
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    like: false,
    dislike: false,
  }

  componentDidMount = () => {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  videoItemLoaderView = () => (
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

  onClickLikeButton = () => {
    const {like} = this.state
    this.setState({like: !like, dislike: false})
  }

  onClickDisLikeButton = () => {
    const {dislike} = this.state
    this.setState({dislike: !dislike, like: false})
  }

  videoItemSuccessView = () => {
    const {videoDetails, like, dislike} = this.state
    const {
      id,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
      name,
      profileImageUrl,
      subscriberCount,
    } = videoDetails

    const date = formatDistanceToNow(new Date(publishedAt))
    const newDate = date.split(' ')
    newDate.shift()
    const convertedDate = newDate.join(' ')

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'

          const activeLike = like ? 'active' : 'notactive'
          const activeDislike = dislike ? 'active' : 'notactive'

          return (
            <VideoContainer>
              <VideoReactPlayer>
                <ReactPlayer
                  controls
                  url={videoUrl}
                  width="100%"
                  height="100%"
                />
              </VideoReactPlayer>
              <VideoTitle theme={theme}>{title}</VideoTitle>

              <ViewsAndLikeSaveContainer>
                <VideoViewsAndPublishedText theme={theme}>
                  {viewCount} views . {convertedDate} ago
                </VideoViewsAndPublishedText>

                <LikeDislikeSaveContainer>
                  <IconButton
                    type="button"
                    onClick={this.onClickLikeButton}
                    theme={activeLike}
                  >
                    <BiLike size={20} style={{paddingRight: '6px'}} /> Like
                  </IconButton>

                  <IconButton
                    type="button"
                    onClick={this.onClickDisLikeButton}
                    theme={activeDislike}
                  >
                    <BiDislike size={20} style={{paddingRight: '6px'}} />
                    Dislike
                  </IconButton>

                  <SavedVideosContext.Consumer>
                    {activeValue => {
                      const {updateSavedVideos, savedVideosList} = activeValue

                      const findingVideo = savedVideosList.find(
                        each => each.id === id,
                      )

                      const savedVideo =
                        findingVideo !== undefined ? 'active' : 'notactive'
                      const saveText =
                        findingVideo !== undefined ? 'Saved' : 'Save'

                      return (
                        <IconButton
                          type="button"
                          theme={savedVideo}
                          onClick={() => updateSavedVideos(videoDetails)}
                        >
                          <RiMenuAddLine
                            size={20}
                            style={{paddingRight: '6px'}}
                          />
                          {saveText}
                        </IconButton>
                      )
                    }}
                  </SavedVideosContext.Consumer>
                </LikeDislikeSaveContainer>
              </ViewsAndLikeSaveContainer>
              <hr color="#ebebeb" />
              <ProfileNameContainer>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <NameSubscribersCard>
                  <NameText theme={theme}>{name}</NameText>
                  <SubscriberText theme={theme}>
                    {subscriberCount} subscribers
                  </SubscriberText>
                </NameSubscribersCard>
              </ProfileNameContainer>
              <DescriptionText theme={theme}>{description}</DescriptionText>
            </VideoContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  videoItemFailureView = () => (
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
              <FailureRetryButton type="button" onClick={this.getVideoDetails}>
                Retry
              </FailureRetryButton>
            </FailureViewBody>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  videoItemApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.videoItemLoaderView()
      case apiStatusConstants.success:
        return this.videoItemSuccessView()
      case apiStatusConstants.failure:
        return this.videoItemFailureView()
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
            <VideoItemDetailsBgContainer
              data-testid="videoItemDetails"
              theme={theme}
            >
              <Header />
              <VideoItemDetailsContainer>
                <DesktopSidebar />
                <VideoItemDetailsContentContainer theme={theme}>
                  {this.videoItemApiStatus()}
                </VideoItemDetailsContentContainer>
              </VideoItemDetailsContainer>
            </VideoItemDetailsBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
