const express = require('express')
const { signUp } = require('../controllers/signUp')
const { signIn } = require('../controllers/singIn')
const { searchUserById } = require('../controllers/searchUserById')
const verifyToken  = require('../utils/jwt/verifyToken')
const privateView = require('../utils/jwt/privateView')
const router = express.Router();

router.get('/user/:id', verifyToken, searchUserById)
router.get('/user', verifyToken, (req, res) => {
    res.json({ user: req.user });
});

router.post('/sign-up', signUp)
router.post('/sign-in', signIn)

module.exports = router;