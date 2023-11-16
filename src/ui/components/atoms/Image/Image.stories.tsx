import { Meta, StoryObj } from '@storybook/react'

import { Image } from './Image'

const meta: Meta = {
  title: 'atoms/Image',
  component: Image,
} satisfies Meta<typeof Image>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://placehold.co/300x200',
    alt: 'Example Image',
    width: 300,
    height: 200,
  },
}

export default meta
