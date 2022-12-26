const express = require("express");
const path = require("path");
const app = express();
const puert = 3030;
app.use(express.static("public"))
app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})
app.listen(puert, () =>
  console.log("Bienvenido a colorimetriaSegunRo " +"http://localhost:"+puert)
);
