import { Meta, StoryObj } from '@storybook/react'
import { FlowerCard } from './FlowerCard'

const meta: Meta = {
  title: 'molecules/FlowerCard',
  component: FlowerCard,
  argTypes: {
    flower: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FlowerCard>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    flower: {
      id: 1,
      name: 'Example Flower',
      binomialName: 'Lorem Ipsum',
      price: 9.99,
      imgUrl: 'https://placehold.co/300x300',
      heightInCm: 30,
    },
  },
}

export default meta
