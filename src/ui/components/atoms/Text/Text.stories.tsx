import { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta: Meta = {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    fontStyle: {
      options: [
        's-light',
        's-normal',
        'm-light',
        'm-normal',
        'l-light',
        'l-normal',
        'xl-light',
        'xl-normal',
      ],
      control: {
        type: 'select',
      },
    },
    color: {
      options: ['primary', 'primary-light', 'soft', 'dark', 'light'],
      control: {
        type: 'select',
      },
    },
    as: {
      options: ['span', 'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Text>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fontStyle: 'm-normal',
    color: 'dark',
    uppercase: false,
    centered: false,
    children: 'Example Text',
    as: 'span',
  },
}

export const WithCustomStyle: Story = {
  args: {
    fontStyle: {
      mobile: 's-normal',
      tablet: 'm-normal',
      laptop: 'l-normal',
      desktop: 'xl-light',
      bigDesktop: 'xl-normal',
    },
    color: 'primary',
    uppercase: true,
    centered: true,
    children: 'Custom Styled Text',
    as: 'p',
  },
}

export default meta
