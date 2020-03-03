const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route GET api/contacts
// @desc  Get all users contacts
// @access Private
router.get("/", auth, (req, res) => {
  try {
  } catch (err) {}
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
