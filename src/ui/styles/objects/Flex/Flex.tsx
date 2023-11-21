import { CSSProperties, FC, ReactNode } from 'react'
import styles from './Flex.module.scss'
import { SpaceType } from '@/ui/styles/settings'

interface Props {
  direction?: 'row' | 'column' | 'row-reverse'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  alignItems?: 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch'
  gap?: SpaceType
  children: ReactNode
  className?: string
}

export const Flex: FC<Props> = ({
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  gap = 0,
  children,
  className,
}) => {
  const styleProps = {
    '--flex-direction': direction,
    '--justify-content': justifyContent,
    '--align-items': alignItems,
    '--gap': gap && `var(--space-${gap})`,
  } as CSSProperties

  return (
    <div className={`${styles.flex} ${className}`} style={styleProps}>
      {children}
    </div>
  )
}
