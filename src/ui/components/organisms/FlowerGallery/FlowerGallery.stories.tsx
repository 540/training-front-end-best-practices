import { Meta, StoryObj } from '@storybook/react'
import { FlowerGallery } from './FlowerGallery'

const meta: Meta = {
  title: 'organisms/FlowerGallery',
  component: FlowerGallery,
  argTypes: {
    flowers: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FlowerGallery>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    flowers: [
      {
        id: 1,
        name: 'Rose',
        binomialName: 'Rosa spp.',
        price: 12.99,
        imgUrl: 'https://placehold.co/300x300',
        heightInCm: 40,
      },
      {
        id: 2,
        name: 'Sunflower',
        binomialName: 'Helianthus annuus',
        price: 8.99,
        imgUrl: 'https://placehold.co/300x300',
        heightInCm: 60,
      },
    ],
  },
}

export default meta
