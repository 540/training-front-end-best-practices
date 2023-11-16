import { FC, ReactNode } from 'react'
import NextLink, { LinkProps } from 'next/link'

type Props = LinkProps & { children: ReactNode }

export const Link: FC<Props> = ({ children, ...props }) => {
  return <NextLink {...props}>{children}</NextLink>
}
