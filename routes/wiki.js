const express = require('express');
const router = express.Router();
var models = require('../models');
const sequelize = require('sequelize');
var Page = models.Page; 
var User = models.User; 

router.get('/', function(req, res, next) {
    
});

router.post('/', function(req, res, next) {
    
    var page = Page.build({
        title: req.body.title,
        content: req.body.content
    });
    page.save();

    var user = User.build({
        name: req.body.name,
        email: req.body.email
    })
    user.save();

    res.json(req.body);
    
});

router.get('/add', function(req, res, next) {
    res.render('addpage');
    // console.log(req.body);
});

router.get('/:pageName', function(req, res, next) {
    
    Page.findOne({
        where: {
            urlTitle: req.params.pageName
        }
    }).then((thisPage) => {
        return thisPage.id;
    }).then(User.findOne({
        where: {
            id: pageID
        }
    }));
        

    .then((foundPage)=> {
        res.render('wikipage',{title: foundPage.title, content:foundPage.content } )
        //res.json(foundPage);
    })
   .catch(next);
});


module.exports = router;
