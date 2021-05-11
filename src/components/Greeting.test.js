import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting'

describe('Geting component', () => {
    test('renders Hello World as a text', () => {
        render(<Greeting />)
    
        const helloWorldElement = screen.getByText('Hello World!')
        expect(helloWorldElement).toBeInTheDocument()
    }) 

    test('renders good to src you if the button was NOT clicked', () => {
        render(<Greeting />)


    })

    test('renders Changed! if the button was clicked', () => {
        render(<Greeting />)

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        const outputElement = screen.getByText('Changed!')
        expect(outputElement).toBeInTheDocument();
    })
})

