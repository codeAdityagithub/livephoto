const express = require("express")

const app = express()

app.use(express.static('images'))
app.use(express.urlencoded({extended:true}))


app.listen(3000)