import styled from 'styled-components'

export const DesktopSidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props =>
      props.theme === 'dark' ? '#0f0f0f' : '#ffffff'};
  }
`
export const MenuBarBgContainer = styled.div``
export const MenuBarUl = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuBarLi = styled.li`
  width: 100%;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border: none;
  background-color: ${props =>
    props.theme === 'dark'
      ? props.isActive && '#424242'
      : props.isActive && '#e2e8f0'};
`

export const MenuList = styled.p`
  width: 100px;
  text-align: left;
  margin: 8px;
  color: ${props => (props.theme === 'dark' ? '#f8fafc' : '#1e293b')};
  font-weight: ${props => props.isActive && '600'};
`

export const FooterSectionContainer = styled.div`
  padding: 8px;
`
export const ContactUs = styled.p`
  font-family: roboto;
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.theme === 'dark' ? '#f8fafc' : '#1e293b')};
`
export const SocialMediaIcons = styled.div``

export const ImgIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const RecommendationsText = styled.p`
  font-family: roboto;
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? '#f8fafc' : '#1e293b')};
`

/*

export const RecommendationsText = styled.p``
  


*/
