import { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

const meta: Meta = {
  title: 'atoms/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export default meta
