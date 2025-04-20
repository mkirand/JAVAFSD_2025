import { useState } from 'react'
import './App.css'
import Greetings from './components/Greetings'
import Conditional from './components/Conditional'
import Action from './components/Action'
import StyleComponent from './components/StyleComponent'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greetings />
      <Conditional />
      <Action />
      <StyleComponent />
      <Counter />
      <Toggle />
      <Form />
      <h1>Welcome to React</h1>
    </>
  )
}

export default App
