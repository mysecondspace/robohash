import { useEffect, useState, ChangeEvent } from 'react'

import List from './components/List'
import Search from './components/Search'

import { getRobots } from './utils/data.utils'

import './App.scss'

export type Robot = {
  id: string
  name: string
  email: string
}

function App() {
  const [robots, setRobots] = useState<Robot[]>([])
  const [searchField, setSearchField] = useState('')
  const [foundRobot, setFoundRobot] = useState(robots)

  useEffect(() => {
    const fetchRobots = async () => {
      const robots = await getRobots<Robot[]>(
        'https://jsonplaceholder.typicode.com/users'
      )

      setRobots(robots)
    }

    fetchRobots()
  }, [])

  useEffect(() => {
    const newFoundRobot = robots.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(searchField)
    )

    setFoundRobot(newFoundRobot)
  }, [robots, searchField])

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLocaleLowerCase()

    setSearchField(searchFieldString)
  }

  return (
    <>
      <h1>Robohash</h1>
      <Search onChangeHandler={onSearchChange} placeholder='Find the robot' />
      <List robots={foundRobot} />
    </>
  )
}

export default App
