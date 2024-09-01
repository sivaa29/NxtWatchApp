import React from 'react'

const SavedVideosContext = React.createContext({
  save: false,
  savedVideosList: [],
  addVideoToSavedVideos: () => {},
  deleteVideoFromSavedVideos: () => {},
  updateSavedVideos: () => {},
})

export default SavedVideosContext
