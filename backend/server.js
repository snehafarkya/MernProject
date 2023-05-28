const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors());
dotenv.config();
app.use(express.json());

const userRouter = require("./routes/userRouter")
mongoose.connect(process.env.URI)
.then(()=>{
  console.log("connected successfully")
app.listen(process.env.PORT || 8000, (err)=>{
  if(err) console.log(err)
  else console.log(`Running at port ${process.env.PORT}`)
})


}).catch((error)=>{
  console.log(error)
})

app.use(userRouter);