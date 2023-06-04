import axios from "axios";
import {  useEffect, useState} from 'react';
import  { automobile } from '../templates/CarForm';
import "./home.css"
// import { useNavigate } from "react-router-dom";
// import Button from "../atoms/Button";
import Image from "../atoms/Image";
// import Label from "../atoms/Label";
import CarForm from "../templates/CarForm";


const Home =  ()=> {
  const [Cars,setCars]=useState<automobile[]>();

  const fetchInfo = async() => await axios.get("http://localhost:3001").then((res)=>{setCars(res.data)})  //fetch data from mongodbb
 
  useEffect(()=>{
    fetchInfo();
  },[]);
  // const navigate = useNavigate()
  return (
    <>
    <div id="container">
      <div id="inner">
    <div className="child">
    <CarForm carData={Cars??[]}/>
    </div>
    <div className="child">
    <Image src="src/assets/img_car_insurance.jpg" alt={"Car Insurance"}/></div>
    </div>
    </div>
    </>
  );
}

export default Home

