const mongoose =require("mongoose")

mongoose.set("strictQuery",false)

const mongoDbURL='mongodb+srv://selvamchandirasekar:yxZ25JQF6CXVhWkG@task-development.exxrttz.mongodb.net/'

const connectDb = async (res) => {


   try {
await mongoose.connect(mongoDbURL)
console.log(mongoose.connection.readyState)

if (mongoose.connection.readyState == 1 ) {
    console.log("Connected")
    res && res.send("Connected")
} 
if (mongoose.connection.readyState == 2 ) {
    console.log("Connecting!!!")
}    
   } catch (error) {
    console.log(error,"Error Connection")   
    res && res.send("Disconnected")
   } 


}
module.exports= {
    connectDb,mongoose
}