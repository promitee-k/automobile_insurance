import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import FormDiv from "../atoms/FormDiv";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();


  const { state } = location;
const insuranceData = state && state.insuranceData;
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      alert("Success!");
          await axios.post(
          "http://localhost:3001/insurance/details",
          {
            ...insuranceData,
            userId: result.data.userID,
            paymentStatus:'pending'
          },)
      navigate("/payment");
    } catch (error) {
      alert('something went wrong')
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

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/signup", {
        email,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      alert('something went wrong')
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
