import { Meta, StoryObj } from '@storybook/react'
import { Selector } from './Selector'

const meta: Meta = {
  title: 'atoms/Selector',
  component: Selector,
} satisfies Meta<typeof Selector>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { name: 'Option 1', value: 'option-1' },
      { name: 'Option 2', value: 'option-2' },
      { name: 'Option 3', value: 'option-3' },
    ],
    current: 'option-1',
    onChange: (value: string) => {
      console.log('Input value changed:', value)
    },
  },
}

export default meta
