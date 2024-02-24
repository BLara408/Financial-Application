import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/Home'
import InvestmentPage from './pages/Investment'
import SavingsPage from './pages/Savings';
import OpportunitiesPage from './pages/Opportunities';

import './App.css'

 function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header></Header>
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
