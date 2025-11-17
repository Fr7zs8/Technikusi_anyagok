import Autok from './components/autok'
import './App.css'
import { useState } from 'react'
import { listaz } from './data'
import UJAuto from './components/uj-auto';

function App() {
  const [autok, setautok] = useState(listaz());

  return (
    <>
    <header>
      <h1>Autó nyilvántartó</h1>
    </header>
    <main>
      <Autok autok={autok} setautok={setautok}/>
      <UJAuto autok={autok} setautok={setautok}/>
    </main>
    </>
  )
}

export default App
