import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import ThemeContext from './context/ThemeContext'
import ActiveMenuContext from './context/ActiveMenuContext'
import SavedVideosContext from './context/SavedVideosContext'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeMenu: 'HOME',
    save: false,
    savedVideosList: [],
  }

  changeTheme = () => {
    const {isDarkTheme} = this.state
    this.setState({isDarkTheme: !isDarkTheme})
  }

  changeActiveMenu = value => {
    this.setState({activeMenu: value})
  }

  deleteVideoFromSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: updatedList})
  }

  addVideoToSavedVideos = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  renderUpdateSavedVideos = videoDetails => {
    const {save} = this.state

    if (save) {
      this.deleteVideoFromSavedVideos(videoDetails)
    } else {
      this.addVideoToSavedVideos(videoDetails)
    }
  }

  updateSavedVideos = videoDetails => {
    this.setState(
      prevState => ({save: !prevState.save}),
      this.renderUpdateSavedVideos(videoDetails),
    )
  }

  render() {
    const {isDarkTheme, activeMenu, save, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <ActiveMenuContext.Provider
          value={{
            activeMenu,
            changeActiveMenu: this.changeActiveMenu,
          }}
        >
          <SavedVideosContext.Provider
            value={{
              save,
              savedVideosList,
              addVideoToSavedVideos: this.addVideoToSavedVideos,
              deleteVideoFromSavedVideos: this.deleteVideoFromSavedVideos,
              updateSavedVideos: this.updateSavedVideos,
            }}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </SavedVideosContext.Provider>
        </ActiveMenuContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
