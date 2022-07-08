import React from 'react'

import Card from '../Card'

import styles from './styles.module.scss'

function List({ robots }) {
  return (
    <div className={styles.list}>
      {robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  )
}

export default List
