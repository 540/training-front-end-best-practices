import { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta = {
  title: 'atoms/Input',
  component: Input,
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    onChange: (value: string) => {
      console.log('Input value changed:', value)
    },
  },
}

export default meta
