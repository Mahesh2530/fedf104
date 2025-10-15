import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Student name="John Doe" />
        <Student name="Jane Smntreith" />
      </div>
    </>
  )
}

function Student(props) {
  return <h2>Hello, {props.name}!</h2>;
}
export default App