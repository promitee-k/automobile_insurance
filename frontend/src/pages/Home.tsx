// import { useForm } from 'react-hook-form';
import axios from "axios";
import {  useEffect} from 'react';
import CarForm from '../molecules/CarForm';
import CarInsuranceCards from '../molecules/InsuranceCards';
import PaymentForm from '../molecules/PaymentForm';
import SignInForm from '../molecules/SignInForm';
import SignUpForm from '../molecules/SignUpForm';



const Home =  ()=> {
  let fetchInfo = async() => await axios.get("http://localhost:3001")  //fetch data from mongodbb

  useEffect(()=>{
    fetchInfo();
  },[])
   console.log(fetchInfo)
  return (
    <>
    <body> <CarForm/>
    <CarInsuranceCards/>
    <PaymentForm/>
    <SignInForm/>
    <SignUpForm/></body>
    <footer></footer>
    </>
  );
}

export default Home

