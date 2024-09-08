import mongoose from "mongoose";
import { checkPassword, encrypt } from "../../utils/bycrptjs.js";
import { user } from "../models/users.models.js";

export const signUp = async (req) => {
  const { name, username, email, password } = req.body;
  let hashedPassword = await encrypt(password);

  const newUser = new user({
    name: name,
    username: username,
    email: email,
    password: hashedPassword,
  });
  try {
    let promise = await newUser.save();
    console.log(promise);

    return promise;
  } catch (error) {
    console.log(error);
  }
};


export const login= async (req)=>{
    const {email , password} = req.body
    const findUser = await user.findOne({email})

    
    if(!findUser){
      return false
    }
    const passwordCheck =await checkPassword(findUser.password , password)
    console.log("passwordCheck :",passwordCheck);

    if (passwordCheck) {
      return await findUser
    } else {
      console.log('password error');
      return false
    }
}