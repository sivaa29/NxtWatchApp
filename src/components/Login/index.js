import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginBgContainer,
  LoginForm,
  NxtWatchImageLogo,
  NamePasswordContainer,
  NamePasswordLabel,
  NamePasswordInput,
  CheckboxContainer,
  Checkbox,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onShowPassword = event => {
    this.setState({isShowPassword: event.target.checked})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailue = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const apiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailue(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      isShowPassword,
      showErrorMsg,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <LoginBgContainer theme={theme}>
              <LoginForm onSubmit={this.onSubmitLogin} theme={theme}>
                <NxtWatchImageLogo src={websiteLogo} alt="website logo" />

                <NamePasswordContainer>
                  <NamePasswordLabel htmlFor="username" theme={theme}>
                    USERNAME
                  </NamePasswordLabel>
                  <NamePasswordInput
                    onChange={this.onChangeUsername}
                    value={username}
                    id="username"
                    type="text"
                    placeholder="Username"
                    theme={theme}
                  />
                </NamePasswordContainer>

                <NamePasswordContainer>
                  <NamePasswordLabel htmlFor="password" theme={theme}>
                    PASSWORD
                  </NamePasswordLabel>
                  <NamePasswordInput
                    onChange={this.onChangePassword}
                    value={password}
                    id="password"
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder="Password"
                    theme={theme}
                  />
                </NamePasswordContainer>

                <CheckboxContainer>
                  <Checkbox
                    onChange={this.onShowPassword}
                    type="checkbox"
                    id="checkbox"
                  />
                  <ShowPasswordLabel htmlFor="checkbox" theme={theme}>
                    Show Password
                  </ShowPasswordLabel>
                </CheckboxContainer>

                <LoginButton type="submit" theme={theme}>
                  Login
                </LoginButton>
                {showErrorMsg && <ErrorMsg theme={theme}>*{errorMsg}</ErrorMsg>}
              </LoginForm>
            </LoginBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
