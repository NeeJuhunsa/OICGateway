const express = require("express")
//const axios = require("axios").create({baseUrl: "https://jsonplaceholder.typicode.com"});
const axios = require('axios').default;
const app = express()
const PORT = process.env.PORT || 8082


app.get("/", (req, res)=>{
    res.json({result: "ok", data:[1,2,3,4,5,9,10]})
})

app.get("/async", async (req, res) => {
	try {

        const URL = "https://jsonplaceholder.typicode.com/posts"
        const response = await axios.get(URL);
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});


app.listen(PORT, ()=>{
    console.log(`Serer is running. ${PORT}`)
})




