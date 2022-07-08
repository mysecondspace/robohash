import React from 'react'

import styles from './styles.module.scss'

function Search({ onChangeHandler, placeholder }) {
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
