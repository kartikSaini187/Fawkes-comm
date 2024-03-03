const express = require('express');
const user = require('../controllers/user');
const router = express.Router();

router.post('/login', (req, res) => {
    const result = user.userLogin(req.body);
    res.send(result);
});

router.post('/signup', async (req, res) => {
    try {
        const result = await user.userSignup(req.body); 
        console.log(result);
        res.send(result);
    } catch (error) {
        console.error("Error in userSignup:", error);
        res.status(500).send("An error occurred during signup");
    }
});

module.exports = router;
