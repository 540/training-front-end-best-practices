import { ChangeEventHandler, FC } from 'react'
import styles from './Input.module.scss'

interface Props {
  placeholder: string
  onChange: (value: string) => void
}

export const Input: FC<Props> = ({ placeholder, onChange }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    onChange(event.target.value)
  }

  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      onChange={handleChange}
    />
  )
}
