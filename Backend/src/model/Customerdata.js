const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://userone:userone@ictakfiles.fzhd2ad.mongodb.net/CutomerServicedb?retryWrites=true&w=majority',(err)=>{
 
// if(!err)
//     console.log('Mongodb connected.....customerdb');
//     else
//     console.log('error in db connection:'+JSON.stringify(err,undefined,2));
// });
const Schema = mongoose.Schema;


var NewCustomerviewSchema = new Schema({
    pdtid : String,
    pdttype : String,
    name : String,
    mobno : String,
    emailid : String,
    date : String,
    description :String,
    invoice : String,
    caseid : String,
    casestatus : String
});

var Customerdata = mongoose.model('CustomerDetail', NewCustomerviewSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Customerdata;