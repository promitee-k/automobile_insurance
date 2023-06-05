import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CarInsuranceForm from './templates/InsuranceForm'
import PaymentForm from './templates/PaymentForm'
import CarInsuranceCards from './templates/InsurancePackages'

import { GlobalStyles } from './atoms/GlobalStyle'
import { Auth } from './templates/Auth'

function App() {

  return (
    < >
    <GlobalStyles/>
    <Router>  
      <Routes>
        <Route path="/" element ={<Home/>} ></Route>
÷        <Route path="/packages" element ={<CarInsuranceCards />} > </Route>
        <Route path="/insurance" element ={<CarInsuranceForm/>} > </Route>
        <Route path="/payment" element ={<PaymentForm/>} > </Route>
        <Route path="/auth" element ={<Auth/>} > </Route>
      </Routes>   
    </Router>
   
    </>
  )
}

export default App
