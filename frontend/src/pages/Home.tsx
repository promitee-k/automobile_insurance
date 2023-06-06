import axios from "axios";
import {  useState} from 'react';
import  { automobile } from '../templates/QuoteFrom';

import Image from "../atoms/Image";

import QuoteFrom from "../templates/QuoteFrom";
import { ChildElement, InnerContainer } from "../atoms/Home";


const Home =  ()=> {
  const [Cars,setCars]=useState<automobile[]>();

  const fetchInfo = async() => await axios.get("http://localhost:3001").then((res)=>{setCars(res.data)})  //fetch data from mongodb
 
  fetchInfo();
  return (
    <>
    <h1>Get Your Car Insurance</h1>
      <InnerContainer>
    <ChildElement>
    <QuoteFrom carData={Cars??[]}/>
    </ChildElement>
    <ChildElement>
    <Image src="src/assets/img_car_insurance.jpg" alt={"Car Insurance"}/>
    </ChildElement>
    </InnerContainer>

    </>
  );
}

export default Home

