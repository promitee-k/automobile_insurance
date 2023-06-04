import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CarInsuranceForm from './templates/InsuranceForm'
import PaymentForm from './templates/PaymentForm'
import CarInsuranceCards from './templates/InsurancePackages'
import SignInForm from './templates/SignInForm'
import Navbar from './organisms/Navbar'
import  {  CarFormData } from './templates/CarForm'
import { GlobalStyles } from './atoms/GlobalStyle'

function App() {
  const insurancedata: CarFormData ={
    brand: '',
    model: '',
    year: '',
    area: 'Tokyo',
    accidentHistory: false
  }

  return (
    < >
    <GlobalStyles/>
    <Router>  
    <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>} ></Route>
÷        <Route path="/packages" element ={<CarInsuranceCards {...insurancedata} />} > </Route>
        <Route path="/insurance" element ={<CarInsuranceForm/>} > </Route>
        <Route path="/payment" element ={<PaymentForm/>} > </Route>
        <Route path="/auth" element ={<SignInForm/>} > </Route>
      </Routes>   
    </Router>
   
    </>
  )
}

export default App
