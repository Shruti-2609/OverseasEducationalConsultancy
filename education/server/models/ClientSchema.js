const mongoose=require('mongoose');

const ClientSchema = mongoose.Schema({

    name:{
     type:String
    },
    email:{
        type:String
       },
    mobile:{
        type:String
       },
    nearestoffice:{
        type:String
       },
    interestedcountry:{
        type:String
       },
  upcomingintake:{
        type:String
       },
 courseinterest:{
        type:String
       }

})

const Client =mongoose.model('client',ClientSchema);

module.exports = Client;