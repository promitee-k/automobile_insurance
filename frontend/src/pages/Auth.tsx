import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import FormDiv from "../atoms/FormDiv";
// import { InsuranceData } from "./InsuranceForm";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

export const Auth = () => {
  return (
    <>
      <Login />
      <br />
      <p>Or</p>
      <br/>
      <Register />
    </>
  );
};

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();


  const {insuranceData } = location.state
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      alert("Success!");
      setCookies("access_token", result.data.token);
      // window.localStorage.setItem("userID", result.data.userID);
          await axios.post(
          "http://localhost:3001/insurance/details",
          {
            ...insuranceData,
            userId: result.data.userID,
            paymentStatus:'pending'
          },)
      navigate("/payment");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <Label htmlFor="email">Email:</Label>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </FormDiv>
  );
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [_, setCookies] = useCookies(["access_token"]);
  // const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/signup", {
        email,
        password,
      });
     
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <Label htmlFor="email">Email:</Label>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </FormDiv>
  );
};
