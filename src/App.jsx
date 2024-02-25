import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css'
import TicToc from './TicToc.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
       <TicToc />
     </>
  )
}

export default App
