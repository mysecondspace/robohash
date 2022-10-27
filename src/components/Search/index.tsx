import React, { ChangeEvent } from 'react'

import styles from './styles.module.scss'

type SearchProps = {
  placeholder?: string
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

function Search({ onChangeHandler, placeholder }: SearchProps) {
  return (
    <input
      className={styles.input}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type='search'
    />
  )
}

export default Search
