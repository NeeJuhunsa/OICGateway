const express = require("express")
const app = express()
const PORT = process.env.PORT || 8082


app.get("/", (req, res)=>{
    res.json({result: "ok", data:[1,2,3,4,5,9,10]})
})

app.listen(PORT, ()=>{
    console.log(`Serer is running. ${PORT}`)
})




