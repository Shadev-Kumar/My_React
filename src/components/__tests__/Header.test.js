import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import appStore from '../../utils/appStore'
import '@testing-library/jest-dom'

it('should load Header component with a Sign-in button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  )

  const Signinbtn = screen.getByText('Sign in')

  expect(Signinbtn).toBeInTheDocument()
})

it('should load Header component with 0 cart items', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  )

  const cartitemnull = screen.getByText('0')

  expect(cartitemnull).toBeInTheDocument()
})

it('should load Header component with 0 cart items', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  )

  const cartitemnull = screen.getByText(/Cart/)

  expect(cartitemnull).toBeInTheDocument()
})

it('should load Header component with 0 cart items', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  )

  const cartitemnull = screen.getByText(/Cart/)

  expect(cartitemnull).toBeInTheDocument()
})

it('should change sign in to Shadev on click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  )

  const Signinbtn = screen.getByText('Sign in')

  fireEvent.click(Signinbtn)

  const Userbtn = screen.getByText(/User/)

  expect(Userbtn).toBeInTheDocument()
})

it('should change sign in to Shadev on click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  )

  const Signinbtn = screen.getByText('Sign in')

  fireEvent.click(Signinbtn)

  const Userbtn = screen.getByText(/User/)

  fireEvent.click(Userbtn)

  const Logoutbtn = screen.getByText('Logout')

  expect(Logoutbtn).toBeInTheDocument()
})
