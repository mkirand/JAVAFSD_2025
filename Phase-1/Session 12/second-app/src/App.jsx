import { useState } from 'react'
import './App.css'
import Greetings from './components/Greetings'
import Conditional from './components/Conditional'
import Action from './components/Action'
import StyleComponent from './components/StyleComponent'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import Form from './components/Form'
import MyButton from './components/MyButton'
import FetchData from './components/Session 13/FetchData'
import UsersData from './components/Session 13/UsersData'
import WindowsWidth from './components/Session 13/WindowsWidth'
import FormValidation from './components/Session 13/FormValidation'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WindowsWidth />

      {/* <Greetings /> */}
      {/* <Conditional />
      <Action />
      <StyleComponent />
      <Counter />
      <Toggle />
      <Form />
      <MyButton label="Click Me" handleClick={() => alert('Button Clicked!')} />
      <h1>Welcome to React</h1> */}
      {/* <FetchData />
       */}
      <UsersData />

      <FormValidation />
    </>
  )
}

export default App
