import type { Meta, StoryObj } from '@storybook/react'

import Loader from './Loader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {

    }

} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: { },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
    args: { },
    decorators: [ThemeDecorator(Theme.DARK)]
}
