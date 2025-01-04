import type { Meta, StoryObj } from '@storybook/react'

import AppLink, { AppLinkTheme } from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {

    }

} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Text',
        to: '',
        className: ''
    }

}

export const Secondary: Story = {
    args: {
        children: 'Text',
        to: '',
        className: '',
        theme: AppLinkTheme.SECONDARY
    }

}

export const Red: Story = {
    args: {
        children: 'Text',
        to: '',
        className: '',
        theme: AppLinkTheme.RED
    }

}
