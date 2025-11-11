import './App.css'
import Header from '../components/header'
import Form from '../components/form'
import Card from '../components/card'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    { name: "Sipos Fruzsina", email: "scihjk@gmail.com", age: 18 }
  ]);
  function Adatszerzes(){
      const nev = document.getElementById("name").value;
      const emailcim = document.getElementById("email").value;
      const kor = document.getElementById("kor").value;

      setItems(prev => [...prev, { name: nev, email: emailcim, age: kor }]);
  }

  return (
    <>
      <Header />
      <main>
        <div className="formdiv"><Form add={Adatszerzes}/></div>
        <div className="carddiv">{items.map((person, id) => (<Card key={id} name={person.name} email={person.email} age={person.age}/>))}</div>
      </main>
      
    </>
  )
}

export default App
