const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");

const Story = require("../models/Story");

// @desc Login/Landing Page
// @route GET to the route '/'
router.get("/add", ensureAuth, (req, res) => {
  res.render('stories/add');
});

// @desc Process add form
// @route POST to the route '/stories'
router.post("/", ensureAuth, async (req, res) => {
  try {
      req.body.user = req.user.id;
      await Story.create(req.body);
      res.redirect('/dashboard');
  } catch (err) {
      console.error(err);
      res.render('error/500');
  }
});




module.exports = router;
