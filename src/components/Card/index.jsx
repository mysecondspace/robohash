import React from 'react'

import styles from './styles.module.scss'

function Card({ robot: { id, name, email } }) {
  return (
    <div className={styles.card} key={id}>
      <img
        src={`https://robohash.org/${id}?set=set1`}
        className={styles.image}
        alt={`Robot ${name}`}
      />
      <p>{name}</p>
      <span>{email}</span>
    </div>
  )
}

export default Card
