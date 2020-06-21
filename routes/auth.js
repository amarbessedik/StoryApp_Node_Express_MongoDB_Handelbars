const express = require("express");
const passport = require('passport');
const router = express.Router();

// @desc Auth with Google
// @route GET to the route '/auth/google'
router.get("/google", passport.authenticate('google', {scope: ['profile']}));

// @desc Google auth callback
// @route GET to the route '/auth/google/callback'
router.get("/google/callback", passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
});

// @desc Logout user
// @route to the route '/auth/logout
router.get('/logout', (req, res) =>{
   req.logout();
   res.redirect('/');
});

module.exports = router;
