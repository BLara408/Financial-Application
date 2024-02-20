import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './pages/Home'
import InvestmentPage from './pages/Investment'
import SavingsPage from './pages/Savings';
import OpportunitiesPage from './pages/Opportunities';

import './App.css'

 function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <h2>hello</h2>
    <BrowserRouter>
      <Routes>
        <Route index element = {<HomePage/>}/>
        <Route path ="/home" element = {<HomePage/>}/>
        <Route path = "/investment" element = {<InvestmentPage/>}/>
        <Route path = "/opportunities" element = {<OpportunitiesPage/>} />
        <Route path = "/savings" element = {<SavingsPage/>}/>
      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
