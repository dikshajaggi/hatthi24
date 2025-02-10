import './App.css'
import React from 'react'
import Footer from './components/Footer'
import FloatingHearts from './components/FloatingHearts'
import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-[#ff6f61] text-white' >
      <Outlet />
    </div>
  )
}

export default App

