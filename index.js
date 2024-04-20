const express = require('express')
const { connectDb,mongoose} =require("./db")
const { handleUserRegistration,handleUserLogin} =require("./Service")
const { TaskModel } = require("./Schema");
const app =express()

const bodyParser = require('body-parser')

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.listen(4000 ,()=> {
    console.log("Server started at 4000")
})

connectDb()

app.get('/',(req,res)=> {
    res.send("Server Working")
})
app.post('/login',(req,res) => {
    console.log(req.body)
    handleUserLogin(req,res)
    
})
app.post('/registration',(req,res) => {
    
    handleUserRegistration(req,res)
    })
    app.get('/connectDB',(req,res)=> {
        connectDb(res)
       
    })
    

    //edit delete update

    // Create a task
app.post("/api/tasks", async (req, res) => {
    try {
        const task = new TaskModel(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all tasks
app.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single task
app.get("/api/tasks/:id", async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a task
app.patch("/api/tasks/:id", async (req, res) => {
    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a task
app.delete("/api/tasks/:id", async (req, res) => {
    try {
        const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
