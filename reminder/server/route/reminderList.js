const express = require("express");
const list = require("../model/reminderList");
const user = require("../model/User");
const { route } = require("./Route");

const router = express.Router();


router.post("/addReminder", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      const reminder = new list({ title, body, user: existingUser });
      await reminder.save().then(() => res.status(200).json({ reminder }));
      existingUser.reminderList.push(reminder);
      existingUser.save();
    }
  } catch (error) {
    console.error(error);
  }
});


router.put("/updateReminder/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await user.findOne({ email });
    if (existingUser) {
     const updateList = await list.findByIdAndUpdate(req.params.id,{title,body});
      updateList.save().then(()=>res.status(200).json({message: "Task Updated successfully!!!", updateList}));
    }
  } catch (error) {
    console.error(error);
  }
});


router.delete("/deleteReminder/:id",async(req,res)=>{
    try {
        const {email} =req.body;
    const existingUser = await user.findOneAndUpdate({email},{$pull: {reminderList: req.params.id}});
    if (existingUser) {
        await list.findByIdAndDelete(req.params.id).then(()=>res.status(200).json({message: " Reminder Deleted successfully"}));
    }
    } catch (error) {
            console.error(error);
    }
    
});

router.get("/getReminder/:id" , async(req,res)=>{
    const getList=await list.find({user: req.params.id});
    if (getList.length!==0) {
        res.status(200).json({getList});
    }
    else{
        res.status(200).json({message: "No Reminder"});
    }
})
module.exports = router;
