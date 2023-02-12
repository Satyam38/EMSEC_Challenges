
// --------------------------> Satyam Choudhary <--------------------------


var User = require('../models/User');
var csv = require ('csvtojson');
const importUser = async()=>
{
    try{
         
        var userData=[];

        csv()
        .fromFile(req.fromFile.path)
        .then(async(response)=> {
            
            for(var x=0; x<response.length; x++)
            {
                userData.push({
                    name:response[x].Name,
                    email: response[x].Email,
                    salary: response[x].salary,
                })  ;     
            
            }

            await User.insertMany(userData);
        })



        res.send({status:200, success: true , msg:'CSV Imported'});


    } catch(error){

        res.send({status:400, success:false, msg:error.message});
    }
}