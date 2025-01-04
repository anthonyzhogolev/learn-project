import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
// import 'app/styles/index.scss'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const preview: Preview = {
    decorators: [
        StyleDecorator,
        RouterDecorator
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
}

export default preview
