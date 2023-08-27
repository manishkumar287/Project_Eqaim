const express=require("express");
const cors = require("cors");
const app=express();
require('./db/connection')

const PORT = process.env.PORT || 8080;
const feedbackRouter=require('./routes/feedback.router')

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/", feedbackRouter);




app.listen(PORT,()=>{console.log(`Server is running on PORT ${PORT}`)})