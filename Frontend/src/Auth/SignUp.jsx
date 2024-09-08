import React, { useState } from "react";
import { Input, Button } from "../Components";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {
  const { register, handleSubmit } = useForm();
  const [sign , setSign] = useState('sign up')
  async function signUpUser(data) {
    setSign('signing......')
    try {
      console.log(data);
      // Sending the data (name, username, email, and password) in the POST request
      let response = await axios.post(
        "http://localhost:3000/api/signup",
        {
          name: data.name,
          username: data.username,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error(
        "Error during sign up:",
        error.response ? error.response.data : error.message
      );
    }
  }

  return (
    <div className="w-screen " style={{ height: "84vh" }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border border-black rounded shadow-lg bg-white">
        <form onSubmit={handleSubmit(signUpUser)} className="w-2/4 mx-auto">
          <Input
            name={"name"}
            type={"text"}
            placeholder={"Enter your Name"}
            label={"Name"}
            {...register("name", { required: true })}
          />
          <Input
            name={"username"}
            type={"text"}
            placeholder={"Enter your Username"}
            label={"Username"}
            {...register("username", { required: true })}
          />
          <Input
            name={"email"}
            type={"email"}
            placeholder={"Enter your Email"}
            label={"Email"}
            {...register("email", { required: true })}
          />
          <Input
            name={"password"}
            type={"password"}
            placeholder={"Enter your Password"}
            label={"Password"}
            {...register("password", { required: true })}
          />
          <Button type="submit">{sign}</Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
