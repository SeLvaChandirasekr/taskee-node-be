const {mongoose} =require("./db")

const Schema =mongoose.Schema

const RegistrationSchema =new Schema({
    email:{type:String},
    password:{type:String},
    phonenumber:{type:String},
    username:{type:String},
})

    const RegistrationModel = mongoose.model('Registration',RegistrationSchema)

    const TaskSchema = new mongoose.Schema({
        heading: String,
        description: String,
        priority: String,
        deadline: Date,
        completed: { type: Boolean, default: false }
    });
    const TaskModel = mongoose.model("Task", TaskSchema);

    module.exports = {
        RegistrationModel,
        TaskModel,
    }