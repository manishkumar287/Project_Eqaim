const mongoose = require("mongoose");

// const uri =
//   "mongodb+srv://manishkumar287:manishkumar287@cluster0.1lsva.mongodb.net/?retryWrites=true&w=majority";

const uri = "mongodb://127.0.0.1:27017/feedbacks-api";

mongodb: mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connection is successful");
  })
  .catch((e) => {
    console.log(e);
  });
