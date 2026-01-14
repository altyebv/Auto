import { useState } from 'react'
import logo from './assets/logo.svg'
import Main from './pages/Main.jsx'
import './App.css'




function App() {

  const [times, setTimes] = useState(0);


  const handleClick = () => {
  setTimes(times + 1);
}
  return (
    <div className="App">
      <Main />
    </div>
  )
}

export default App
