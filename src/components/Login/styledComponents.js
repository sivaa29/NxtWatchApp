import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.form`
  background-color: ${props =>
    props.theme === 'dark' ? '#000000' : '#ffffff'};
  box-shadow: 0px 0px 5px #00000050;
  border-radius: 6px;
  padding: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const NxtWatchImageLogo = styled.img`
  align-self: center;
  width: 120px;
  height: 25px;
  margin: 15px;
`

export const NamePasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const NamePasswordLabel = styled.label`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#616e7c')};
  font-size: 10px;
  font-family: Roboto;
  margin-bottom: 4px;
`

export const NamePasswordInput = styled.input`
  background-color: ${props =>
    props.theme === 'dark' ? '#000000' : '#ffffff'};
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  font-size: 10px;
  font-family: Roboto;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  outline: none;
  padding-left: 6px;
  padding: 6px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 20px;
`

export const Checkbox = styled.input`
  height: 10px;
  width: 10px;
  margin-right: 6px;
  cursor: pointer;
`

export const ShowPasswordLabel = styled.label`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  font-size: 10px;
  font-family: Roboto;
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 4px;
  border-width: 0;
  cursor: pointer;
  height: 26px;
  font-family: Roboto;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 10px;
  font-family: Roboto;
  margin: 0;
`

// export const ErrorMsg = styled.p``
