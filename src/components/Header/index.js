import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu, GiConsoleController} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {RiMenuAddFill} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {
  NavBar,
  WebsiteLogo,
  MenuBarMobile,
  MenuBarDesktop,
  IconButton,
  ProfileImg,
  MenuBarBgContainer,
  CloseButton,
  MenuBarUl,
  MenuBarLi,
  MenuList,
  ConfirmLogoutContainer,
  LogoutButton,
  WantToLogoutPara,
  CancelConfirmButtonCard,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

import './index.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

const Header = props => {
  const onConfirmLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value

        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <NavBar theme={theme}>
            <ActiveMenuContext.Consumer>
              {activeValue => {
                const {changeActiveMenu} = activeValue
                return (
                  <Link to="/">
                    <WebsiteLogo
                      src={websiteLogo}
                      alt="website logo"
                      onClick={() => changeActiveMenu('HOME')}
                    />
                  </Link>
                )
              }}
            </ActiveMenuContext.Consumer>

            <MenuBarMobile>
              <IconButton
                type="button"
                onClick={() => changeTheme()}
                data-testid="theme"
              >
                {isDarkTheme ? (
                  <FiSun size={18} color="#ffffff" />
                ) : (
                  <FaMoon size={18} color="#0f0f0f" />
                )}
              </IconButton>

              <Popup
                modal
                trigger={
                  <IconButton type="button">
                    <GiHamburgerMenu
                      size={18}
                      color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
                    />
                  </IconButton>
                }
              >
                {close => (
                  <ActiveMenuContext.Consumer>
                    {activeValue => {
                      const {activeMenu, changeActiveMenu} = activeValue

                      const iconColor = isDarkTheme ? '#424242' : '#7e858e'
                      const iconActive = '#ff0b37'

                      return (
                        <MenuBarBgContainer theme={theme}>
                          <CloseButton type="button" onClick={() => close()}>
                            <IoMdClose
                              size={18}
                              color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
                            />
                          </CloseButton>

                          <MenuBarUl>
                            <Link to="/" className="link">
                              <MenuBarLi
                                theme={theme}
                                isActive={
                                  activeMenu === activeMenuConstants.home
                                }
                                onClick={() =>
                                  changeActiveMenu(activeMenuConstants.home)
                                }
                                key="HOME"
                              >
                                <AiFillHome
                                  size={16}
                                  color={
                                    activeMenu === activeMenuConstants.home
                                      ? iconActive
                                      : iconColor
                                  }
                                />
                                <MenuList
                                  theme={theme}
                                  isActive={
                                    activeMenu === activeMenuConstants.home
                                  }
                                >
                                  Home
                                </MenuList>
                              </MenuBarLi>
                            </Link>

                            <Link to="/trending" className="link">
                              <MenuBarLi
                                theme={theme}
                                isActive={
                                  activeMenu === activeMenuConstants.trending
                                }
                                onClick={() =>
                                  changeActiveMenu(activeMenuConstants.trending)
                                }
                                key="TRENDING"
                              >
                                <HiFire
                                  size={16}
                                  color={
                                    activeMenu === activeMenuConstants.trending
                                      ? iconActive
                                      : iconColor
                                  }
                                />
                                <MenuList
                                  theme={theme}
                                  isActive={
                                    activeMenu === activeMenuConstants.trending
                                  }
                                >
                                  Trending
                                </MenuList>
                              </MenuBarLi>
                            </Link>

                            <Link to="/gaming" className="link">
                              <MenuBarLi
                                theme={theme}
                                isActive={
                                  activeMenu === activeMenuConstants.gaming
                                }
                                onClick={() =>
                                  changeActiveMenu(activeMenuConstants.gaming)
                                }
                                key="GAMING"
                              >
                                <GiConsoleController
                                  size={16}
                                  color={
                                    activeMenu === activeMenuConstants.gaming
                                      ? iconActive
                                      : iconColor
                                  }
                                />
                                <MenuList
                                  theme={theme}
                                  isActive={
                                    activeMenu === activeMenuConstants.gaming
                                  }
                                >
                                  Gaming
                                </MenuList>
                              </MenuBarLi>
                            </Link>

                            <Link to="/saved-videos" className="link">
                              <MenuBarLi
                                theme={theme}
                                isActive={
                                  activeMenu === activeMenuConstants.savedVideos
                                }
                                onClick={() =>
                                  changeActiveMenu(
                                    activeMenuConstants.savedVideos,
                                  )
                                }
                                key="SAVEDVIDEOS"
                              >
                                <RiMenuAddFill
                                  size={16}
                                  color={
                                    activeMenu ===
                                    activeMenuConstants.savedVideos
                                      ? iconActive
                                      : iconColor
                                  }
                                />
                                <MenuList
                                  theme={theme}
                                  isActive={
                                    activeMenu ===
                                    activeMenuConstants.savedVideos
                                  }
                                >
                                  Saved videos
                                </MenuList>
                              </MenuBarLi>
                            </Link>
                          </MenuBarUl>
                        </MenuBarBgContainer>
                      )
                    }}
                  </ActiveMenuContext.Consumer>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <IconButton type="button">
                    <FiLogOut
                      size={18}
                      color={isDarkTheme ? '#f9f9f9' : '#212121'}
                    />
                  </IconButton>
                }
              >
                {close => (
                  <ConfirmLogoutContainer theme={theme}>
                    <WantToLogoutPara theme={theme}>
                      Are you sure, you want to logout
                    </WantToLogoutPara>

                    <CancelConfirmButtonCard>
                      <CancelButton
                        theme={theme}
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>

                      <ConfirmButton type="button" onClick={onConfirmLogout}>
                        Confirm
                      </ConfirmButton>
                    </CancelConfirmButtonCard>
                  </ConfirmLogoutContainer>
                )}
              </Popup>
            </MenuBarMobile>

            <MenuBarDesktop>
              <IconButton type="button" onClick={() => changeTheme()}>
                {isDarkTheme ? (
                  <FiSun size={18} color="#ffffff" />
                ) : (
                  <FaMoon size={18} color="#0f0f0f" />
                )}
              </IconButton>

              <IconButton type="button">
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </IconButton>

              <Popup
                modal
                trigger={
                  <LogoutButton type="button" theme={theme}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <ConfirmLogoutContainer theme={theme}>
                    <WantToLogoutPara theme={theme}>
                      Are you sure, you want to logout
                    </WantToLogoutPara>

                    <CancelConfirmButtonCard>
                      <CancelButton
                        theme={theme}
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>

                      <ConfirmButton type="button" onClick={onConfirmLogout}>
                        Confirm
                      </ConfirmButton>
                    </CancelConfirmButtonCard>
                  </ConfirmLogoutContainer>
                )}
              </Popup>
            </MenuBarDesktop>
          </NavBar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
