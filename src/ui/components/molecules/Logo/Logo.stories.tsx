import { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta: Meta = {
  title: 'molecules/Logo',
  component: Logo,
} satisfies Meta<typeof Logo>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    path: 'https://placehold.co/85x85',
  },
}

export default meta
