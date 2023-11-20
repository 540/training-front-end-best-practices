import { FC } from 'react'
import styles from './Selector.module.scss'

interface Props {
  options: Array<{
    name: string
    value: string
  }>
  current: string
  onChange: (name: string) => void
}

export const Selector: FC<Props> = ({ options, current, onChange }) => {
  return (
    <select
      className={styles.selector}
      onChange={event => {
        onChange(event.target.value)
      }}
      defaultValue={current}
    >
      {options.map(option => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
