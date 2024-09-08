import e from "express";
import { configDotenv } from "dotenv";
import { connectDB } from "./database/database.js";
import { login, signUp } from "./database/controllers/users.controller.js";
import cors from "cors";
configDotenv();
const app = e();
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(cors());
//variables
const port = process.env.PORT || 3000;

//Register User

app.post("/api/signup", async (req, res) => {
  console.log("registering user .....");
  let promise = await signUp(req);
  console.log(promise);
  res.send(promise);
});

app.post("/api/login", async (req, res) => {
  let promise = await login(req);
  if (promise) {
    console.log(promise);
    res.send(promise);
  } else {
    res.send(false);
  }
});

app.listen(port, async () => {
  console.log("Running in port 3000");
  try {
    let promise = await connectDB();
    console.log("Database Connection Succesfull");
  } catch (error) {
    console.log(error);
  }
});
