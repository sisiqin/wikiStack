const express = require('express');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const pg = require('pg');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');  
const router = require('./routes')
let app = express(); 
const models = require('./models');




app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

//middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());// for AJAX request. nothing with our project
app.use(bodyParser.urlencoded({ extended: false })); // for HTML form submits
app.use(express.static('public')); 


//routes
app.use('/', router);


//listener
//models.User.sync({force :true })
models.User.sync()

.then(function () {
    //return models.Page.sync({force: true})
    return models.Page.sync()
})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);



