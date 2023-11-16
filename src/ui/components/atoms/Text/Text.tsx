import { FC, ReactNode } from 'react'
import styles from './Text.module.scss'
import { Color, FontType } from '@/ui/styles/settings'
import classNames from 'classnames'

export type TextColor = Color

interface Props {
  fontStyle:
    | FontType
    | {
        mobile: FontType
        tablet?: FontType
        laptop?: FontType
        desktop?: FontType
        bigDesktop?: FontType
      }
  color?: TextColor
  uppercase?: boolean
  centered?: boolean
  className?: string
  children?: ReactNode
  as?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  ariaLabel?: string
  'data-testid'?: string
}

export const Text: FC<Props> = ({
  fontStyle: style,
  color,
  uppercase,
  centered,
  className,
  children,
  as: Tag = 'span',
  ariaLabel,
  'data-testid': testId,
}) => {
  const getClassName = () => {
    if (typeof style === 'string') {
      return classNames(
        styles[`mobile-${style}`],
        styles[`tablet-${style}`],
        styles[`laptop-${style}`],
        styles[`desktop-${style}`],
        styles[`big-desktop-${style}`],
        styles[`color-${color}`],
        uppercase && styles.toUppercase,
        centered && styles.centered,
        className,
      )
    }

    const mobile = style.mobile
    const tablet = style.tablet || mobile
    const laptop = style.laptop || tablet
    const desktop = style.desktop || laptop
    const bigDesktop = style.bigDesktop || desktop

    return classNames(
      styles[`mobile-${mobile}`],
      styles[`tablet-${tablet}`],
      styles[`laptop-${laptop}`],
      styles[`desktop-${desktop}`],
      styles[`big-desktop-${bigDesktop}`],
      styles[`color-${color}`],
      centered && styles.centered,
      className,
    )
  }

  return (
    <Tag className={getClassName()} data-testid={testId} aria-label={ariaLabel}>
      {children}
    </Tag>
  )
}
