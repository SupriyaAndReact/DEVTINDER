const express = require("express")
const { connectDb } = require("./config/database")
const app = express()
const User = require('./models/user')
const user = require("./models/user")

app.use(express.json())
app.post("/signup", async (req, res) => {
    const user=new User(req.body) // created instance of the User model 
    try{
        await user.save(req.body)
        res.send('User added successfully')
    }
    catch(err){
        res.status(400).send('Error saving the user:' +err.message)
    }   
})

app.get("/user", async (req, res) => {

    try{
        const user =await User.findOne({emailId : req.body.emailId})
        if(!user.length){
            res.status(400).send('User not found')
        }
        else {
            res.send(user)
        }   
    }
    catch {
        res.status(400).send('Something went wrong')
    }
})

app.get('/feed', async (req, res) => {
    try{
        const user= await User.find({})
        if(!user.length){
            res.status(400).send('No record found')
        }
        else {
            res.send(user)
        }
    }
    catch {
        res.status(400).send('Something went wrong')
    }
})

app.delete('/delete', async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.body.userId)
        res.status(400).send('User deleted successfully')
    }
    catch {
        res.status(400).send('Something went wrong')
    }
})

app.patch('/user', async(req, res) => {
    const data= req.body
    try {
        await user.findByIdAndUpdate({_id : req.body.userId}, data) 
        res.send('Data updated successfully')
    }
    catch {
        res.status(400).send('Something went wrong')
    }
})


connectDb().then(() => {
    console.log('Database connection established')
    app.listen(7777, (req,res) => {
        console.log('Server is running on port 7777')
    })
})
.catch((err) => {
    console.error('Database cannot be connected')
})
