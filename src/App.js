import { useEffect, useState } from 'react'
import './App.css';
import Card from './Components/Card';
import ClassComponent from './Components/ClassComponent'

function App() {

  const [rgbValue, setRgbValue] = useState('rgb(150,150,150')

  const randomColor = () => {
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    setRgbValue(`rgb(${r},${g},${b}`)
  }

  const monObjet = {
    id: "123",
    maClass: 'ma-classe de test'
  }

  return (
    <>
    <div className="App">
      <Card {...monObjet} backgroundColor={rgbValue} label="Cliquez moi" onClick={randomColor} className="ma-classe">
        <div>Element enfant de Card 1</div>
      </Card>
    </div>
    <ClassComponent nom="Benjamin"/>
    </>
  );
}

export default App;
