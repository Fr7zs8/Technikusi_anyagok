import './App.css'
import Esemenyek from './components/esemenyek'
import { useState } from 'react'
import { listaz } from './data'
import UjEsemeny from './components/uj-esemeny'


function App() {
  const [esemenyek, setesemenyek] = useState(listaz())
  return(
    <main>
      <Esemenyek esemenyek={esemenyek} setesemenyek={setesemenyek}/>
      <UjEsemeny esemenyek={esemenyek} setesemenyek={setesemenyek}></UjEsemeny>
    </main>
  )
}

export default App
