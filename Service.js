
const {RegistrationModel,TaskSchema} =require("./Schema")
const { TaskModel } = require("./db");

const handleUserRegistration =(req,res) => {
    RegistrationModel.create ({
       ...req.body,
    }).then(dbResponse=>{
console.log(dbResponse,"Response");
res.send(dbResponse.username)
    }).catch(dbError => {
        console.log(dbError,"Error")
        res.send("Create Error")
     })
    }

     const handleUserLogin = (req,res) => {
        RegistrationModel.findOne({
            username: req.body.username
        }).then(dbResponse=>{
            console.log(dbResponse,"Response");
            res.send(dbResponse.username)
                }).catch(dbError => {
                    console.log(dbError,"Error")
                    res.send("Login Error")
                 })
     }

     const handleUserTasks = (req,res) => {
        TaskSchema.create({
            _id: req.body._id
        }).then(dbResponse=>{
            console.log(dbResponse,"Response");
            res.send(dbResponse._id)
                }).catch(dbError => {
                    console.log(dbError,"Error")
                    res.send("tasks is not fetching")
                 })
     }


module.exports= {
    handleUserRegistration,
    handleUserLogin,
    TaskModel,
    handleUserTasks,
}