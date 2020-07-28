const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req,res) => {
    res.send("");
})

app.listen(8080, () => console.log("Server is Open"));