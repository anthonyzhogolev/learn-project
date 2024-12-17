import { render, screen } from '@testing-library/react'
import Button from './Button'
describe('Button', () => {
    it('should render title', () => {
        render(<Button>Title</Button>)
        expect(screen.getByText('Title')).toBeInTheDocument()
    })
    it('should render with theme',()=>{
        render(<Button>Title</Button>)
        expect(screen.getByText('Title')).toHaveClass('clear')
    })
})
