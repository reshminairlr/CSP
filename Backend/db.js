


const mongoose=require ('mongoose');

mongoose.connect('mongodb+srv://userone:userone@ictakfiles.fzhd2ad.mongodb.net/CutomerServicedb?retryWrites=true&w=majority',(err)=>{
    if(!err)
    console.log('Mongodb connected.....CutomerServicedb');
    else
    console.log('error in db connection:'+JSON.stringify(err,undefined,2));
})
module.exports=mongoose;