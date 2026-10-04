import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'

import { Modal } from './Modal'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        onClose: fn(),
        children: 'Modal content'
    }
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Modal content',
        onClose: fn(),
        isOpen: false,
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false)

        return (
            <>
                <button onClick={() => setIsOpen(true)} type='button'>showModal</button>
                <Modal
                    {...args}
                    isOpen={isOpen}
                    onClose={() => {
                        args.onClose?.()
                        setIsOpen(false)
                    }}
                />
            </>
        )
    }
}
