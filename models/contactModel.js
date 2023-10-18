// import mongoose
const mongoose = require("mogoose");

// this schema contains all the values that we want in our contact resource
const contactSchema = mongoose.Schema({
    user_id:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, 'Please add the contact name'],
    },
    email:{
      type: String,
      required: [true, 'Please add the email address'],
    },
    phone: {
      type: String,
      required: [true, 'Please add the contact phone number'],
    },
  },  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);


/**
 * 
 *    STOPPING AT 45:19  IN https://www.youtube.com/watch?v=H9M02of22z4
 * 
 */