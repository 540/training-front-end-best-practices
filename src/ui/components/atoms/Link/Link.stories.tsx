import { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta = {
  title: 'atoms/Link',
  component: Link,
} satisfies Meta<typeof Link>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/example',
    children: 'Example Link',
  },
}

export const WithCustomProps: Story = {
  args: {
    href: '/custom',
    children: 'Custom Link',
    passHref: true,
  },
}

export const WithExternalLink: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
  },
}

export default meta
