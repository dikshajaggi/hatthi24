import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-[#ff6f61] text-white' >
      <Outlet />
    </div>
  )
}

export default App

