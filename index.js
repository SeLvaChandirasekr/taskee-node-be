const express = require('express')

const app =express()

const bodyParser = require('body-parser')

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.listen(4000 ,()=> {
    console.log("Server started at 4000")
})

app.get('/',(req,res)=> {
    res.send("Server Working")
})

app.post('/login',(req,res) => {
    res.send("Logged Successfully")
})

app.post('/registration',(req,res) => {
    res.send("Registration is successfully done")
    })