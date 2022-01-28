const mongoose=require('mongoose');

const dbConnect=async()=>{
    try {
           const conn= await mongoose.connect(process.env.MONGO_URI ,{
               useNewUrlParser:true,
               useUnifiedTopology:true,
              
           });
         console.log(`mongodb connected  : ${conn.connection.host}`);

    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit();
    }
}
   
module.exports=dbConnect;
    