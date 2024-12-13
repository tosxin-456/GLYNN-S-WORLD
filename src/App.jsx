import { useState } from 'react'
import './App.css'
import BlackFridayComponent from './components/blackFriday.component'
import Navbar from './components/navbar.component'
import Filter from './components/filter.component'

function App() {
  return (
    <>
      <div >
        <BlackFridayComponent />
        <Navbar />
        <Filter/>
      </div>
    </>
  )
}

export default App
