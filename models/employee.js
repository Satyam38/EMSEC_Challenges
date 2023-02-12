let mongoose = require('mongoose');


//--------------------------------------> Anusha Patel <-----------------------
// Employee Schema
const Employee = mongoose.model('Employee', {
    name: {
        type: String,
        required:true
    }, 
    email: {
        type:String,
        required:true
    },
    salary: {
        type:String,
        required:true
    }
});



module.exports = {Employee}