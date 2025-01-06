import { render, screen } from '@testing-library/react'
import Button, { ThemeButton } from './Button'
describe('Button', () => {
    it('should render title', () => {
        render(<Button>Title</Button>)
        expect(screen.getByText('Title')).toBeInTheDocument()
    })
    it('should render with theme',()=>{
        render(<Button theme={ThemeButton.CLEAR}>Title</Button>)
        expect(screen.getByText('Title')).toHaveClass('clear')
    })
})
