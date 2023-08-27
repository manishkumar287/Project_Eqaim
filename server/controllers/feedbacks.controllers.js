
const {feedbackData, Feedback} =require('../models/feedbacks.model');





// async function getAllFeedback(req,res){
//     return res.status(200).json(feedbackData);
// }

async function getAllFeedback(req, res) {
  
  try {
    const allfeedbacks=await Feedback.find().sort({upvotes:-1});
    return res.status(200).json({ success: true, data: allfeedbacks });
  } catch (error) {
    return res.status(500).json({ success: false, data: error.message });
  }
}



async function createFeedback(req,res){
    
    try {
        const { title, category, description } = req.body;
        console.log(req.body);

        const feedback_obj = { title, category, description };
        const feedback = new Feedback(feedback_obj);
        await feedback.save();
        return res.status(200).json({ success: true, data: feedback });
    } catch (error) {
        return res.status(500).json({success:false,data:error.message});
    }
}

async function upvoteFeedback(req, res) {
  try {
    //   console.log(req.body);
    const { _id } = req.body;

    console.log(_id);


    const obj1=await Feedback.findById(_id);
    console.log(obj1);
    const obj =await Feedback.findByIdAndUpdate(
      _id,
      { upvotes: obj1.upvotes + 1 }
    );
    
    return res.status(200).json({ success: true, data: obj });
  } catch (error) {
    return res.status(500).json({ success: false, data: error.message });
  }
}

async function getFeedbackById(req, res) {
  try {
    //   console.log("req",req);
    const { _id } = req.query;

    console.log(_id);

    const obj1 = await Feedback.findById(_id);
    console.log(obj1);
    // const obj = await Feedback.findByIdAndUpdate(_id, {
    //   upvotes: obj1.upvotes + 1,
    // });

    return res.status(200).json({ success: true, data: obj1 });
  } catch (error) {
    return res.status(500).json({ success: false, data: error.message });
  }
}

async function editFeedbackById(req, res) {
  try {
    //   console.log("req",req);
    const { _id , obj} = req.body;

    console.log(_id);

    // const obj1 = await Feedback.findById(_id);
    // console.log(obj1);
    const object = await Feedback.findByIdAndUpdate(_id, {
      title: obj.title,
      category: obj.category,
      status: obj.status,
      description: obj.description,
    });

    return res.status(200).json({ success: true, data: object });
  } catch (error) {
    return res.status(500).json({ success: false, data: error.message });
  }
}

module.exports = {
  getAllFeedback,
  createFeedback,
  upvoteFeedback,
  getFeedbackById,
  editFeedbackById,
};