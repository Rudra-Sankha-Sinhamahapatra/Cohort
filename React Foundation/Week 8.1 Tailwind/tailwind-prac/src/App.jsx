import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='grid grid-cols-3'>
    <RevenueCard title={"Amount Pending"} amount={"92,156.46"} orderCount={17} />
   </div>
   </>  
  )
}

export default App
