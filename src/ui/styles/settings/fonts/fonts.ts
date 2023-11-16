import { Roboto } from 'next/font/google'

export const FONT_TYPES = [
  's-light',
  's-normal',
  'm-light',
  'm-normal',
  'l-light',
  'l-normal',
  'xl-light',
  'xl-normal',
] as const

export const roboto = Roboto({
  weight: ['300', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export type FontType = (typeof FONT_TYPES)[number]
