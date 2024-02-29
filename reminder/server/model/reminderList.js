const mongoose=require('mongoose');
const listSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    body:{
        type:String,
        required:true,
    },

    date:{
        type: Date,
    },

    time:{
        type: String,
    },

    user:[
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
    ],

},
{timestamps:true});
const reminderList = mongoose.model("reminderList",listSchema);

module.exports = reminderList;