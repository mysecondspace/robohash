import React, { useEffect, useState } from 'react'

import List from './components/List'
import Search from './components/Search'

import './App.scss'

function App() {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState([])
  const [foundRobot, setFoundRobot] = useState(robots)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users))
  }, [])

  useEffect(() => {
    const newFoundRobot = robots.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(searchField)
    )

    setFoundRobot(newFoundRobot)
  }, [robots, searchField])

  const onSearchChange = (e) => {
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
