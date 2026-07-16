// import React from 'react'
// import Card from './componentes/Card'
// import Navbar from './componentes/Navbar'
import SecondCard from './componentes/SecondCard'

const App = () => {
  // const name = 'Asif'
  // const age = 24
  return (
    <>
      {/* <h1>Hi I'm {name}.</h1>
      <h2>I'm {age} years old.</h2>
      <p>I'm a software developer.</p> */}
      {/* <Navbar /> 
      {Card()}
      <Card />
      <Card /> */}

      <div className='parent'>
        <SecondCard name='Asif' age={24} img='/public/asif.JPG' />
        <SecondCard name='Raima' age={20} img='/public/raima.jpg'/>
        <SecondCard name='Gulo' age={22} img='/public/golu.jpg'/>
        <SecondCard name='Don' age={28} img='/public/don.jpg'/>
        <SecondCard name='Molu' age={14} img='/public/molu.jpg'/>
      </div>
    </>
  )
}

export default App