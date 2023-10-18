const asyncHandler = require("express-async-handler");

// @description Get all contacts
// @route get /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

// @description Create contact
// @route post /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) =>{
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create Contact" });
});

// @description Get contact
// @route get /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

// @description Update contact
// @route put /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Update contact" });
});

// @description Delete contact
// @route delete /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}`});
});

module.exports = { 
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
 };