import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#ffffff'};
`

export const WebsiteLogo = styled.img`
  width: 100px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const MenuBarMobile = styled.div`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MenuBarDesktop = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    width: 140px;
  }
`

export const IconButton = styled.button`
  margin-right: 4px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const ProfileImg = styled.img`
  @media screen and (min-width: 768px) {
    height: 22px;
    width: 22px;
  }
`

export const MenuBarBgContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justigy-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#ffffff'};
`

export const CloseButton = styled.button`
  align-self: flex-end;
  margin-top: 8px;
  margin-right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const MenuBarUl = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuBarLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
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
  margin-left: 10px;
  margin: 8px;
  color: ${props => (props.theme === 'dark' ? '#f8fafc' : '#1e293b')};
  font-weight: ${props => props.isActive && '600'};
`

export const LogoutButton = styled.button`
  @media screen and (min-width: 768px) {
    height: 22px;
    width: 60px;
    font-family: roboto;
    border: 1px solid
      ${props => (props.theme === 'dark' ? '#ffffff' : '#3b82f6')};
    border-radius: 2px;
    background-color: transparent;
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#3b82f6')};
    margin-left: 10px;
    cursor: pointer;
  }
`

export const ConfirmLogoutContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#1e293b' : '#f9f9f9'};
  border-radius: 6px;
  padding: 10px;
`

export const WantToLogoutPara = styled.p`
  font-family: roboto;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#475569')};
`

export const CancelConfirmButtonCard = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
`

export const CancelButton = styled.button`
  height: 32px;
  width: 70px;
  font-family: roboto;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  color: #94a3b8;
  cursor: pointer;
  background-color: ${props =>
    props.theme === 'dark' ? '#1e293b' : '#f9f9f9'};
`

export const ConfirmButton = styled.button`
  height: 32px;
  width: 70px;
  font-family: roboto;
  background-color: #3b82f6;
  border-radius: 2px;
  border-width: 0;
  color: #ffffff;
  cursor: pointer;
`

// export const LogoutButton = styled.button``

/*



*/
