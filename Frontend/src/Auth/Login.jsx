import React, { useState } from "react";
import { Button, Input } from "../Components";
import { useForm } from "react-hook-form";
import axois from 'axios'
function Login() {
  const {register, handleSubmit} = useForm();
  const [login , setlogin] = useState('Login')
  async function LoginUser(data) {
    setlogin("Logging.....")
    try {
      let response = await axois.post('http://localhost:3000/api/login' , {
        email : data.email,
        password: data.password
      },{
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="w-screen  "  style={{height : '84vh'}}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border border-black rounded shadow-lg bg-white">
        <form
          onSubmit={handleSubmit(LoginUser)}
          className="w-2/4 mx-auto"
        >
          <Input
            name={"email"}
            type={"email"}
            placeholder={"Enter your Email"}
            label={"Email"}
            {...register("email" , {required:true})}
          />
          <Input
            name={"password"}
            type={"password"}
            placeholder={"Enter your Password"}
            label={"Password"}
            {...register("password" , {required:true})}
          />
          <Button type="submit">{login}</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
