const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc  Get all users contacts
// @access Private
router.get("/", (req, res) => {
  res.send("Get all the contacts");
});

// @route POST api/contacts
// @desc  Add new contact
// @access Private
router.post("/", (req, res) => {
  res.send("Added a new contact");
});

// @route PUT api/contacts/:id
// @desc  Updt a contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("Updated a contact");
});

// @route DELETE api/contacts/:id
// @desc  Delete contact
// @access Private
router.delete("/:id", (req, res) => {
  res.send("Deleted a contact");
});

module.exports = router;
