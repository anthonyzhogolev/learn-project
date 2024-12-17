import { fireEvent, screen } from '@testing-library/react'
import Sidebar from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation'

describe('Sidebar', () => {
    it('should render sidebar', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    it.only('should toogle sidebar', () => {
        renderWithTranslation(<Sidebar/>)
            
        fireEvent.click(screen.getByTestId('sidebar-toggle'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})
