const express = require("express")

const app = express()

app.use('/test',(req,res) => {
    res.send('hello test')
})

app.listen(3000, () => {
    console.log('Heloo from server')
})