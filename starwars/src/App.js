import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Container, Button } from './styles/styles'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([])
  const [resultsPage, setResultsPage] = useState(1)

  const baseUrl = `http://swapi.dev/api/people?page=${resultsPage}`

  useEffect (() => {
    axios.get(`${baseUrl}`)
      .then( res => {
        // console.log(res)
        setPeople(res.data.results)
      })
      .catch( err => {
        console.log(`The error was ${err}`)
      })
  }, [resultsPage])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Container width='80%' justify='space-evenly'>
      {
        people.map(p => {
          {/* console.log(p) */}
          return <Character key={p.birth_year + p.height} info={p} />
        })
      }
      </Container>

      {
        resultsPage > '1' ? <Button onClick={() => setResultsPage(resultsPage-1)}>Previous Page</Button> : ''
      }
      <Button onClick={() => setResultsPage(resultsPage+1)}>Next Page</Button>

    </div>
  )
}

export default App
