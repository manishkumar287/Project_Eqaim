const express=require('express');

const {
  getAllFeedback,
  createFeedback,
  upvoteFeedback,
  getFeedbackById,
  editFeedbackById,
} = require("../controllers/feedbacks.controllers");

const feedbackRouter=express.Router();

feedbackRouter.get('/allfeedback',getAllFeedback);

feedbackRouter.post('/create',createFeedback);

feedbackRouter.post("/upvote", upvoteFeedback);

feedbackRouter.get("/editfeedback", getFeedbackById);

feedbackRouter.post("/editfeedback", editFeedbackById);

module.exports=feedbackRouter;
