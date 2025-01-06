import type { Preview } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
// import 'app/styles/index.scss'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator'

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
