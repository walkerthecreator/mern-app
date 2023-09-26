const express = require("express")
const server = express()
const cors = require("cors")

server.use(cors())

server.get("/" , (req,res) =>{
    return res.send("welcome to tasker")
})

server.listen(4000 , () => {
    console.log("server started on 3000")
})
