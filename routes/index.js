const express = require('express');
const router = express.Router();
const wiki = require('./wiki.js');
const user = require('./user.js');


router.use('/wiki', wiki);
router.use('/user', user);
router.get('/', (req, res) => {
    //res.render('index', ); 
})










module.exports = router;



