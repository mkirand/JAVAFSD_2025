import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import NavBar from './components/Session 13/NavBar';
import NavBarReactBootstrap from './components/Session 13/NavBarReactBootstrap';
import GrandParent from './components/propdrilling/GrandParent';
import MyGrandParent from './components/useContextApi/MyGrandParent';
import ThemeComponent from './components/theme/ThemeComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBarReactBootstrap />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Greetings />} />
          <Route path="/users" element={<UsersData />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<FormValidation />} />
          <Route path="/resize" element={<WindowsWidth />} />
          <Route path="/propdrilling" element={<GrandParent />} />
          <Route path="/context" element={<MyGrandParent />} />
          <Route path="/theme" element={<ThemeComponent />} />
        </Routes>
      </BrowserRouter>

      {/* <Conditional />
      <Action />
      <StyleComponent />
      <Toggle />
      <Form />
      <MyButton label="Click Me" handleClick={() => alert('Button Clicked!')} />
      <h1>Welcome to React</h1> */}
      {/* <FetchData />
       */}
    </>
  )
}

export default App
