const express = require("express")
const app = express()
app.get("/", (req,res) => res.send("Olá"))
app.listen(2000, () => console.log("Servidor rodando!"))