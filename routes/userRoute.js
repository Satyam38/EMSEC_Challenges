
// Bonus - about the challenge part -1


const express = require("express");
const user = express();

const multer  = require('multer');
const path = require('path');
const bodyParser = require('body-parser');


user.use(bodyParser.urlencoded({extended:true}));
user.use(express.static(path.resolve(_dirname, 'public')));


var storage = multer.diskStorage({
    destination:(req,file, cb) =>{
             cb(null, './publicCSVFile/uploads')
    },
    filename:(req,file,cb) =>{
             cb(null, file.orginalname)
    }
});


var  upload = multer({ storage: storage});

const usercontroller = require('../controllers/userController');

// when file create to upload  path 
user.post('/importUser', upload.single('file'), usercontroller.importUser);


module.exports = user;