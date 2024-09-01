import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiConsoleController} from 'react-icons/gi'
import {RiMenuAddFill} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {
  DesktopSidebarContainer,
  MenuBarUl,
  MenuBarLi,
  MenuList,
  FooterSectionContainer,
  ContactUs,
  SocialMediaIcons,
  ImgIcon,
  RecommendationsText,
} from './styledComponents'

import './index.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

const DesktopSidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <DesktopSidebarContainer theme={theme}>
          <ActiveMenuContext.Consumer>
            {activeValue => {
              const {activeMenu, changeActiveMenu} = activeValue

              const iconColor = isDarkTheme ? '#424242' : '#7e858e'
              const iconActive = '#ff0b37'

              return (
                <MenuBarUl>
                  <Link to="/" className="link">
                    <MenuBarLi
                      theme={theme}
                      isActive={activeMenu === activeMenuConstants.home}
                      onClick={() => changeActiveMenu(activeMenuConstants.home)}
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
                        isActive={activeMenu === activeMenuConstants.home}
                      >
                        Home
                      </MenuList>
                    </MenuBarLi>
                  </Link>

                  <Link to="/trending" className="link">
                    <MenuBarLi
                      theme={theme}
                      isActive={activeMenu === activeMenuConstants.trending}
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
                        isActive={activeMenu === activeMenuConstants.trending}
                      >
                        Trending
                      </MenuList>
                    </MenuBarLi>
                  </Link>

                  <Link to="/gaming" className="link">
                    <MenuBarLi
                      theme={theme}
                      isActive={activeMenu === activeMenuConstants.gaming}
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
                        isActive={activeMenu === activeMenuConstants.gaming}
                      >
                        Gaming
                      </MenuList>
                    </MenuBarLi>
                  </Link>

                  <Link to="/saved-videos" className="link">
                    <MenuBarLi
                      theme={theme}
                      isActive={activeMenu === activeMenuConstants.savedVideos}
                      onClick={() =>
                        changeActiveMenu(activeMenuConstants.savedVideos)
                      }
                      key="SAVEDVIDEOS"
                    >
                      <RiMenuAddFill
                        size={16}
                        color={
                          activeMenu === activeMenuConstants.savedVideos
                            ? iconActive
                            : iconColor
                        }
                      />
                      <MenuList
                        theme={theme}
                        isActive={
                          activeMenu === activeMenuConstants.savedVideos
                        }
                      >
                        Saved Videos
                      </MenuList>
                    </MenuBarLi>
                  </Link>
                </MenuBarUl>
              )
            }}
          </ActiveMenuContext.Consumer>

          <FooterSectionContainer>
            <ContactUs theme={theme}>CONTACT US</ContactUs>
            <SocialMediaIcons>
              <ImgIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ImgIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ImgIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaIcons>
            <RecommendationsText theme={theme}>
              Enjoy! Now to see your channels and recommendations!
            </RecommendationsText>
          </FooterSectionContainer>
        </DesktopSidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default DesktopSidebar
