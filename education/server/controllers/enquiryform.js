
const Client=require("../models/ClientSchema")

const enquiryData=async(req,res)=>{
  
    console.log(req.body.name);
  try{
    const { name , email , mobile , nearestoffice , interestedcountry ,upcomingintake , courseinterest }= req.body

   if(!name || !email || !mobile || !interestedcountry || !nearestoffice || !upcomingintake || !courseinterest){
       res.status(400);
       throw new Error("Please Enter all the Fields");
   }

   const userExists= await Client.findOne({email});
   if(userExists){
       console.log("isme aa rha ");
      return res.status(400).json({success:"false"});
      
   } 

   const user = await Client.create({
    name,
    email,
    mobile,
    nearestoffice,
    interestedcountry,
    upcomingintake,
    courseinterest
     
   });
   console.log(user);
   if(user){
       res.status(201).json({success:"true"});
   }else{
       res.status(400);
       throw new Error("Failed to create user")
   }
  }catch(error){
      console.log("some error in network");
  }
    

} 


const getHome=async(req,res)=>{
    res.json({success:"true again"})
}

module.exports = {enquiryData , getHome};