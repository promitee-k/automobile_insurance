import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CarInsuranceForm from './pages/InsuranceForm'
import PaymentForm from './pages/PaymentForm'
import CarInsuranceCards from './pages/InsurancePackages'

import { GlobalStyles } from './atoms/GlobalStyle'
import { Auth } from './pages/Auth'

function App() {

  return (
    < >
    <GlobalStyles/>
    <Router>  
      <Routes>
        <Route path="/" element ={<Home/>} ></Route>
        <Route path="/packages" element ={<CarInsuranceCards />} > </Route>
        <Route path="/insurance" element ={<CarInsuranceForm/>} > </Route>
        <Route path="/payment" element ={<PaymentForm/>} > </Route>
        <Route path="/auth" element ={<Auth/>} > </Route>
      </Routes>   
    </Router>
   
    </>
  )
}

export default App
