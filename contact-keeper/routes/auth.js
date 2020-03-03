const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route GET api/auth
// @desc  GET the user
// @access Private
router.get("/", auth, (req, res) => {
  res.send("Log in user");
});

// @route POST api/auth
// @desc  Auth the user and get token
// @access Private
router.post(
  "/",
  [
    check("email", "Correct Email is required").isEmail(),
    check("password", "Correct Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email }); // findOne func

      if (!user) {
        return res.status(400).json({
          msg: "Invalid credentials"
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          msg: "Invalid credentials"
        });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
