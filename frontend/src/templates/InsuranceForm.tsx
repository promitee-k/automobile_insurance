import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import FormDiv from "../organisms/FormDiv";
import { useLocation, useNavigate } from "react-router-dom";
// import jwt from "jsonwebtoken";
// import axios from "axios";
// import { useState } from "react";
// import { useCookies } from "react-cookie";
import { useState } from "react";
import axios from "axios";

export type InsuranceData = {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  carMake: string;
  carModel: string;
  carYear: number;
  history: string;
  package: string;
  price: number;
  licenseNumber: string;
  vehicleNumber: string;
  paymentStatus: string;
  userId?: string;
};

const CarInsuranceForm = () => {

  const [insuranceData, setInsuranceData] = useState<InsuranceData>();

  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InsuranceData>();

  const onSubmit: SubmitHandler<InsuranceData> = async (data) => {
 
    setInsuranceData({
      ...data,
    });
    navigate("/auth",{state: {
      insuranceData:{...data}}});
    // console.log(insuranceData?.userId)
    // if (isLoggedIn()) {

      //   try {
      //   await axios.post(
      //     "http://localhost:3001/insurance/details",
      //     {
      //       ...insuranceData,
      //       userId: window.localStorage.getItem("userID") ?? "",
      //     },
  
      //   );
      // } catch (error) {
      //   console.error(error);
      // }

     
      

      // try {
      //   await axios.post(
      //     "http://localhost:3001/insurance/details",
      //     {
      //       ...insuranceData,
      //       userId: window.localStorage.getItem("userID") ?? "",
      //     },
      //     { headers: { authorization: cookies.access_token } }
      //   );
      // } catch (error) {
      //   console.error(error);
      // }
    } 
    // else
    //   navigate("/auth", {
    //     state: {
    //       data: location.state,
    //     },
    //   });


  return (
    <FormDiv>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>First Name</Label>
          <Input
            type="text"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        <div>
          <Label>Last Name</Label>
          <Input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
        <div>
          <Label>Address</Label>
          <Input
            type="address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <span>{errors.address.message}</span>}
        </div>
        <div>
          <Label>Phone</Label>
          <Input
            type="text"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div>
          <Label>Driver's license number</Label>
          <Input
            type="text"
            {...register("licenseNumber", {
              required: "License number is required",
            })}
          />
          {errors.licenseNumber && <span>{errors.licenseNumber.message}</span>}
        </div>
        <div>
          <Label>Vehicle identification number </Label>
          <Input
            type="text"
            {...register("vehicleNumber", {
              required: "Vehicle number is required",
            })}
          />
          {errors.vehicleNumber && <span>{errors.vehicleNumber.message}</span>}
        </div>
        <div>
          <Label>Car Make</Label>
          <Input
            type="text"
            value={location.state.carData.brand}
            {...register("carMake", {
              required: "Car make is required",
 
            })}
            contentEditable={false}

          />
          {errors.carMake && <span>{errors.carMake.message}</span>}
        </div>
        <div>
          <Label>Car Model</Label>
          <Input
            type="text"
            value={location.state.carData.model}
            {...register("carModel", {
              required: "Car model is required",

            })}
            contentEditable={false}

          />
          {errors.carModel && <span>{errors.carModel.message}</span>}
        </div>
        <div>
          <Label>Car Year</Label>
          <Input
            type="text"
            value={location.state.carData.year}
            {...register("carYear", {
              required: "Car year is required",

            })}
            contentEditable={false}

          />
          {errors.carYear && <span>{errors.carYear.message}</span>}
        </div>
        <div>
          <Label>Insurance Package</Label>
          <Input
            type="text"
            value={location.state.package}
            {...register("package", {
              required: "Package is required",
           
            })}
            contentEditable={false}

          />
          {errors.package && <span>{errors.package.message}</span>}
        </div>
        <div>
          <Label>Price</Label>
          <Input
            type="text"
            value={location.state.price}
            {...register("price", {
              required: "Price is required",           
            })}
            contentEditable={false}
          />
          {errors.price && <span>{errors.price.message}</span>}
        </div>
        <Button type="submit">Proceed to Payment</Button>
      </form>
    </FormDiv>
  );
          }      

export default CarInsuranceForm;
