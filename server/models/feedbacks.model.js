const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const validator = require("validator");

const feedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  category: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "Planned",
  },
  description: {
    type: String,
    required: true,
  },
  comments: [
    {
        comment_id: {
            type: mongoose.Schema.ObjectId,
            ref: "comments",
        },
    //   content: {
    //     type: String,
    //   },
    //   user: {
    //     image:{
    //         type: String,
    //     },
    //     name:{
    //         type: String,
    //     },
    //     username: {
    //         type:String
    //     }
    //   }
    },
  ],
});

const commentSchema=mongoose.Schema({
    content:{
        type: String,
    },
})

const Comments=new mongoose.model("Comments",commentSchema);


const Feedback = new mongoose.model("Feedback", feedbackSchema);


function readJSONFile() {
  try {
    
    const jsonData = fs.readFileSync(path.join(__dirname,'..', 'data', 'data.json'), "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading JSON file:", error.message);
    return null;
  }
}

const feedbackData = readJSONFile();

if (feedbackData) {
  // Now you can work with the JSON data
//   console.log(feedbackData);
  // Access properties like data.currentUser, data.productRequests, etc.
} else {
  console.log("Failed to read JSON data from the file.");
}

module.exports = {
  feedbackData,
  Feedback,
  Comments,
};
