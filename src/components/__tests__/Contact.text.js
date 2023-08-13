import Contact from '../Contact'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Contact Us page Test cases', () => {
  it('Contact page should load', () => {
    render(<Contact />)
    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
  })

  it('Should load Button inside Contact Component', () => {
    render(<Contact />)
    const button = screen.getAllByRole('button')

    //   expect(button).toBeInTheDocument()
  })
  it('Should have 2 buttons inside Contact Component', () => {
    render(<Contact />)
    const buttons = screen.getAllByRole('button')
    // console.log(buttons.length)

    expect(buttons.length).toBe(2)
  })
})
