import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Button, { ThemeButton } from './Button'

const meta = {
    title: 'Shared/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {

    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Text'
    }
}

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    }
}

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    }
}
