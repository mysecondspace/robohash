import { Robot } from '../../App'

import Card from '../Card'

import styles from './styles.module.scss'

type ListProps = {
  robots: Robot[]
}

function List({ robots }: ListProps) {
  return (
    <div className={styles.list}>
      {robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  )
}

export default List
